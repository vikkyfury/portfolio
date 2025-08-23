#!/bin/bash

echo "🔄 Portfolio Data Update Helper"
echo "================================"
echo ""
echo "This script helps you update the chatbot data when you add a new resume."
echo ""

# Check if portfolio-data.json exists
if [ ! -f "server/portfolio-data.json" ]; then
    echo "❌ Error: server/portfolio-data.json not found!"
    echo "Please make sure the file exists before running this script."
    exit 1
fi

echo "📋 Current portfolio data structure:"
echo "• Work Experience"
echo "• Education" 
echo "• Technical Skills"
echo "• Projects"
echo "• Contact Information"
echo ""

echo "🔄 To update your portfolio data:"
echo ""
echo "1. Edit server/portfolio-data.json with your new information"
echo "2. Restart the server: cd server && npm run dev"
echo "3. The chatbot will automatically use the updated data"
echo ""

echo "📝 Quick update guide:"
echo ""
echo "For Work Experience:"
echo "  - Update the 'workExperience' array"
echo "  - Add new jobs, update periods, achievements"
echo ""
echo "For Skills:"
echo "  - Update the 'technicalSkills' array"
echo "  - Modify proficiency levels (0-100)"
echo "  - Add new skills or remove old ones"
echo ""
echo "For Projects:"
echo "  - Update the 'projects' array"
echo "  - Add new projects, update descriptions"
echo "  - Update GitHub links"
echo ""
echo "For Education:"
echo "  - Update the 'education' array"
echo "  - Add new degrees, update periods"
echo ""

echo "✅ The chatbot will automatically reflect all changes!"
echo "   No need to modify server code - just update the JSON file."
echo ""
echo "💡 Tip: You can also update the React components (Experience.tsx, Skills.tsx, etc.)"
echo "   to keep the website and chatbot data in sync." 