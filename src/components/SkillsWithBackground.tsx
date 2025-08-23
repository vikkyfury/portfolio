import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ParticleBackground } from './BackgroundTemplates';

const SkillsWithBackground: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'ai-ml', name: 'AI/ML' },
    { id: 'tools', name: 'Tools' }
  ];

  const skills = [
    { name: 'React', category: 'frontend', level: 90 },
    { name: 'TypeScript', category: 'frontend', level: 85 },
    { name: 'Node.js', category: 'backend', level: 80 },
    { name: 'Python', category: 'backend', level: 90 },
    { name: 'TensorFlow', category: 'ai-ml', level: 85 },
    { name: 'PyTorch', category: 'ai-ml', level: 80 },
    { name: 'Docker', category: 'tools', level: 75 },
    { name: 'Git', category: 'tools', level: 90 }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <ParticleBackground>
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gradient-accent mb-4">
              Technical Skills
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              My expertise spans across various technologies and frameworks
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-stroke text-muted hover:border-accent/50 hover:text-accent'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-stroke hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-accent font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-stroke rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2 bg-gradient-to-r from-accent to-accent2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </ParticleBackground>
  );
};

export default SkillsWithBackground; 