# Portfolio Deployment Guide

This guide will help you deploy your portfolio to make it publicly available.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables**
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Add environment variables:
     - `OPENAI_API_KEY`: Your OpenAI API key
     - `NODE_ENV`: `production`

5. **Your portfolio will be live at**: `https://your-project-name.vercel.app`

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository

3. **Set up serverless functions for the chatbot**
   - Create a `netlify/functions` folder
   - Move the server logic to serverless functions

### Option 3: Railway

1. **Connect your GitHub repository to Railway**
2. **Set environment variables**
3. **Deploy automatically**

## 🔧 Pre-Deployment Checklist

### 1. Environment Variables
Create a `.env` file with:
```env
OPENAI_API_KEY=your_actual_openai_api_key
NODE_ENV=production
PORT=3001
```

### 2. Update CORS Settings
In `server/index.ts`, update the CORS origins with your actual domain:
```typescript
origin: process.env.NODE_ENV === 'production' 
  ? ['https://your-actual-domain.com'] 
  : ['http://localhost:3000', 'http://localhost:3001']
```

### 3. Test Production Build
```bash
npm run build
npm run start:prod
```

## 🌐 Domain Configuration

### Custom Domain Setup
1. **Purchase a domain** (Namecheap, GoDaddy, etc.)
2. **Configure DNS** to point to your hosting provider
3. **Update CORS settings** with your custom domain

### SSL Certificate
- Vercel/Netlify provide automatic SSL
- For custom hosting, use Let's Encrypt

## 📱 Performance Optimization

### 1. Image Optimization
- Use WebP format for images
- Compress images before uploading
- Consider using a CDN

### 2. Code Splitting
- React already includes code splitting
- Consider lazy loading for heavy components

### 3. Caching
- Set up proper cache headers
- Use service workers for offline functionality

## 🔒 Security Considerations

### 1. Environment Variables
- Never commit API keys to Git
- Use environment variables for all sensitive data
- Rotate API keys regularly

### 2. CORS Configuration
- Only allow necessary origins
- Don't use `*` in production

### 3. Rate Limiting
- Implement rate limiting for the chatbot API
- Consider using a service like Cloudflare

## 📊 Analytics Setup

### Google Analytics
1. Create a Google Analytics account
2. Add the tracking code to `public/index.html`
3. Track user interactions with the chatbot

### Vercel Analytics
- Enable Vercel Analytics in your dashboard
- Get insights on performance and usage

## 🚨 Troubleshooting

### Common Issues

1. **Chatbot not working in production**
   - Check CORS settings
   - Verify API key is set correctly
   - Check server logs

2. **Build failures**
   - Clear node_modules and reinstall
   - Check for TypeScript errors
   - Verify all dependencies are installed

3. **Images not loading**
   - Check file paths
   - Ensure images are in the public folder
   - Verify file permissions

### Debug Commands
```bash
# Check build output
npm run build

# Test production server locally
npm run start:prod

# Check environment variables
echo $OPENAI_API_KEY

# View server logs
npm run server
```

## 📈 Post-Deployment

### 1. Monitor Performance
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check server response times

### 2. SEO Optimization
- Add meta tags to `public/index.html`
- Create a sitemap
- Submit to Google Search Console

### 3. Backup Strategy
- Regular backups of your code
- Database backups if applicable
- Environment variable backups

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review server logs
3. Test locally first
4. Contact your hosting provider's support

---

Your portfolio is now ready to go live! 🎉 