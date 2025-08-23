# Fury AI Assistant Setup Guide

## ✅ **Current Status:**
- ✅ **AI Assistant named "Fury"** - Updated in Chatbot component
- ✅ **Frontend integration** - Chatbot component is included in App.tsx
- ✅ **Backend API** - Server with OpenAI integration is ready
- ✅ **Portfolio memory** - Fury knows about your portfolio content

## 🔧 **To Make Fury Fully Functional:**

### **1. Get OpenAI API Key:**
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up/Login and get an API key
3. Copy your API key

### **2. Set Up Environment:**
1. Create `.env` file in the root directory:
```env
OPENAI_API_KEY=your_actual_openai_api_key_here
PORT=3001
NODE_ENV=development
```

### **3. Start the Backend Server:**
```bash
cd server
npm install
npm start
```

### **4. Test Fury:**
1. Start your React app: `npm start`
2. Look for the chat icon in the bottom-right corner
3. Click to open Fury
4. Ask questions like:
   - "Tell me about Vikas's projects"
   - "What skills does Vikas have?"
   - "Show me the GitHub link"

## 🎯 **What Fury Can Do:**

### **Portfolio Knowledge:**
- ✅ **Projects:** Knows about all 6 AI/ML projects
- ✅ **Skills:** Technical and soft skills
- ✅ **Contact:** Email, phone, location
- ✅ **Links:** GitHub, LinkedIn profiles

### **Commands:**
- "Open GitHub" → Returns GitHub profile link
- "Show NLP project" → Details about NLP projects
- "Download resume" → Resume download link
- "View projects" → Information about all projects

### **Features:**
- ✅ **Real-time chat** with OpenAI GPT-3.5
- ✅ **Portfolio-specific responses**
- ✅ **Professional tone**
- ✅ **Error handling**

## 🚀 **Quick Test:**
Once you set up the API key and start the server, Fury will:
1. **Welcome users** with personalized message
2. **Answer questions** about your portfolio
3. **Provide relevant links** and information
4. **Maintain conversation context**

Fury is ready to be your portfolio's AI assistant! Just need the OpenAI API key to make it fully functional. 