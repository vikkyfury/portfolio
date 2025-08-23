import React from 'react';
import { motion } from 'framer-motion';
import BackgroundTemplates from './BackgroundTemplates';

const BackgroundUsageGuide: React.FC = () => {
  const usageExamples = [
    {
      title: 'Hero Section',
      description: 'Use as a full-screen background for maximum impact',
      component: BackgroundTemplates.NeuralNetworkBackground
    },
    {
      title: 'Section Dividers',
      description: 'Subtle backgrounds to separate content sections',
      component: BackgroundTemplates.ParticleBackground
    },
    {
      title: 'Card Backgrounds',
      description: 'Enhanced backgrounds for project or skill cards',
      component: BackgroundTemplates.GeometricBackground
    }
  ];

  return (
    <div className="min-h-screen bg-bg text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gradient-accent mb-4">
            Background Usage Guide
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Learn how to effectively use background templates in your portfolio components.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usageExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative h-64 rounded-2xl overflow-hidden border border-stroke"
            >
              <example.component>
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-muted text-sm">{example.description}</p>
                </div>
              </example.component>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-8 rounded-2xl bg-card border border-stroke"
        >
          <h2 className="text-2xl font-bold mb-4">Implementation Tips</h2>
          <ul className="space-y-3 text-muted">
            <li>• Use backgrounds sparingly to avoid visual clutter</li>
            <li>• Ensure sufficient contrast for text readability</li>
            <li>• Consider performance impact on mobile devices</li>
            <li>• Test across different screen sizes and browsers</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default BackgroundUsageGuide; 