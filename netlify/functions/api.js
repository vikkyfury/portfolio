const OpenAI = require('openai');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'placeholder-key',
});

// Portfolio data (you can move this to a separate file)
const portfolioData = {
  about: {
    name: "Vikas",
    description: "AI/ML engineer passionate about building intelligent systems."
  },
  workExperience: [
    {
      title: "AI Engineer",
      company: "Community Dreams Foundation",
      period: "Jul 2025 - Present",
      description: "Designs and optimizes LLM workflows and RAG pipelines",
      technologies: ["Python", "LLMs", "RAG", "MLOps"]
    },
    {
      title: "Data Analyst - Junior",
      company: "Community Dreams Foundation", 
      period: "Mar 2025 - Jul 2025",
      description: "Led exploratory data analysis on shipment scheduling data",
      technologies: ["Python", "ARIMA", "EDA", "Data Visualization"]
    },
    {
      title: "Machine Learning Intern",
      company: "Appetit",
      period: "Aug 2024 - Dec 2024", 
      description: "Developed conversational AI chatbots and multi-agent systems",
      technologies: ["Crew AI", "RAG", "Pinecone", "MongoDB", "FastAPI"]
    }
  ],
  education: [
    {
      degree: "Master of Science in Artificial Intelligence",
      school: "State University of New York at Buffalo",
      period: "Aug 2023 - Jan 2025"
    },
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      school: "G. Pulla Reddy Engineering College",
      period: "Jul 2018 - Jun 2022"
    }
  ],
  technicalSkills: [
    { name: "Python", level: 95, description: "Primary programming language" },
    { name: "PyTorch", level: 90, description: "Deep learning framework" },
    { name: "TensorFlow", level: 85, description: "Machine learning framework" },
    { name: "Hugging Face", level: 88, description: "NLP and transformers" },
    { name: "LangChain", level: 85, description: "LLM framework" },
    { name: "Docker", level: 85, description: "Containerization" },
    { name: "FastAPI", level: 82, description: "API development" }
  ],
  projects: [
    {
      title: "Chess Game with RL",
      description: "Advanced chess game using MCTS and DQN algorithms",
      category: "Reinforcement Learning"
    },
    {
      title: "LLMs in Health Sciences", 
      description: "Medical text analysis and clinical decision support",
      category: "NLP"
    },
    {
      title: "Sentiment Analysis MLOps",
      description: "Comprehensive MLOps pipeline for sentiment analysis",
      category: "MLOps"
    },
    {
      title: "Image Inpainting",
      description: "Deep learning system for image restoration",
      category: "Computer Vision"
    },
    {
      title: "Coding Platform",
      description: "Full-stack platform with integrated development environment",
      category: "Full-Stack"
    },
    {
      title: "Obesity Risk Prediction",
      description: "ML model for obesity risk prediction",
      category: "Machine Learning"
    }
  ],
  contact: {
    email: "vikas@example.com",
    phone: "+1 (555) 123-4567",
    location: "Buffalo, NY",
    github: "https://github.com/vikkyfury"
  }
};

