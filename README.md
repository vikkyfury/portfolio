# AI Student Portfolio

A modern, responsive portfolio website for AI/ML students and professionals, built with React, TypeScript, and Tailwind CSS. Features a floating AI chatbot and sleek dark-first design.

## 🚀 Features

- **Modern Design**: Dark-first theme with electric blue (#52A3FF) and neon green (#5DF4A8) accents
- **AI Chatbot**: Floating chatbot with OpenAI integration for portfolio assistance
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll animations and hover effects using Framer Motion
- **Theme Toggle**: Light/dark mode switching
- **Sections**: Hero, About, Skills, Projects, Blog, and Contact
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Backend**: Express.js, Node.js
- **AI Integration**: OpenAI API
- **Development**: Vite (for future migration)

## 📁 Project Structure

```
portfolio/
├── server/                 # Express server
│   └── index.ts           # Chat API endpoint
├── src/
│   ├── components/        # React components
│   │   ├── AccentButton.tsx
│   │   ├── Blog.tsx
│   │   ├── Chatbot.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Section.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── App.tsx            # Main app component
│   └── index.tsx          # Entry point
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Background**: `#0B0D12` (Dark)
- **Card**: `#101625` (Card background)
- **Stroke**: `#1C2333` (Borders)
- **Muted**: `#A9B3C1` (Secondary text)
- **Accent**: `#5DF4A8` (Neon green)
- **Accent2**: `#52A3FF` (Electric blue)

### Components
- **Cards**: Glassy cards with subtle borders
- **Buttons**: Gradient accent buttons with hover effects
- **Chips**: Rounded tags for technologies
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3001
   NODE_ENV=development
   ```

4. **Start development servers**
   
   **Option 1: Using the convenience script**
   ```bash
   ./start-dev.sh
   ```
   
   **Option 2: Manual start**
   ```bash
   # Terminal 1 - Start React app
   npm start
   
   # Terminal 2 - Start Express server
   npm run server
   ```
   
   This will start both the React app (port 3000) and the Express server (port 3001).

### Available Scripts

- `npm start` - Start React development server
- `npm run server` - Start Express server only
- `npm run dev` - Start both client and server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run build:server` - Build server for production
- `npm run start:prod` - Start production server

## 🤖 AI Chatbot

The portfolio includes a floating AI chatbot that can:

- Answer questions about the portfolio
- Provide information about projects and skills
- Execute commands like "Open GitHub" or "Show NLP project"
- Maintain conversation context

### Chatbot Commands
- "Open GitHub" - Returns GitHub profile link
- "Show NLP project" - Returns details about NLP projects  
- "Download resume" - Returns resume download link
- "View projects" - Returns information about all projects

## 📝 Customization

### Content Updates
1. **Personal Information**: Update content in component files
2. **Projects**: Modify `src/components/Projects.tsx`
3. **Skills**: Update `src/components/Skills.tsx`
4. **Blog Posts**: Edit `src/components/Blog.tsx`
5. **Contact Info**: Update `src/components/Contact.tsx`

### Styling
- **Colors**: Modify `tailwind.config.js` design tokens
- **Animations**: Adjust Framer Motion settings in components
- **Layout**: Update Tailwind classes in component files

### Profile Image
Replace `public/profile-image.svg` with your own image or update the path in `Hero.tsx`.

## 🌐 Deployment

### Quick Deploy (Recommended)

**Option 1: Automated Script**
```bash
./deploy.sh
```
This script will:
- Check prerequisites
- Install dependencies
- Build the project
- Deploy to Vercel automatically

**Option 2: Manual Vercel Deploy**
```bash
# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel login
vercel --prod
```

**Option 3: GitHub Integration**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Automatic deployment on every push

### Environment Variables
Set these in your hosting platform:
- `OPENAI_API_KEY`: Your OpenAI API key
- `NODE_ENV`: `production`

### Other Platforms

**Netlify**
1. Build: `npm run build`
2. Upload `build` folder to Netlify
3. Set up serverless functions for the chatbot API

**Railway**
1. Connect GitHub repository
2. Set environment variables
3. Automatic deployment

**Traditional Hosting**
1. Build: `npm run build`
2. Upload `build` folder to web server
3. Set up Express server separately for chatbot API

## 🔧 Configuration

### OpenAI API Setup
1. Get an API key from [OpenAI](https://platform.openai.com/)
2. Add to `.env` file
3. The chatbot will work with GPT-3.5-turbo by default

### Server Configuration
- **Port**: Default 3001, configurable via `PORT` env variable
- **CORS**: Enabled for development, configure for production
- **Error Handling**: Graceful fallbacks for API failures

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- ARIA labels where needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [OpenAI](https://openai.com/) for AI capabilities
- [Feather Icons](https://feathericons.com/) for icons

---

Built with ❤️ for the AI community
