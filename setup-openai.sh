#!/bin/bash

echo "🔐 Setting up OpenAI API Key for Fury Chatbot..."

# Check if .env file exists
if [ -f ".env" ]; then
    echo "📝 Current .env file found. Backing up to .env.backup"
    cp .env .env.backup
fi

echo ""
echo "To enable smart AI responses in the chatbot, you need a valid OpenAI API key."
echo ""
echo "📋 Steps to get your OpenAI API key:"
echo "1. Go to https://platform.openai.com/api-keys"
echo "2. Sign in or create an account"
echo "3. Click 'Create new secret key'"
echo "4. Copy the generated key (starts with 'sk-')"
echo ""
echo "⚠️  Note: The current setup uses fallback responses which work well,"
echo "   but OpenAI integration provides more dynamic and contextual responses."
echo ""

# Ask user if they want to set up OpenAI
read -p "Do you want to set up OpenAI API key now? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    read -p "Enter your OpenAI API key (starts with 'sk-'): " openai_key
    
    if [[ $openai_key == sk-* ]]; then
        # Create .env file with the provided key
        cat > .env << EOF
# OpenAI API Configuration
OPENAI_API_KEY=$openai_key

# Server Configuration
PORT=3001
NODE_ENV=development
EOF
        
        echo ""
        echo "✅ OpenAI API key configured successfully!"
        echo "🔄 Please restart the server to enable smart AI responses."
        echo "   Run: cd server && npm run dev"
    else
        echo ""
        echo "❌ Invalid API key format. Key should start with 'sk-'"
        echo "🔄 Using fallback responses (which work great too!)"
    fi
else
    echo ""
    echo "✅ Keeping current fallback response system."
    echo "   The chatbot will work perfectly with predefined responses!"
fi

echo ""
echo "🎉 Fury chatbot is ready to use!"
echo "   The chatbot provides detailed information about Vikas's skills and projects." 