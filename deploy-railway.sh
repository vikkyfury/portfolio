#!/bin/bash

echo "🚀 Deploying Portfolio Backend to Railway..."

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
fi

# Login to Railway
echo "🔐 Logging into Railway..."
railway login

# Deploy the project
echo "📦 Deploying to Railway..."
railway up

echo "✅ Deployment complete!"
echo "🌐 Your API will be available at: https://your-app-name.railway.app"
echo "📝 Don't forget to:"
echo "   1. Set OPENAI_API_KEY in Railway environment variables"
echo "   2. Update the API URL in your frontend configuration"
echo "   3. Test the chatbot on your Netlify site" 