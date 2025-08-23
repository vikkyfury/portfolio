import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: FiGithub,
      url: 'https://github.com/vikkyfury',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/vikaskaturu/',
      label: 'LinkedIn'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-gradient-to-r from-accent/30 via-accent2/20 to-purple-500/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-accent via-accent2 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-bg font-bold text-sm">VK</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-accent via-accent2 to-purple-500 bg-clip-text text-transparent">Venkata Sai Vikas Katuru</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              AI/ML Engineer passionate about creating intelligent solutions that drive real-world impact. 
              Specialized in machine learning, deep learning, and natural language processing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-r from-accent/20 via-accent2/15 to-purple-500/20 border border-gradient-to-r from-accent/30 via-accent2/20 to-purple-500/30 rounded-lg flex items-center justify-center text-white hover:shadow-glow transition-all duration-200"
                >
                  {React.createElement(social.icon, { className: "w-5 h-5" })}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gradient-to-r from-accent/30 via-accent2/20 to-purple-500/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm">
            © 2024 Venkata Sai Vikas Katuru. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center mt-2 md:mt-0">
            Made with <FiHeart className="w-4 h-4 text-accent mx-1" /> using React & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 