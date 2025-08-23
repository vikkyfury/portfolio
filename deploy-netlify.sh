#!/bin/bash

echo "🚀 Netlify Portfolio Deployment"
echo "=============================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build completed successfully"

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
echo "   This will open your browser for authentication"

netlify deploy --prod --dir=build

echo "🎉 Deployment completed!"
echo "   Your portfolio should now be live!"
echo "   Check the URL provided above" 