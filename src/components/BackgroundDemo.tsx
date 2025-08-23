import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundTemplates from './BackgroundTemplates';

const BackgroundDemo: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('neural');

  const templates = [
    {
      id: 'neural',
      name: 'Neural Network',
      description: 'Dynamic neural network connections',
      component: BackgroundTemplates.NeuralNetworkBackground
    },
    {
      id: 'particles',
      name: 'Particle System',
      description: 'Floating particles with physics',
      component: BackgroundTemplates.ParticleBackground
    },
    {
      id: 'geometric',
      name: 'Geometric Patterns',
      description: 'Clean geometric shapes',
      component: BackgroundTemplates.GeometricBackground
    }
  ];

  const SelectedTemplateComponent = templates.find(t => t.id === selectedTemplate)?.component || BackgroundTemplates.NeuralNetworkBackground;

  return (
    <div className="min-h-screen bg-bg text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gradient-accent mb-4">
            Background Templates Demo
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Explore different background templates for your portfolio. Each template offers unique visual effects and animations.
          </p>
        </motion.div>

        {/* Template Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {templates.map((template) => (
            <motion.button
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedTemplate === template.id
                  ? 'border-accent bg-accent/10'
                  : 'border-stroke bg-card hover:border-accent/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
              <p className="text-muted text-sm">{template.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Background Preview */}
        <div className="relative h-96 rounded-2xl overflow-hidden border border-stroke">
          <SelectedTemplateComponent>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-card/80 backdrop-blur-sm p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-2">{templates.find(t => t.id === selectedTemplate)?.name}</h2>
                <p className="text-muted">Background Template Preview</p>
              </div>
            </div>
          </SelectedTemplateComponent>
        </div>
      </div>
    </div>
  );
};

export default BackgroundDemo; 