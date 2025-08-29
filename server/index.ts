import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import path from 'path';
import fs from 'fs';

// Load .env file from parent directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

console.log('Environment check:', {
  envPath: path.join(__dirname, '..', '.env'),
  hasEnvFile: require('fs').existsSync(path.join(__dirname, '..', '.env')),
  apiKeyExists: !!process.env.OPENAI_API_KEY,
  apiKeyStart: process.env.OPENAI_API_KEY?.substring(0, 10) + '...'
});

const app = express();
const PORT = process.env.PORT || 3002; // Use environment PORT or default to 3002

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://heroic-tarsier-6659d3.netlify.app', 
        'https://vikaskaturu.com',
        'https://vikas-portfolio-frontend.azurestaticapps.net' // Your Azure Static Web App domain
      ]
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'placeholder-key',
});

// Load portfolio data from JSON file
const loadPortfolioData = () => {
  try {
    const dataPath = path.join(__dirname, 'portfolio-data.json');
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    return null;
  }
};

const portfolioData = loadPortfolioData();

// Generate portfolio memory from JSON data
const generatePortfolioMemory = (data: any) => {
  if (!data) return 'Portfolio data not available.';
  
  const workExp = data.workExperience?.map((exp: any) => 
    `${exp.title} at ${exp.company} (${exp.period})\n  - ${exp.description}\n  - Technologies: ${exp.technologies.join(', ')}`
  ).join('\n\n') || 'No work experience data available.';
  
  const education = data.education?.map((edu: any) => 
    `${edu.degree} at ${edu.school} (${edu.period})`
  ).join('\n') || 'No education data available.';
  
  const skills = data.technicalSkills?.map((skill: any) => 
    `${skill.name} (${skill.level}%) - ${skill.description}`
  ).join('\n') || 'No skills data available.';
  
  const projects = data.projects?.map((project: any) => 
    `${project.title} - ${project.description} (${project.category})`
  ).join('\n') || 'No projects data available.';
  
  return `
You are Fury, an AI assistant for ${data.about?.name || 'Vikas'}'s portfolio. 

CRITICAL INSTRUCTIONS:
- ALWAYS answer the user's question directly with specific information about Vikas
- NEVER give generic greetings like "Hello! How can I help you today?" or "If you need more details, feel free to ask!"
- Provide detailed, factual information based on the data below
- Be conversational but professional and informative
- Include specific technologies, time periods, and achievements when relevant

ABOUT ${data.about?.name || 'Vikas'}:
${data.about?.description || 'AI/ML engineer passionate about building intelligent systems.'}

WORK EXPERIENCE:
${workExp}

EDUCATION:
${education}

TECHNICAL SKILLS:
${skills}

PROJECTS:
${projects}

CONTACT INFORMATION:
- Email: ${data.contact?.email || 'Not available'}
- Phone: ${data.contact?.phone || 'Not available'}
- Location: ${data.contact?.location || 'Not available'}
- GitHub: ${data.contact?.github || 'Not available'}

RESPONSE GUIDELINES:
1. For work experience questions: Provide current AI Engineer role and previous positions with specific details
2. For skills questions: List technical skills with proficiency levels (Python 95%, PyTorch 90%, etc.)
3. For education questions: Mention Master's in AI from SUNY Buffalo and Bachelor's in Mechanical Engineering
4. For project questions: Describe AI/ML projects with technologies used
5. Answer directly without asking follow-up questions
6. Use the exact information provided above

You are Fury, Vikas's portfolio assistant. Answer questions directly with specific information about Vikas.
`;
};

// Portfolio memory for the chatbot
const PORTFOLIO_MEMORY = generatePortfolioMemory(portfolioData);

