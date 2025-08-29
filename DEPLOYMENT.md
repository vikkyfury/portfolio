# Portfolio Deployment Guide

## 🚀 Deployment Options

### Frontend (Netlify) - Already Deployed ✅
Your frontend is already deployed at: https://heroic-tarsier-6659d3.netlify.app

### Backend (Railway) - Need to Deploy

## 📋 Prerequisites
1. GitHub account
2. Railway account (free tier available)
3. OpenAI API key

## 🔧 Backend Deployment Steps

### 1. Deploy to Railway

1. **Go to [Railway.app](https://railway.app)**
2. **Sign in with GitHub**
3. **Create New Project**
4. **Select "Deploy from GitHub repo"**
5. **Choose your portfolio repository**
6. **Set Environment Variables:**
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   NODE_ENV=production
   PORT=3001
   ```

### 2. Alternative: Deploy to Render

1. **Go to [Render.com](https://render.com)**
2. **Create New Web Service**
3. **Connect your GitHub repo**
4. **Configure:**
   - **Build Command:** `npm install && npm run build:server`
   - **Start Command:** `npm run start:prod`
   - **Environment Variables:** Same as above

### 3. Alternative: Deploy to Heroku

1. **Install Heroku CLI**
2. **Create Heroku app:**
   ```bash
   heroku create vikas-portfolio-api
   ```
3. **Set environment variables:**
   ```bash
   heroku config:set OPENAI_API_KEY=your_api_key
   heroku config:set NODE_ENV=production
   ```
4. **Deploy:**
   ```bash
   git push heroku main
   ```

## 🔗 Update Frontend API URL

Once your backend is deployed, update the API URL in your frontend:

### Option 1: Environment Variable (Recommended)
1. **Go to Netlify Dashboard**
2. **Site Settings > Environment Variables**
3. **Add:**
   ```
   REACT_APP_API_URL=https://your-backend-url.railway.app
   ```
4. **Redeploy**

### Option 2: Update Code
Update `src/config/api.ts`:
```typescript
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-backend-url.railway.app';
```

## 🧪 Testing Deployment

1. **Test Backend API:**
   ```bash
   curl -X POST https://your-backend-url.railway.app/api/chat \
     -H "Content-Type: application/json" \
     -d '{"messages": [{"role": "user", "content": "Hello"}]}'
   ```

2. **Test Frontend Chatbot:**
   - Visit your Netlify site
   - Open the chatbot
   - Ask a question about the portfolio

## 🔒 Security Notes

- ✅ API key is stored securely in environment variables
- ✅ CORS is configured for your domain
- ✅ Rate limiting should be added for production

## 📊 Monitoring

- **Railway:** Built-in monitoring and logs
- **Netlify:** Built-in analytics and performance monitoring
- **Add Google Analytics** for user insights

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Check CORS configuration in `server/index.ts`
   - Ensure your domain is in the allowed origins

2. **API Key Issues:**
   - Verify API key is set in environment variables
   - Check OpenAI account for usage limits

3. **Build Failures:**
   - Check Railway/Render logs
   - Ensure all dependencies are in `package.json`

### Debug Commands:
```bash
# Check if backend is running
curl https://your-backend-url.railway.app/api/health

# Test chat API
curl -X POST https://your-backend-url.railway.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "content": "test"}]}'
```

## 📈 Performance Optimization

1. **Enable compression in production**
2. **Add caching headers**
3. **Optimize images and assets**
4. **Use CDN for static assets**

## 🔄 Continuous Deployment

Set up automatic deployments:
1. **Connect GitHub to Railway/Render**
2. **Enable auto-deploy on push to main**
3. **Set up staging environment if needed** 