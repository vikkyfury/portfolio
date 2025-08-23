import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiCalendar, FiExternalLink, FiChevronDown, FiChevronUp, FiBriefcase, FiBookOpen, FiAward, FiTrendingUp, FiArrowRight, FiCpu, FiBarChart2, FiZap } from 'react-icons/fi';
import Section from './Section';

const Experience: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [expandedTech, setExpandedTech] = useState<number[]>([]);
  const [expandedHighlights, setExpandedHighlights] = useState<number[]>([]);

  const experiences = [
    {
      id: 1,
      title: "AI Engineer",
      company: "Community Dreams Foundation",
      period: "Jul 2025 - Present",
      location: "United States",
      description: "Designing and optimizing LLM workflows and RAG pipelines, integrating automated evaluation loops to ensure accuracy, efficiency, and responsible AI alignment.",
      achievements: [
        "Designed and optimized LLM workflows and RAG pipelines, integrating automated evaluation loops to ensure accuracy, efficiency, and responsible AI alignment",
        "Defined measurement frameworks (latency, accuracy, utility) to track model effectiveness, cutting evaluation cycle time by 30%",
        "Collaborated with cross-functional stakeholders (engineering, product, analytics) to align model outputs with business objectives and user satisfaction metrics"
      ],
      technologies: ["RAG Pipelines", "Prompting", "LLM Workflows", "AI Alignment", "Evaluation Frameworks"],
      category: "AI/ML",
      link: "#",
      icon: <FiZap className="w-8 h-8" />,
      shortDescription: "LLM workflows & RAG pipelines with AI alignment focus"
    },
    {
      id: 2,
      title: "Data Analyst - Junior",
      company: "Community Dreams Foundation",
      period: "Mar 2025 - Jul 2025",
      location: "United States",
      description: "Led exploratory data analysis on shipment scheduling data and collaborated on ARIMA-based forecasting to reduce raw material waste.",
      achievements: [
        "Led exploratory data analysis on 2.5+ years of shipment scheduling data to identify trends, seasonality, and inefficiencies in raw material usage using time series decomposition and correlation analysis",
        "Collaborated on ARIMA based forecasting to reduce raw material waste by 15–20% through predictive scheduling"
      ],
      technologies: ["Time Series Analysis", "ARIMA", "EDA", "Data Visualization", "Python"],
      category: "Data Analysis",
      link: "#",
      icon: <FiBarChart2 className="w-8 h-8" />,
      shortDescription: "Time series analysis & ARIMA forecasting for waste reduction"
    },
    {
      id: 3,
      title: "Machine Learning Intern",
      company: "Appetit",
      period: "Aug 2024 - Dec 2024",
      location: "United States",
      description: "Developed conversational AI chatbot and multi-agent system for database querying using natural language.",
      achievements: [
        "Developed a conversational AI chatbot to enable non-technical stakeholders to query MongoDB using natural language",
        "Set up a multi agent system using Crew AI, automating query generation and improving data retrieval speed",
        "Optimized product name matching using Pinecone vector embeddings and RAG, improving information retrieval and cutting response latency by 50%",
        "Automated schema analysis, reducing query formulation errors by 25%, improving data quality and decision making",
        "Monitored agent performance with LangSmith, achieving a 40% improvement in benchmark scores post-optimization",
        "Introduced a feedback loop using LLM Judge (OLLaMA model) with scoring, discrepancy checks to refine agent responses"
      ],
      technologies: ["Crew AI", "RAG", "Pinecone", "MongoDB", "FastAPI", "LangSmith", "LLM Judge"],
      category: "AI/ML",
      link: "#",
      icon: <FiCpu className="w-8 h-8" />,
      shortDescription: "Conversational AI chatbot with multi-agent system"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Science in Artificial Intelligence",
      school: "State University of New York at Buffalo",
      period: "Aug 2023 - Jan 2025",
      location: "Buffalo, NY",
      description: "School of Engineering and Applied Sciences. Specialized in Machine Learning, Deep Learning, and Natural Language Processing. Focused on AI/ML coursework, algorithms, and practical applications in artificial intelligence.",
      highlights: [
        "Machine Learning and Deep Learning",
        "Natural Language Processing",
        "AI/ML Algorithms and Applications",
        "Research in Transformer Architectures"
      ],
      gpa: "3.6/4.0",
      icon: <FiBookOpen className="w-6 h-6" />,
      shortDescription: "Specialized in ML, Deep Learning & NLP"
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Mechanical Engineering",
      school: "G. Pulla Reddy Engineering College",
      period: "Jul 2018 - Jun 2022",
      location: "India",
      description: "Focused on mechanical engineering principles, design, and manufacturing processes. Developed strong analytical and problem-solving skills.",
      highlights: [
        "Mechanical Design and Manufacturing",
        "Analytical Problem Solving",
        "Engineering Principles",
        "Project Management"
      ],
      gpa: "9.12/10.0",
      icon: <FiBriefcase className="w-6 h-6" />,
      shortDescription: "Strong foundation in engineering principles"
    }
  ];

  const categories = ['all', 'Data Analysis', 'AI/ML'];

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeFilter);

  const toggleCard = (id: number) => {
    setExpandedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  const flipCard = (id: number) => {
    console.log('FLIP CARD CALLED with ID:', id);
    setFlippedCards(prev => {
      const newFlippedCards = prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id];
      console.log('New flipped cards state:', newFlippedCards);
      return newFlippedCards;
    });
  };

  const toggleTechExpansion = (expId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedTech(prev => {
      const newState = prev.includes(expId) 
        ? prev.filter(id => id !== expId)
        : [...prev, expId];
      return newState;
    });
  };

  const toggleHighlightsExpansion = (eduId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggle highlights expansion called for eduId:', eduId);
    setExpandedHighlights(prev => {
      const newState = prev.includes(eduId) 
        ? prev.filter(id => id !== eduId)
        : [...prev, eduId];
      console.log('New expanded highlights state:', newState);
      return newState;
    });
  };

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional journey and educational background"
      className="py-12"
    >
      {/* Enhanced Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeFilter === category
                ? 'bg-blue-400 text-white shadow-lg shadow-blue-400/20'
                : 'bg-card text-white/70 hover:text-white hover:bg-blue-400/10 border border-white/10 hover:border-blue-400/30'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Work Experience - Flip Cards Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-24"
      >
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Professional Experience
          </motion.h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
          />
          
        </div>
        
        {/* Flip Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-[420px] w-full"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="relative w-full h-full transition-all duration-700"
                style={{ 
                  transform: flippedCards.includes(exp.id) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Front of Card */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="relative overflow-hidden h-full w-full bg-card border border-accent/20 rounded-3xl p-6 flex flex-col justify-between">
                    {/* Header */}
                    <div className="text-center mb-4 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-blue-400/10 flex items-center justify-center text-2xl mx-auto mb-3 border border-blue-400/20">
                        {exp.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-blue-400 font-bold text-lg mb-2">{exp.company}</p>
                      <p className="text-muted text-sm leading-relaxed">
                        {exp.shortDescription}
                      </p>
                    </div>

                    {/* Period and Location */}
                    <div className="flex items-center justify-center gap-3 text-sm text-muted mb-4 flex-shrink-0">
                      <div className="flex items-center gap-2 px-2 py-1 bg-stroke/50 rounded-lg">
                        <FiCalendar className="w-3 h-3 text-blue-400" />
                        <span className="font-semibold text-xs">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 bg-stroke/50 rounded-lg">
                        <FiMapPin className="w-3 h-3 text-blue-400" />
                        <span className="font-semibold text-xs">{exp.location}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4 flex-shrink-0">
                      {expandedTech.includes(exp.id) 
                        ? exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gradient-to-r from-stroke/80 to-stroke/60 text-muted text-xs rounded-lg border border-accent/20 font-semibold"
                            >
                              {tech}
                            </span>
                          ))
                        : (
                          <>
                            {exp.technologies.slice(0, 3).map((tech, idx) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-gradient-to-r from-stroke/80 to-stroke/60 text-muted text-xs rounded-lg border border-accent/20 font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 3 && (
                              <span 
                                className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-lg border border-blue-400/20 font-semibold cursor-pointer hover:bg-blue-400/20 transition-all duration-200"
                                onClick={(e) => toggleTechExpansion(exp.id, e)}
                              >
                                +{exp.technologies.length - 3} more
                              </span>
                            )}
                          </>
                        )
                      }
                      {expandedTech.includes(exp.id) && (
                        <span 
                          className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-lg border border-blue-400/20 font-semibold cursor-pointer hover:bg-blue-400/20 transition-all duration-200"
                          onClick={(e) => toggleTechExpansion(exp.id, e)}
                        >
                          Show Less
                        </span>
                      )}
                    </div>

                    {/* Flip Button */}
                    <button
                      onClick={() => {
                        console.log('BUTTON CLICKED for card:', exp.id);
                        flipCard(exp.id);
                      }}
                      className="w-full py-3 bg-blue-400/10 text-blue-400 rounded-xl border border-blue-400/20 hover:bg-blue-400/20 hover:border-blue-400/30 transition-all duration-300 cursor-pointer font-bold flex items-center justify-center gap-2 text-sm flex-shrink-0"
                    >
                      <span>View Details</span>
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Back of Card */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="relative overflow-hidden h-full w-full bg-card border border-blue-400/20 rounded-3xl p-6 flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-4 flex-shrink-0">
                      <h4 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent pr-2">
                      {/* Description */}
                      <div className="mb-4">
                        <h5 className="font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                          <FiTrendingUp className="w-4 h-4" />
                          Description
                        </h5>
                        <p className="text-muted text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h5 className="font-bold text-blue-400 text-sm mb-3 flex items-center gap-2">
                          <FiAward className="w-4 h-4" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-muted"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* All Technologies */}
                      <div className="mb-4">
                        <h5 className="font-bold text-blue-400 text-sm mb-2">Technologies</h5>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gradient-to-r from-stroke/80 to-stroke/60 text-muted text-xs rounded border border-accent/20 backdrop-blur-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Flip Back Button */}
                    <button
                      onClick={() => flipCard(exp.id)}
                      className="w-full py-3 bg-blue-400/10 text-blue-400 rounded-xl border border-blue-400/20 hover:bg-blue-400/20 hover:border-blue-400/30 transition-all duration-300 cursor-pointer font-bold text-sm flex-shrink-0 mt-4"
                    >
                      Back to Overview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Education Section - Compact Grid Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Education
          </motion.h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden">
                {/* Enhanced Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Animated Border with Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg" />
                
                {/* Main Card */}
                <div className="relative card p-6 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-500 border border-white/10 group-hover:border-blue-400/30 rounded-2xl overflow-hidden backdrop-blur-sm">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  {/* Enhanced Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />

                  {/* Compact Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-2xl bg-blue-400/10 flex items-center justify-center text-2xl backdrop-blur-sm border border-blue-400/20 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      {edu.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-gradient-accent transition-all duration-300 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-400 font-semibold text-base">{edu.school}</p>
                    </div>
                  </div>
                  
                  {/* Compact Period and Location */}
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 px-2 py-1 bg-stroke/50 rounded-lg backdrop-blur-sm"
                    >
                      <FiCalendar className="w-3 h-3 text-blue-400" />
                      <span className="font-medium">{edu.period}</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 px-2 py-1 bg-stroke/50 rounded-lg backdrop-blur-sm"
                    >
                      <FiMapPin className="w-3 h-3 text-blue-400" />
                      <span className="font-medium">{edu.location}</span>
                    </motion.div>
                  </div>

                  {/* Compact GPA Display */}
                  <div className="mb-3">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-blue-400/10 text-blue-400 text-sm rounded-lg border border-blue-400/20 backdrop-blur-sm font-bold shadow-lg"
                    >
                      GPA: {edu.gpa}
                    </motion.span>
                  </div>

                  {/* Compact Description */}
                  <p className="text-muted text-sm mb-4 leading-relaxed">
                    {edu.shortDescription}
                  </p>

                  {/* Compact Highlights */}
                  <div>
                    <h5 className="font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                      <FiTrendingUp className="w-4 h-4" />
                      Key Highlights
                    </h5>
                    <ul className="space-y-1">
                      {(() => { console.log('Current expandedHighlights state:', expandedHighlights, 'edu.id:', edu.id, 'includes:', expandedHighlights.includes(edu.id)); return null; })()}
                      {expandedHighlights.includes(edu.id)
                        ? edu.highlights.map((highlight, idx) => (
                            <motion.li 
                              key={idx} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="flex items-start gap-2 text-xs text-muted"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </motion.li>
                          ))
                        : (
                          <>
                            {edu.highlights.slice(0, 2).map((highlight, idx) => (
                              <motion.li 
                                key={idx} 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-start gap-2 text-xs text-muted"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                            {edu.highlights.length > 2 && (
                              <li 
                                className="text-xs text-blue-400 font-semibold cursor-pointer hover:text-blue-300 transition-colors duration-200 px-2 py-1 rounded hover:bg-blue-400/10"
                                onClick={(e) => {
                                  console.log('Clicking on +X more highlights for eduId:', edu.id);
                                  toggleHighlightsExpansion(edu.id, e);
                                }}
                              >
                                +{edu.highlights.length - 2} more highlights
                              </li>
                            )}
                          </>
                        )
                      }
                      {expandedHighlights.includes(edu.id) && (
                        <li 
                          className="text-xs text-blue-400 font-semibold cursor-pointer hover:text-blue-300 transition-colors duration-200 px-2 py-1 rounded hover:bg-blue-400/10"
                          onClick={(e) => {
                            console.log('Clicking on Show Less for eduId:', edu.id);
                            toggleHighlightsExpansion(edu.id, e);
                          }}
                        >
                          Show Less
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Experience; 