// Generate fallback responses from JSON data
const generateFallbackResponses = (data: any) => {
  if (!data) {
    return {
      projects: "Portfolio data not available.",
      skills: "Portfolio data not available.",
      experience: "Portfolio data not available.",
      contact: "Portfolio data not available.",
      github: "Portfolio data not available.",
      resume: "Portfolio data not available.",
      default: "Portfolio data not available."
    };
  }

  const projects = data.projects?.map((project: any) => 
    `**${project.title}** - ${project.description}`
  ).join('\n') || 'No projects available.';

  const skills = data.technicalSkills?.map((skill: any) => 
    `• **${skill.name}** (${skill.level}%) - ${skill.description}`
  ).join('\n') || 'No skills available.';

  const experience = data.workExperience?.map((exp: any) => 
    `**${exp.title}** at ${exp.company} (${exp.period})\n  - ${exp.description}\n  - Technologies: ${exp.technologies.join(', ')}`
  ).join('\n\n') || 'No work experience available.';

  return {
    projects: `Vikas has worked on several impressive AI/ML projects:\n\n${projects}\n\nEach project demonstrates advanced AI/ML techniques and modern tech stacks!`,
    
    skills: `Vikas has comprehensive expertise in:\n\n**Technical Skills:**\n${skills}\n\nHe specializes in AI/ML, NLP, MLOps, and full-stack development!`,
    
    experience: `Vikas has valuable work experience in AI/ML:\n\n${experience}\n\n**Education:**\n${data.education?.map((edu: any) => `• ${edu.degree} at ${edu.school} (${edu.period})`).join('\n') || 'No education data available.'}`,
    
    contact: `You can reach Vikas through:\n\n📧 **Email:** ${data.contact?.email || 'Not available'}\n📱 **Phone:** ${data.contact?.phone || 'Not available'}\n📍 **Location:** ${data.contact?.location || 'Not available'}\n\nFeel free to use the contact form on the website or connect with him on LinkedIn and GitHub!`,
    
    github: `You can find Vikas's projects on GitHub at: ${data.contact?.github || 'Not available'}\n\nCheck out the code behind his AI/ML projects!`,
    
    resume: "You can download Vikas's resume from the Hero section of the portfolio. It contains detailed information about his experience, education, and technical skills.",
    
    default: `Hi! I'm Fury, ${data.about?.name || 'Vikas'}'s AI assistant. I can help you learn about his work experience, projects, skills, and education. Try asking me about his professional experience, AI/ML projects, technical skills, or how to contact him!`
  };
};

// Fallback responses for when OpenAI is not available
const FALLBACK_RESPONSES = generateFallbackResponses(portfolioData);

