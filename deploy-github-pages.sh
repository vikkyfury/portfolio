#!/bin/bash

echo "🚀 GitHub Pages Portfolio Deployment"
echo "==================================="

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

echo "📁 Your portfolio is ready for deployment!"
echo ""
echo "🌐 To deploy to GitHub Pages:"
echo "1. Create a new repository on GitHub"
echo "2. Push your code to GitHub:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "3. Go to repository Settings → Pages"
echo "4. Select 'Deploy from a branch'"
echo "5. Choose 'main' branch and '/docs' folder"
echo "6. Copy the build folder to docs:"
echo "   cp -r build docs"
echo "   git add docs"
echo "   git commit -m 'Add docs for GitHub Pages'"
echo "   git push"
echo ""
echo "🎉 Your portfolio will be live at:"
echo "   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
echo ""
echo "📝 Note: The chatbot will work with fallback responses"
echo "   since GitHub Pages doesn't support server-side functions." 