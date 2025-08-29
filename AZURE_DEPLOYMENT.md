# Azure Deployment Guide for Portfolio

## 🚀 Overview

This guide will help you deploy your portfolio to Azure using:
- **Azure Static Web Apps** for the React frontend
- **Azure App Service** for the Node.js backend

## 📋 Prerequisites

### Required Accounts & Tools
1. **Azure Account** (Free tier available)
2. **GitHub Account** (for CI/CD)
3. **Azure CLI** (for local deployment)
4. **OpenAI API Key** (for chatbot functionality)

### Install Azure CLI
```bash
# macOS
brew install azure-cli

# Windows (using Chocolatey)
choco install azure-cli

# Linux
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

## 🔧 Deployment Options

### Option 1: Automated Deployment (Recommended)

#### Step 1: Set up Azure Resources
```bash
# Make the deployment script executable
chmod +x azure-deploy.sh

# Run the deployment script
./azure-deploy.sh
```

#### Step 2: Configure GitHub Secrets
After running the script, you'll get deployment tokens. Add them to your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:
   - `AZURE_STATIC_WEB_APPS_API_TOKEN` (for frontend)
   - `AZUREAPPSERVICE_PUBLISHPROFILE` (for backend)
   - `OPENAI_API_KEY` (your OpenAI API key)

#### Step 3: Deploy via GitHub Actions
1. Push your code to the `main` branch
2. GitHub Actions will automatically deploy both frontend and backend
3. Check the Actions tab in your GitHub repository for deployment status

### Option 2: Manual Deployment

#### Frontend (Static Web Apps)
1. **Create Static Web App:**
   ```bash
   az staticwebapp create \
     --name vikas-portfolio-frontend \
     --resource-group vikas-portfolio-rg \
     --source https://github.com/YOUR_USERNAME/YOUR_REPO \
     --location eastus2 \
     --branch main \
     --app-location "/" \
     --api-location "server" \
     --output-location "build"
   ```

2. **Get deployment token:**
   ```bash
   az staticwebapp secrets list \
     --name vikas-portfolio-frontend \
     --resource-group vikas-portfolio-rg \
     --query "properties.apiKey" -o tsv
   ```

#### Backend (App Service)
1. **Create App Service Plan:**
   ```bash
   az appservice plan create \
     --name vikas-portfolio-plan \
     --resource-group vikas-portfolio-rg \
     --location eastus \
     --sku B1 \
     --is-linux
   ```

2. **Create Web App:**
   ```bash
   az webapp create \
     --resource-group vikas-portfolio-rg \
     --plan vikas-portfolio-plan \
     --name vikas-portfolio-api \
     --runtime "NODE:18-lts"
   ```

3. **Configure environment variables:**
   ```bash
   az webapp config appsettings set \
     --resource-group vikas-portfolio-rg \
     --name vikas-portfolio-api \
     --settings \
       NODE_ENV=production \
       PORT=8080 \
       OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Deploy code:**
   ```bash
   # Build the backend
   cd server
   npm run build
   
   # Deploy using Azure CLI
   az webapp deployment source config-zip \
     --resource-group vikas-portfolio-rg \
     --name vikas-portfolio-api \
     --src dist.zip
   ```

## 🔗 Update Frontend Configuration

After deploying the backend, update your frontend to use the Azure backend URL:

### Update API Configuration
Edit `src/config/api.ts`:
```typescript
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://vikas-portfolio-api.azurewebsites.net';
```

### Set Environment Variable in Static Web Apps
1. Go to Azure Portal → Static Web Apps → Your App
2. Navigate to **Configuration** → **Application settings**
3. Add: `REACT_APP_API_URL` = `https://vikas-portfolio-api.azurewebsites.net`

## 🧪 Testing Deployment

### Test Backend API
```bash
# Health check
curl https://vikas-portfolio-api.azurewebsites.net/api/health

# Test chatbot
curl -X POST https://vikas-portfolio-api.azurewebsites.net/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "content": "Hello"}]}'
```

### Test Frontend
1. Visit your Static Web App URL
2. Open the chatbot
3. Ask questions about the portfolio

## 💰 Cost Estimation

### Free Tier (Recommended for Portfolio)
- **Static Web Apps**: Free (100GB bandwidth/month)
- **App Service**: Free (F1 tier - 60 minutes/day)
- **Total**: $0/month

### Production Tier
- **Static Web Apps**: $9/month (unlimited bandwidth)
- **App Service**: $13/month (B1 tier)
- **Total**: ~$22/month

## 🔒 Security Configuration

### CORS Settings
Your backend is already configured for production domains. Update `server/index.ts` if needed:
```typescript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-static-web-app-url.azurestaticapps.net'] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
```

### Environment Variables
Never commit sensitive data. Use Azure App Service configuration for:
- `OPENAI_API_KEY`
- `NODE_ENV`
- `PORT`

## 📊 Monitoring & Analytics

### Azure Monitor
- Built-in monitoring for App Service
- Performance metrics and logs
- Custom alerts

### Application Insights
```bash
# Create Application Insights
az monitor app-insights component create \
  --app vikas-portfolio-insights \
  --location eastus \
  --resource-group vikas-portfolio-rg
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures:**
   - Check GitHub Actions logs
   - Verify all dependencies in `package.json`
   - Ensure TypeScript compilation succeeds

2. **CORS Errors:**
   - Update CORS configuration in `server/index.ts`
   - Verify frontend URL is in allowed origins

3. **API Key Issues:**
   - Check environment variables in Azure App Service
   - Verify OpenAI API key is valid

4. **Static Web App Not Updating:**
   - Check GitHub Actions workflow
   - Verify deployment token is correct
   - Ensure build output directory is correct

### Debug Commands
```bash
# Check App Service logs
az webapp log tail --name vikas-portfolio-api --resource-group vikas-portfolio-rg

# Check Static Web App status
az staticwebapp show --name vikas-portfolio-frontend --resource-group vikas-portfolio-rg

# Test API endpoint
curl -v https://vikas-portfolio-api.azurewebsites.net/api/health
```

## 🔄 Continuous Deployment

The GitHub Actions workflows will automatically:
- Deploy frontend on push to `main`
- Deploy backend when `server/` files change
- Run tests before deployment
- Update both environments simultaneously

## 📈 Performance Optimization

1. **Enable CDN** for Static Web Apps
2. **Configure caching** headers
3. **Optimize images** and assets
4. **Use Azure Front Door** for global distribution

## 🆘 Support

If you encounter issues:
1. Check Azure Portal logs
2. Review GitHub Actions workflow runs
3. Verify all environment variables
4. Test API endpoints manually

Your portfolio will be available at:
- **Frontend**: `https://vikas-portfolio-frontend.azurestaticapps.net`
- **Backend**: `https://vikas-portfolio-api.azurewebsites.net`