// Function to get fallback response based on user query
const getFallbackResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Education queries - CHECK FIRST to avoid conflicts with work experience
  if (message.includes('education') || message.includes('degree') || message.includes('university') || message.includes('college') || 
      message.includes('school') || message.includes('masters') || message.includes('bachelor') || message.includes('study') ||
      (message.includes('where') && (message.includes('study') || message.includes('masters') || message.includes('bachelor') || message.includes('degree')))) {
    
    // Specific query about topics covered in masters
    if (message.includes('topic') || message.includes('cover') || message.includes('subject') || message.includes('course') || 
        message.includes('specializ') || message.includes('focus') || message.includes('learn')) {
      return "During his Master's program in Artificial Intelligence at SUNY Buffalo (Aug 2023 - Jan 2025), Vikas covered:\n\n**Core Topics**:\n• Machine Learning and Deep Learning\n• Natural Language Processing (NLP)\n• Computer Vision and Image Processing\n• Reinforcement Learning\n• Neural Networks and AI Algorithms\n\n**Specializations**:\n• Advanced ML algorithms and optimization\n• Transformer models and BERT architectures\n• Practical AI/ML applications\n• Research methodologies in AI\n• Statistical learning and data analysis\n\n**Technologies**: Python, PyTorch, TensorFlow, Hugging Face, and various AI/ML frameworks.";
    }
    
    if (message.includes('master') || message.includes('ms') || message.includes('buffalo')) {
      return "Vikas earned his Master of Science in Artificial Intelligence from State University of New York at Buffalo (Aug 2023 - Jan 2025). He specialized in Machine Learning, Deep Learning, and Natural Language Processing, focusing on AI/ML coursework, algorithms, and practical applications.";
    } else if (message.includes('bachelor') || message.includes('mechanical') || message.includes('india')) {
      return "Vikas completed his Bachelor of Technology in Mechanical Engineering from G. Pulla Reddy Engineering College in India (Jul 2018 - Jun 2022). He focused on mechanical engineering principles, design, and manufacturing processes, developing strong analytical and problem-solving skills.";
    }
    return "Vikas has a strong educational background:\n\n• Master of Science in AI at SUNY Buffalo (Aug 2023 - Jan 2025)\n• Bachelor of Technology in Mechanical Engineering (Jul 2018 - Jun 2022)\n\nHis education combines mechanical engineering fundamentals with advanced AI/ML specialization.";
  }
  
  // Skills-related queries - CHECK SECOND to avoid conflicts
  else if (message.includes('skill') || message.includes('expertise') || message.includes('technology') || message.includes('tech') || 
           message.includes('programming') || message.includes('language') || message.includes('technologies')) {
    
    if (message.includes('python') || message.includes('pytorch') || message.includes('tensorflow')) {
      return "Vikas is highly skilled in Python (95%), PyTorch (90%), and TensorFlow (85%). He uses these for deep learning, machine learning, and AI development. His expertise includes building neural networks, training models, and implementing advanced AI algorithms.";
    } else if (message.includes('nlp') || message.includes('hugging') || message.includes('transformer') || message.includes('langchain')) {
      return "Vikas specializes in NLP with Hugging Face (88%) and LangChain (85%). He's worked on medical text analysis, sentiment analysis, and LLM integration. His projects include LLMs in Health Sciences and various NLP applications.";
    } else if (message.includes('docker') || message.includes('fastapi') || message.includes('mlops')) {
      return "Vikas has strong MLOps skills with Docker (85%), FastAPI (82%), and CI/CD pipelines. He's built end-to-end ML workflows with DVC, MLflow, and automated deployment systems.";
    }
    return FALLBACK_RESPONSES.skills;
  }
  
  // Work experience queries - CHECK THIRD to avoid conflicts
  else if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('employment') || 
           message.includes('career') || message.includes('company') || message.includes('worked') ||
           message.includes('explain') || message.includes('tell') || message.includes('about') || message.includes('past') ||
           message.includes('background') || message.includes('history') || message.includes('positions') || message.includes('roles') ||
           (message.includes('where') && !message.includes('study') && !message.includes('masters') && !message.includes('bachelor') && !message.includes('degree'))) {
    
    // Check for specific role queries first
    if (message.includes('current') || message.includes('present') || message.includes('now')) {
      return "Vikas is currently working as an AI Engineer at Community Dreams Foundation (Jul 2025 - Present). He designs and optimizes LLM workflows and RAG pipelines, integrating automated evaluation loops to ensure accuracy, efficiency, and responsible AI alignment. He also defines measurement frameworks to track model effectiveness and collaborates with cross-functional stakeholders.";
    } else if (message.includes('intern') || message.includes('appetit') || message.includes('previous')) {
      return "Vikas worked as a Machine Learning Intern at Appetit (Aug 2024 - Dec 2024). He developed conversational AI chatbots, built multi-agent systems using Crew AI, optimized product matching with Pinecone vector embeddings, and achieved 40% improvement in benchmark scores using LangSmith. Technologies: Crew AI, RAG, Pinecone, MongoDB, FastAPI, LangSmith, LLM Judge.";
    } else if (message.includes('data analyst') || message.includes('junior')) {
      return "Vikas worked as a Data Analyst - Junior at Community Dreams Foundation (Mar 2025 - Jul 2025). He led exploratory data analysis on shipment scheduling data and collaborated on ARIMA-based forecasting to reduce raw material waste by 15-20%. Technologies: Time Series Analysis, ARIMA, EDA, Data Visualization, Python.";
    }
    
    // General work experience response
    return "Vikas has valuable experience in AI and data science:\n\n**Current Role**: AI Engineer at Community Dreams Foundation (Jul 2025 - Present)\n- Designs and optimizes LLM workflows and RAG pipelines\n- Integrates automated evaluation loops for accuracy and efficiency\n- Defines measurement frameworks to track model effectiveness\n\n**Previous Roles**:\n• Data Analyst - Junior at Community Dreams Foundation (Mar 2025 - Jul 2025)\n• Machine Learning Intern at Appetit (Aug 2024 - Dec 2024)\n\nHe has expertise in Python, PyTorch, TensorFlow, Hugging Face, and various AI/ML technologies.";
  }
  
  // Project-related queries
  else if (message.includes('project') || message.includes('work') || message.includes('build') || message.includes('create') || message.includes('develop')) {
    if (message.includes('chess') || message.includes('rl') || message.includes('reinforcement')) {
      return "Vikas built an advanced Chess Game with RL using MCTS and DQN algorithms. It features dual-agent reinforcement learning with PettingZoo environment and complex strategic decision-making capabilities.";
    } else if (message.includes('health') || message.includes('medical') || message.includes('llm')) {
      return "Vikas worked on LLMs in Health Sciences, developing medical text analysis and clinical decision support systems using Transformers and BERT for healthcare applications.";
    } else if (message.includes('sentiment') || message.includes('mlops') || message.includes('pipeline')) {
      return "Vikas created a comprehensive Sentiment Analysis MLOps pipeline with DVC, MLflow, Docker, and CI/CD for Twitter and Reddit sentiment analysis.";
    } else if (message.includes('image') || message.includes('vision') || message.includes('inpainting')) {
      return "Vikas developed an Image Inpainting system using deep learning and neural networks for image restoration and filling missing image regions.";
    } else if (message.includes('coding') || message.includes('platform') || message.includes('ide')) {
      return "Vikas built a full-stack Coding Platform with integrated development environment, real-time code execution, and collaborative features using TypeScript, Docker, and Python.";
    } else if (message.includes('obesity') || message.includes('prediction') || message.includes('health')) {
      return "Vikas created an Obesity Risk Prediction ML model using comprehensive lifestyle and health data analysis with advanced predictive modeling techniques.";
    }
    return FALLBACK_RESPONSES.projects;
  }
  
  // Contact-related queries
  else if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach') || message.includes('get in touch')) {
    return FALLBACK_RESPONSES.contact;
  }
  
  // GitHub-related queries
  else if (message.includes('github') || message.includes('code') || message.includes('repository') || message.includes('repo')) {
    return FALLBACK_RESPONSES.github;
  }
  
  // Resume-related queries
  else if (message.includes('resume') || message.includes('cv') || message.includes('download')) {
    return FALLBACK_RESPONSES.resume;
  }
  
  // General queries about Vikas
  else if (message.includes('vikas') || message.includes('who') || message.includes('about')) {
    return "Vikas is an AI/ML engineer with 1+ years of experience and a Master's degree in AI. He currently works as an AI Engineer at Community Dreams Foundation and previously worked as a Data Analyst there and interned at Appetit as a Machine Learning Intern. He's passionate about building intelligent systems and has expertise in Python, PyTorch, TensorFlow, Hugging Face, and MLOps.";
  }
  
  // Default response - more helpful and specific
  else {
    // If the message contains any question words or seems like a question, provide a helpful response
    if (message.includes('?') || message.includes('what') || message.includes('how') || message.includes('when') || 
        message.includes('where') || message.includes('why') || message.includes('who') || message.includes('which')) {
      return "Here's what I know about Vikas:\n\n**Work Experience**: Currently an AI Engineer at Community Dreams Foundation (Jul 2025 - Present), previously Data Analyst there (Mar 2025 - Jul 2025) and ML Intern at Appetit (Aug 2024 - Dec 2024)\n\n**Education**: Master's in AI from SUNY Buffalo (Aug 2023 - Jan 2025), Bachelor's in Mechanical Engineering from G. Pulla Reddy Engineering College (Jul 2018 - Jun 2022)\n\n**Skills**: Python (95%), PyTorch (90%), TensorFlow (85%), Hugging Face (88%), LangChain (85%), Docker (85%), FastAPI (82%)\n\n**Projects**: Chess RL, Sentiment Analysis, Image Inpainting, Coding Platform, Obesity Prediction, LLMs in Health Sciences";
    }
    
    // For general greetings or unclear messages, provide a helpful introduction
    return "Hi! I'm Fury, Vikas's AI assistant. I can help you learn about his work experience, projects, skills, and education. Here's what I can tell you about:\n\n• **Work Experience**: Current AI Engineer role and previous positions\n• **Projects**: AI/ML projects including Chess RL, Sentiment Analysis, and more\n• **Skills**: Technical expertise in Python, PyTorch, TensorFlow, and MLOps\n• **Education**: Master's in AI and Bachelor's in Mechanical Engineering\n\nTry asking me about his experience, projects, or skills!";
  }
};

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Get the last user message
    const lastUserMessage = messages[messages.length - 1]?.content || '';

    // Check if we have a valid OpenAI API key
    const hasValidApiKey = process.env.OPENAI_API_KEY && 
                          process.env.OPENAI_API_KEY !== 'your_openai_api_key_here' && 
                          process.env.OPENAI_API_KEY !== 'placeholder-key' &&
                          process.env.OPENAI_API_KEY.length > 20;

    console.log('API Key check:', {
      hasKey: !!process.env.OPENAI_API_KEY,
      keyStartsWith: process.env.OPENAI_API_KEY?.substring(0, 10) + '...',
      isValid: hasValidApiKey
    });

    if (hasValidApiKey) {
      // Use OpenAI API directly - let the AI model handle all responses
      const systemMessage = {
        role: 'system' as const,
        content: PORTFOLIO_MEMORY
      };

      const allMessages = [systemMessage, ...messages];

      console.log('Sending to OpenAI:', {
        userMessage: lastUserMessage,
        systemPromptLength: PORTFOLIO_MEMORY.length,
        messageCount: allMessages.length
      });

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: allMessages,
        max_tokens: 500,
        temperature: 0.3, // Lower temperature for more consistent responses
      });

      const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

      console.log('OpenAI Response:', response.substring(0, 100) + '...');

      res.json({ 
        message: response,
        timestamp: new Date().toISOString()
      });
    } else {
      // Only use fallback if API key is invalid
      const fallbackResponse = getFallbackResponse(lastUserMessage);
      
      res.json({ 
        message: fallbackResponse,
        timestamp: new Date().toISOString()
      });
    }

  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Get the last user message for fallback
    const { messages } = req.body;
    const lastUserMessage = messages?.[messages.length - 1]?.content || '';
    const fallbackResponse = getFallbackResponse(lastUserMessage);
    
    // Always return a helpful response, even if there's an error
    res.json({ 
      message: fallbackResponse,
      timestamp: new Date().toISOString()
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
  
  app.get('*', (req, res) => {
    res.sendFile('dist/index.html', { root: '.' });
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Chat API available at http://localhost:${PORT}/api/chat`);
}); 