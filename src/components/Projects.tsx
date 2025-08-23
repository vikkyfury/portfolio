import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiArrowRight, FiRotateCcw, FiInfo } from 'react-icons/fi';
import Section from './Section';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [expandedTech, setExpandedTech] = useState<number[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleCard = (projectId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggling card:', projectId);
    setFlippedCards(prev => {
      const newState = prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId];
      console.log('New flipped cards state:', newState);
      return newState;
    });
  };

  const toggleTechExpansion = (projectId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedTech(prev => {
      const newState = prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId];
      return newState;
    });
  };

  const projects = [
    {
      id: 1,
      title: "Chess Game with RL",
      description: "Dual-agent chess using MCTS and DQN algorithms. Implemented advanced reinforcement learning techniques with strategic decision-making capabilities. Features competitive AI agents and comprehensive game analysis.",
      detailedDescription: "Advanced reinforcement learning project implementing a sophisticated dual-agent chess game. Features Monte Carlo Tree Search (MCTS) and Deep Q-Network (DQN) algorithms competing against each other. Built with PettingZoo environment supporting 4672 action space for complex strategic decision-making.",
      thumbnail: "♟️",
      category: "RL",
      technologies: ["MCTS", "DQN", "PettingZoo", "Python", "Jupyter"],
      tools: ["🧠", "⚡", "🎯"],
      github: "https://github.com/vikkyfury/Chess-game-with-RL-environments",
      features: [
        "Dual-agent reinforcement learning",
        "MCTS vs DQN comparison",
        "Strategic decision making",
        "Complex game environment"
      ]
    },
    {
      id: 2,
      title: "Transformers in Clinical Trial Reasoning",
      description: "Transformers for healthcare with clinical trial analysis. Developed specialized models for clinical decision support and patient data interpretation. Implements advanced NLP techniques for medical applications.",
      detailedDescription: "Comprehensive research and implementation of Transformer models specifically designed for clinical trial reasoning and healthcare applications. Focuses on medical text analysis, clinical decision support systems, and patient data interpretation using state-of-the-art transformer architectures.",
      thumbnail: "🏥",
      category: "NLP",
      technologies: ["Transformers", "Clinical NLP", "BERT", "Python", "Jupyter"],
      tools: ["📊", "🔬", "💊"],
      github: "https://github.com/vikkyfury/LLMs-in-Health-Sciences",
      features: [
        "Clinical trial analysis",
        "Medical decision support",
        "Healthcare NLP",
        "Research implementation"
      ]
    },
    {
      id: 3,
      title: "YouTube Comments Sentiment Analysis",
      description: "MLOps pipeline with DVC, MLflow, Docker, and CI/CD. End-to-end machine learning workflow with automated deployment and monitoring. Features data versioning and experiment tracking.",
      detailedDescription: "End-to-end MLOps pipeline for YouTube comments sentiment analysis. Implements data versioning with DVC, experiment tracking with MLflow, containerization with Docker, and automated CI/CD with GitHub Actions.",
      thumbnail: "🧠",
      category: "ML",
      technologies: ["DVC", "MLflow", "Docker", "Python", "CI/CD"],
      tools: ["🔄", "📦", "⚙️"],
      github: "https://github.com/vikkyfury/sentiment_analysis",
      features: [
        "YouTube comments analysis",
        "Data versioning with DVC",
        "Experiment tracking",
        "CI/CD pipeline"
      ]
    },
    {
      id: 4,
      title: "Image Inpainting",
      description: "Image restoration using deep learning and neural networks. Advanced computer vision techniques for filling missing or damaged image regions. Implements state-of-the-art neural network architectures.",
      detailedDescription: "Advanced computer vision project for image restoration and inpainting using state-of-the-art deep learning techniques. Implements neural networks capable of filling in missing or damaged parts of images with realistic content.",
      thumbnail: "🎨",
      category: "Computer Vision",
      technologies: ["Deep Learning", "OpenCV", "Neural Networks", "Python", "Jupyter"],
      tools: ["🖼️", "🎭", "✨"],
      github: "https://github.com/vikkyfury/Image-Inpainting",
      features: [
        "Image restoration",
        "Deep learning models",
        "Neural networks",
        "Computer vision"
      ]
    },
    {
      id: 5,
      title: "Coding Platform",
      description: "Full-stack platform with IDE and collaborative features. Integrated development environment with real-time code execution and team collaboration tools. Built with modern web technologies.",
      detailedDescription: "Comprehensive full-stack coding platform featuring an integrated development environment, real-time code execution service, and collaborative coding features. Built with Python backend, TypeScript frontend, and Docker containerization.",
      thumbnail: "💻",
      category: "Full Stack",
      technologies: ["TypeScript", "Docker", "Node.js", "Python", "JavaScript"],
      tools: ["🔧", "👥", "🚀"],
      github: "https://github.com/iqbal-sk/Code",
      features: [
        "Integrated development environment",
        "Code execution service",
        "Collaborative coding",
        "Docker containerization"
      ]
    },
    {
      id: 6,
      title: "Obesity Risk Prediction",
      description: "ML model for obesity risk using lifestyle data analysis. Predictive modeling with comprehensive health factor analysis and data visualization. Provides insights into health risk factors.",
      detailedDescription: "Machine learning model for predicting obesity risk factors using comprehensive lifestyle and health data analysis. Implements advanced predictive modeling techniques with detailed data visualization and statistical analysis.",
      thumbnail: "⚖️",
      category: "ML",
      technologies: ["Scikit-learn", "Pandas", "Matplotlib", "Python", "Jupyter"],
      tools: ["📈", "🔍", "📊"],
      github: "https://github.com/vikkyfury/Obesity-Prediction",
      features: [
        "Risk factor analysis",
        "Data visualization",
        "Predictive modeling",
        "Health insights"
      ]
    },
    {
      id: 7,
      title: "OctoFit Tracker",
      description: "Full-stack fitness tracking application with comprehensive workout management. Features user authentication, progress tracking, and data visualization. Built with modern web technologies and responsive design.",
      detailedDescription: "A comprehensive fitness tracking application that allows users to log workouts, track progress, and visualize their fitness journey. Features include user authentication, workout templates, progress charts, and social features for motivation.",
      thumbnail: "💪",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      tools: ["🏃", "📊", "🎯"],
      github: "https://github.com/octofit/octofit",
      features: [
        "Workout tracking",
        "Progress visualization",
        "User authentication",
        "Responsive design"
      ]
    },
    {
      id: 8,
      title: "Language Translator",
      description: "Advanced language translation system using neural networks and NLP techniques. Supports multiple languages with high accuracy and real-time translation capabilities. Implements state-of-the-art transformer models.",
      detailedDescription: "A sophisticated language translation system that leverages neural networks and advanced NLP techniques to provide accurate translations across multiple languages. Features include real-time translation, language detection, and context-aware translations.",
      thumbnail: "🌐",
      category: "NLP",
      technologies: ["Transformers", "NLP", "Python", "TensorFlow", "FastAPI"],
      tools: ["🔤", "🌍", "⚡"],
      github: "https://github.com/vikkyfury/langwiz",
      features: [
        "Multi-language support",
        "Real-time translation",
        "Language detection",
        "Context awareness"
      ]
    }
  ];

  const categories = ['all', 'RL', 'NLP', 'ML', 'Computer Vision', 'Full Stack'];

  const filteredProjects = activeFilter === 'all' 
    ? (showAllProjects ? projects : projects.slice(0, 6))
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="AI/ML projects with modern tech stacks"
      className="py-12"
    >
      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeFilter === category
                ? 'bg-blue-400 text-white shadow-lg shadow-blue-400/20'
                : 'bg-card text-white/70 hover:text-white hover:bg-blue-400/10 border border-white/10 hover:border-blue-400/30'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group h-full min-h-[320px] perspective-1000"
            >
              <div 
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards.includes(project.id) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative card p-4 h-full flex flex-col hover:shadow-glow transition-all duration-300 border border-white/10 group-hover:border-blue-400/30 rounded-xl overflow-hidden">
                    {/* Project Header */}
                    <div className="relative mb-2">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center text-2xl backdrop-blur-sm border border-blue-400/20 group-hover:scale-110 transition-transform duration-300">
                          {project.thumbnail}
                        </div>
                        <span className="px-3 py-1.5 bg-blue-400/10 text-blue-400 text-sm rounded-full font-semibold border border-blue-400/20 backdrop-blur-sm shadow-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-all duration-300 leading-tight">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-white/70 text-sm mb-2 flex-grow leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {expandedTech.includes(project.id) 
                        ? project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-white/5 text-white/80 text-sm rounded-lg border border-white/10 backdrop-blur-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))
                        : (
                          <>
                            {project.technologies.slice(0, 2).map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 bg-white/5 text-white/80 text-sm rounded-lg border border-white/10 backdrop-blur-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span 
                                className="px-2.5 py-1 bg-blue-400/10 text-blue-400 text-sm rounded-lg border border-blue-400/20 backdrop-blur-sm font-semibold cursor-pointer hover:bg-blue-400/20 transition-all duration-200"
                                onClick={(e) => toggleTechExpansion(project.id, e)}
                              >
                                +{project.technologies.length - 2}
                              </span>
                            )}
                          </>
                        )
                      }
                      {expandedTech.includes(project.id) && (
                        <span 
                          className="px-2.5 py-1 bg-blue-400/10 text-blue-400 text-sm rounded-lg border border-blue-400/20 backdrop-blur-sm font-semibold cursor-pointer hover:bg-blue-400/20 transition-all duration-200"
                          onClick={(e) => toggleTechExpansion(project.id, e)}
                        >
                          Show Less
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto flex gap-2">
                      <button
                        onClick={(e) => toggleCard(project.id, e)}
                        className="flex-1 p-2.5 bg-blue-400/10 text-blue-400 text-xs rounded-lg border border-blue-400/20 hover:bg-blue-400/20 hover:border-blue-400/30 transition-all duration-300 flex items-center justify-center gap-1.5 group/btn font-medium cursor-pointer"
                      >
                        <FiInfo className="group-hover/btn:scale-110 transition-transform duration-300" size={12} />
                        Learn More
                      </button>
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-2.5 bg-blue-400/10 text-blue-400 text-xs rounded-lg border border-blue-400/20 hover:bg-blue-400/20 hover:border-blue-400/30 transition-all duration-300 flex items-center justify-center gap-1.5 font-medium"
                      >
                        <FiGithub size={12} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="relative card p-3 h-full flex flex-col border border-blue-400/20 rounded-xl overflow-hidden bg-blue-400/5">
                    {/* Back Header */}
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-bold text-blue-400">
                        {project.title}
                      </h3>
                      <button
                        onClick={(e) => toggleCard(project.id, e)}
                        className="p-1 text-blue-400 hover:text-white transition-colors"
                      >
                        <FiRotateCcw size={14} />
                      </button>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-white/70 text-xs mb-0 leading-relaxed">
                      {project.detailedDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-1 mt-0">
                      <h4 className="text-xs font-semibold text-blue-400 mb-0.5">Key Features:</h4>
                      <ul className="space-y-0">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="text-white/70 text-xs flex items-center gap-1">
                            <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* GitHub Link */}
                    <div className="mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full p-1.5 bg-blue-400/10 text-blue-400 text-xs rounded-lg border border-blue-400/20 hover:bg-blue-400/20 transition-all duration-300 flex items-center justify-center gap-1 font-medium"
                      >
                        <FiGithub size={12} />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-8"
      >
        <button
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="px-6 py-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 flex items-center gap-2 mx-auto group"
        >
          {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </Section>
  );
};

export default Projects; 