// Generate portfolio memory
const generatePortfolioMemory = (data) => {
  const workExp = data.workExperience?.map((exp) => 
    `${exp.title} at ${exp.company} (${exp.period})\n  - ${exp.description}\n  - Technologies: ${exp.technologies.join(', ')}`
  ).join('\n\n') || 'No work experience data available.';
  
  const education = data.education?.map((edu) => 
    `${edu.degree} at ${edu.school} (${edu.period})`
  ).join('\n') || 'No education data available.';
  
  const skills = data.technicalSkills?.map((skill) => 
    `${skill.name} (${skill.level}%) - ${skill.description}`
  ).join('\n') || 'No skills data available.';
  
  const projects = data.projects?.map((project) => 
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

// Generate fallback responses
const generateFallbackResponses = (data) => {
  const projects = data.projects?.map((project) => 
    `**${project.title}** - ${project.description}`
  ).join('\n') || 'No projects available.';

  const skills = data.technicalSkills?.map((skill) => 
    `• **${skill.name}** (${skill.level}%) - ${skill.description}`
  ).join('\n') || 'No skills available.';

  const experience = data.workExperience?.map((exp) => 
    `**${exp.title}** at ${exp.company} (${exp.period})\n  - ${exp.description}\n  - Technologies: ${exp.technologies.join(', ')}`
  ).join('\n\n') || 'No work experience available.';

  return {
    projects: `Vikas has worked on several impressive AI/ML projects:\n\n${projects}\n\nEach project demonstrates advanced AI/ML techniques and modern tech stacks!`,
    skills: `Vikas has comprehensive expertise in:\n\n**Technical Skills:**\n${skills}\n\nHe specializes in AI/ML, NLP, MLOps, and full-stack development!`,
    experience: `Vikas has valuable work experience in AI/ML:\n\n${experience}\n\n**Education:**\n${data.education?.map((edu) => `• ${edu.degree} at ${edu.school} (${edu.period})`).join('\n') || 'No education data available.'}`,
    contact: `You can reach Vikas through:\n\n📧 **Email:** ${data.contact?.email || 'Not available'}\n📱 **Phone:** ${data.contact?.phone || 'Not available'}\n📍 **Location:** ${data.contact?.location || 'Not available'}\n\nFeel free to use the contact form on the website or connect with him on LinkedIn and GitHub!`,
    github: `You can find Vikas's projects on GitHub at: ${data.contact?.github || 'Not available'}\n\nCheck out the code behind his AI/ML projects!`,
    resume: "You can download Vikas's resume from the Hero section of the portfolio. It contains detailed information about his experience, education, and technical skills.",
    default: `Hi! I'm Fury, ${data.about?.name || 'Vikas'}'s AI assistant. I can help you learn about his work experience, projects, skills, and education. Try asking me about his professional experience, AI/ML projects, technical skills, or how to contact him!`
  };
};

// Get fallback response based on user query
const getFallbackResponse = (userMessage, data) => {
  const message = userMessage.toLowerCase();
  const fallbackResponses = generateFallbackResponses(data);
  
  if (message.includes('education') || message.includes('degree') || message.includes('university') || message.includes('college') || 
      message.includes('school') || message.includes('masters') || message.includes('bachelor') || message.includes('study')) {
    return "Vikas has a strong educational background:\n\n• Master of Science in AI at SUNY Buffalo (Aug 2023 - Jan 2025)\n• Bachelor of Technology in Mechanical Engineering (Jul 2018 - Jun 2022)\n\nHis education combines mechanical engineering fundamentals with advanced AI/ML specialization.";
  } else if (message.includes('skill') || message.includes('expertise') || message.includes('technology') || message.includes('tech')) {
    return fallbackResponses.skills;
  } else if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('employment')) {
    return fallbackResponses.experience;
  } else if (message.includes('project') || message.includes('work') || message.includes('build') || message.includes('create')) {
    return fallbackResponses.projects;
  } else if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
    return fallbackResponses.contact;
  } else if (message.includes('github') || message.includes('code') || message.includes('repository')) {
    return fallbackResponses.github;
  } else if (message.includes('resume') || message.includes('cv') || message.includes('download')) {
    return fallbackResponses.resume;
  } else {
    return fallbackResponses.default;
  }
};

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' })
      };
    }

    const { messages } = JSON.parse(event.body);

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Messages array is required' })
      };
    }

    const lastUserMessage = messages[messages.length - 1]?.content || '';
    const hasValidApiKey = process.env.OPENAI_API_KEY && 
                          process.env.OPENAI_API_KEY !== 'your_openai_api_key_here' && 
                          process.env.OPENAI_API_KEY !== 'placeholder-key' &&
                          process.env.OPENAI_API_KEY.length > 20;

    if (hasValidApiKey) {
      // Use OpenAI API
      const systemMessage = {
        role: 'system',
        content: generatePortfolioMemory(portfolioData)
      };

      const allMessages = [systemMessage, ...messages];

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: allMessages,
        max_tokens: 500,
        temperature: 0.3,
      });

      const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          message: response,
          timestamp: new Date().toISOString()
        })
      };
    } else {
      // Use fallback response
      const fallbackResponse = getFallbackResponse(lastUserMessage, portfolioData);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          message: fallbackResponse,
          timestamp: new Date().toISOString()
        })
      };
    }

  } catch (error) {
    console.error('Chat API Error:', error);
    
    const { messages } = JSON.parse(event.body || '{}');
    const lastUserMessage = messages?.[messages.length - 1]?.content || '';
    const fallbackResponse = getFallbackResponse(lastUserMessage, portfolioData);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: fallbackResponse,
        timestamp: new Date().toISOString()
      })
    };
  }
}; 