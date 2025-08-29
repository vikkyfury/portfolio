#!/bin/bash

# Azure Portfolio Deployment Script
# This script helps deploy your portfolio to Azure

set -e

echo "🚀 Azure Portfolio Deployment Script"
echo "====================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Azure CLI is installed
check_azure_cli() {
    if ! command -v az &> /dev/null; then
        print_error "Azure CLI is not installed. Please install it first:"
        echo "https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
        exit 1
    fi
    print_success "Azure CLI is installed"
}

# Check if user is logged in to Azure
check_azure_login() {
    if ! az account show &> /dev/null; then
        print_warning "You are not logged in to Azure. Please log in:"
        az login
    fi
    print_success "Logged in to Azure"
}

# Create resource group
create_resource_group() {
    local rg_name="vikas-portfolio-rg"
    local location="eastus"
    
    print_status "Creating resource group: $rg_name"
    
    if az group show --name $rg_name &> /dev/null; then
        print_warning "Resource group $rg_name already exists"
    else
        az group create --name $rg_name --location $location
        print_success "Resource group created: $rg_name"
    fi
}

# Deploy Static Web App
deploy_static_web_app() {
    local app_name="vikas-portfolio-frontend"
    local rg_name="vikas-portfolio-rg"
    local location="eastus2"
    
    print_status "Deploying Static Web App: $app_name"
    
    # Check if static web app already exists
    if az staticwebapp show --name $app_name --resource-group $rg_name &> /dev/null; then
        print_warning "Static Web App $app_name already exists"
    else
        az staticwebapp create \
            --name $app_name \
            --resource-group $rg_name \
            --source https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/') \
            --location $location \
            --branch main \
            --app-location "/" \
            --api-location "server" \
            --output-location "build"
        
        print_success "Static Web App created: $app_name"
    fi
    
    # Get deployment token
    local deployment_token=$(az staticwebapp secrets list --name $app_name --resource-group $rg_name --query "properties.apiKey" -o tsv)
    print_success "Deployment token retrieved"
    echo "Add this token to your GitHub repository secrets as AZURE_STATIC_WEB_APPS_API_TOKEN:"
    echo "$deployment_token"
}

# Deploy App Service
deploy_app_service() {
    local app_name="vikas-portfolio-api"
    local rg_name="vikas-portfolio-rg"
    local plan_name="vikas-portfolio-plan"
    local location="eastus"
    
    print_status "Deploying App Service: $app_name"
    
    # Create App Service Plan
    if az appservice plan show --name $plan_name --resource-group $rg_name &> /dev/null; then
        print_warning "App Service Plan $plan_name already exists"
    else
        az appservice plan create \
            --name $plan_name \
            --resource-group $rg_name \
            --location $location \
            --sku B1 \
            --is-linux
        print_success "App Service Plan created: $plan_name"
    fi
    
    # Create Web App
    if az webapp show --name $app_name --resource-group $rg_name &> /dev/null; then
        print_warning "Web App $app_name already exists"
    else
        az webapp create \
            --resource-group $rg_name \
            --plan $plan_name \
            --name $app_name \
            --runtime "NODE:18-lts"
        print_success "Web App created: $app_name"
    fi
    
    # Configure app settings
    print_status "Configuring app settings..."
    az webapp config appsettings set \
        --resource-group $rg_name \
        --name $app_name \
        --settings \
            NODE_ENV=production \
            PORT=8080
    
    print_success "App settings configured"
    
    # Get publish profile
    local publish_profile=$(az webapp deployment list-publishing-profiles --name $app_name --resource-group $rg_name --xml)
    print_success "Publish profile retrieved"
    echo "Add this publish profile to your GitHub repository secrets as AZUREAPPSERVICE_PUBLISHPROFILE:"
    echo "$publish_profile"
}

# Main deployment function
main() {
    print_status "Starting Azure deployment..."
    
    check_azure_cli
    check_azure_login
    create_resource_group
    
    echo ""
    print_status "Choose deployment option:"
    echo "1) Deploy Static Web App (Frontend)"
    echo "2) Deploy App Service (Backend)"
    echo "3) Deploy Both"
    echo "4) Exit"
    
    read -p "Enter your choice (1-4): " choice
    
    case $choice in
        1)
            deploy_static_web_app
            ;;
        2)
            deploy_app_service
            ;;
        3)
            deploy_static_web_app
            echo ""
            deploy_app_service
            ;;
        4)
            print_status "Exiting..."
            exit 0
            ;;
        *)
            print_error "Invalid choice. Please run the script again."
            exit 1
            ;;
    esac
    
    echo ""
    print_success "Deployment completed!"
    print_status "Next steps:"
    echo "1. Add the deployment tokens to your GitHub repository secrets"
    echo "2. Push your code to trigger the deployment"
    echo "3. Update your frontend API URL to point to the deployed backend"
}

# Run main function
main "$@"