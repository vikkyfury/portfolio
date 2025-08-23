import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="AI Engineer passionate about intelligent systems"
      className="py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-white/80">
            I'm Venkata Sai Vikas, a highly driven AI Engineer with a Master's degree in AI, specializing in machine learning, natural language processing, and building intelligent systems that solve real-world problems. I enjoy designing and implementing advanced AI solutions with complex logic and functionality.
          </p>
          
          <p className="text-white/80">
            I have experience in creating end-to-end AI systems, MLOps pipelines, and production-ready applications using technologies like <span className="text-blue-400">Python</span>, <span className="text-blue-400">TensorFlow</span>, <span className="text-blue-400">PyTorch</span>, <span className="text-blue-400">LangChain</span>, <span className="text-blue-400">Docker</span>, and <span className="text-blue-400">AWS</span>.
          </p>
          
          <p className="text-white/80">
            Recently I've focused on transformer architectures, large language models, and MLOps practices. I'm passionate about remote work opportunities and believe in the power of AI to transform industries and improve human lives through innovative applications and responsible development.
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default About; 