import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { 
  FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, 
  FaDocker, FaAws, FaCode, FaBrain
} from 'react-icons/fa';
import { 
  SiTypescript, SiC, SiFlask, SiFastapi, SiPostman, SiJenkins, SiSwagger, SiJira, SiKubernetes, SiGit, SiGithubactions, 
  SiMongodb, SiPostgresql, SiMysql, SiOracle, SiPytorch, SiTensorflow, SiScikitlearn, SiHuggingface, SiKeras,
  SiLangchain, SiNumpy, SiPandas, SiOpencv
} from 'react-icons/si';

const Skills: React.FC = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Icon mapping for skills
  const getSkillIcon = (skillName: string) => {
    const iconMap: Record<string, any> = {
      // Languages
      'Python': FaPython,
      'Java': FaJava,
      'JavaScript': FaJs,
      'TypeScript': SiTypescript,
      'C': SiC,
      'HTML': FaHtml5,
      'CSS': FaCss3Alt,
      
      // AI/ML Frameworks
      'PyTorch': SiPytorch,
      'TensorFlow': SiTensorflow,
      'Scikit-learn': SiScikitlearn,
      'Hugging Face': SiHuggingface,
      'Keras': SiKeras,
      'LangChain': SiLangchain,
      'LangGraph': SiLangchain, // Assuming LangGraph is a variant of LangChain
      'Crew AI': SiHuggingface, // Assuming Crew AI is a variant of Hugging Face
      'Numpy': SiNumpy,
      'Pandas': SiPandas,
      'Matplotlib': SiNumpy, // Assuming Matplotlib is a variant of Numpy
      'XGBoost': SiScikitlearn, // Assuming XGBoost is a variant of Scikit-learn
      'OpenCV': SiOpencv,
      'LlamaIndex': SiHuggingface, // Assuming LlamaIndex is a variant of Hugging Face
      
      // AI/ML Concepts
      'LLMs': FaBrain,
      'NLP': FaBrain, // Assuming NLP is a variant of LLMs
      'Generative AI': FaBrain,
      'RAG': FaBrain,
      'Transformers': FaBrain,
      'Computer Vision': FaBrain,
      'Agents': FaBrain,
      'RLHF': FaBrain,
      'MLOps': FaBrain,
      'LLMOps': FaBrain,
      'Claude': FaBrain,
      'Cursor': FaBrain,
      'MCP': FaBrain,
      'Supervised Learning': FaBrain,
      'Unsupervised Learning': FaBrain,
      'Responsible AI': FaBrain,
      
      // Databases
      'MySQL': SiMysql,
      'PostgreSQL': SiPostgresql,
      'MongoDB': SiMongodb,
      'Oracle': SiOracle,
      'DynamoDB': SiMongodb, // Assuming DynamoDB is a variant of MongoDB
      'Pinecone': SiHuggingface, // Assuming Pinecone is a variant of Hugging Face
      
      // Cloud & DevOps
      'AWS': FaAws,
      'Azure': FaAws, // Assuming Azure is a variant of AWS for simplicity
      'Docker': FaDocker,
      'Kubernetes': SiKubernetes,
      'Git': SiGit,
      'CI/CD': SiGithubactions, // Assuming GitHub Actions is a CI/CD tool
      'GitHub Actions': SiGithubactions,
      
      // AWS Services
      'AWS Glue': FaAws,
      'AWS S3': FaAws,
      'AWS EC2': FaAws,
      'AWS SageMaker': FaAws,
      'AWS Lambda': FaAws,
      'AWS Kafka': FaAws,
      'AWS RedShift': FaAws,
      
      // Tools & Frameworks
      'Flask': SiFlask,
      'FastAPI': SiFastapi,
      'REST APIs': SiFastapi, // Assuming REST APIs is a variant of FastAPI
      'React.js': FaReact,
      'Postman': SiPostman,
      'Agile': FaGithub, // Assuming Agile is a variant of GitHub
      'SCRUM': FaGithub, // Assuming SCRUM is a variant of GitHub
      'Jenkins': SiJenkins,
      'Swagger': SiSwagger,
      'JIRA': SiJira,
      'Node.js': FaNodeJs,
    };
    
    const IconComponent = iconMap[skillName] || FaCode;
    return <IconComponent className="w-6 h-6" />;
  };

  // All skills organized by category
  const allSkills = [
    // Languages
    'Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'HTML', 'CSS',
    
    // AI/ML Frameworks
    'PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'Keras', 'LangChain', 'LangGraph', 'Crew AI', 'Numpy', 'Pandas', 'Matplotlib', 'XGBoost', 'OpenCV', 'LlamaIndex',
    
    // AI/ML Concepts
    'LLMs', 'NLP', 'Generative AI', 'RAG', 'Transformers', 'Computer Vision', 'Agents', 'RLHF', 'MLOps', 'LLMOps', 'Claude', 'Cursor', 'MCP', 'Supervised Learning', 'Unsupervised Learning', 'Responsible AI',
    
    // Databases
    'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'DynamoDB', 'Pinecone',
    
    // Cloud & DevOps
    'AWS', 'Azure', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'GitHub Actions',
    
    // AWS Services
    'AWS Glue', 'AWS S3', 'AWS EC2', 'AWS SageMaker', 'AWS Lambda', 'AWS Kafka', 'AWS RedShift',
    
    // Tools & Frameworks
    'Flask', 'FastAPI', 'REST APIs', 'React.js', 'Postman', 'Agile', 'SCRUM', 'Jenkins', 'Swagger', 'JIRA', 'Node.js'
  ];

  // First 20 skills to show initially (5 per row)
  const initialSkills = allSkills.slice(0, 20);
  const remainingSkills = allSkills.slice(20);
  
  const displayedSkills = showAllSkills ? allSkills : initialSkills;

  // Category detection for styling
  const languageSet = new Set(['Python','Java','JavaScript','TypeScript','C','HTML','CSS']);
  const frameworksSet = new Set(['PyTorch','TensorFlow','Scikit-learn','Hugging Face','Keras','LangChain','Numpy','Pandas','OpenCV']);
  const conceptsSet = new Set(['LLMs','NLP','Generative AI','RAG','Transformers','Computer Vision','Agents','RLHF','MLOps','LLMOps','Claude','Cursor','MCP','Supervised Learning','Unsupervised Learning','Responsible AI']);
  const databasesSet = new Set(['MySQL','PostgreSQL','MongoDB','Oracle','DynamoDB','Pinecone']);
  const cloudSet = new Set(['AWS','Azure','Docker','Kubernetes','Git','CI/CD','GitHub Actions']);
  const toolsSet = new Set(['Flask','FastAPI','REST APIs','React.js','Postman','Agile','SCRUM','Jenkins','Swagger','JIRA','Node.js']);

  const getCategory = (skill: string): 'lang' | 'framework' | 'concept' | 'db' | 'cloud' | 'tool' => {
    if (languageSet.has(skill)) return 'lang';
    if (frameworksSet.has(skill)) return 'framework';
    if (conceptsSet.has(skill)) return 'concept';
    if (databasesSet.has(skill)) return 'db';
    if (cloudSet.has(skill)) return 'cloud';
    return 'tool';
  };

  const categoryClasses: Record<string, string> = {
    lang: 'from-blue-400/4 via-cyan-400/2 to-indigo-400/4 border-blue-400/12 hover:border-blue-400/20',
    framework: 'from-cyan-400/4 via-blue-400/2 to-indigo-400/4 border-cyan-400/12 hover:border-cyan-400/20',
    concept: 'from-blue-400/4 via-cyan-400/2 to-indigo-400/4 border-blue-400/12 hover:border-blue-400/20',
    db: 'from-blue-400/4 via-cyan-400/2 to-indigo-400/4 border-blue-400/12 hover:border-blue-400/20',
    cloud: 'from-blue-400/4 via-cyan-400/2 to-indigo-400/4 border-cyan-400/12 hover:border-cyan-400/20',
    tool: 'from-blue-400/4 via-cyan-400/2 to-indigo-400/4 border-blue-400/8 hover:border-blue-400/15'
  };

  const getCardClasses = (skill: string) => {
    const cat = getCategory(skill);
    return `relative rounded-xl p-4 text-center transition-all duration-300 border overflow-hidden bg-gradient-to-br ${categoryClasses[cat]} hover:shadow-lg hover:shadow-blue-400/10`;
  };

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technical expertise and technologies"
      className="py-12"
    >
      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
      >
        {displayedSkills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="group"
          >
            <div className="relative">
              {/* Category themed card using portfolio gradients */}
              <div className={getCardClasses(skill)}>
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {getSkillIcon(skill)}
                  </div>
                </div>
                
                {/* Skill Name */}
                <h3 className="text-xs font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                  {skill}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More/Less Button */}
      {remainingSkills.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="px-6 py-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-400/15 transition-all duration-300 transform hover:scale-105"
          >
            {showAllSkills ? 'Show Less' : `Show More (${remainingSkills.length} more skills)`}
          </button>
        </motion.div>
      )}
    </Section>
  );
};

export default Skills; 