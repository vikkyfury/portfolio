import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiMessageSquare, FiUser, FiGlobe } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import Section from './Section';
import AccentButton from './AccentButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("zMSNdP34YWZ4qGf1U");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'service_561y9oj',
        'template_nfu0pvz',
        e.target as HTMLFormElement,
        'zMSNdP34YWZ4qGf1U'
      );
      
      if (result.status === 200) {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        setShowSuccessMessage(true);
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccessMessage(false), 5000);
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Form submission failed:', error);
      setIsSubmitting(false);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at vikkyus2772000@gmail.com');
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'vikkyus2772000@gmail.com',
      link: 'mailto:vikkyus2772000@gmail.com',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '716-275-7777',
      link: 'tel:+17162757777',
      color: 'from-cyan-400 to-indigo-400'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Charlotte, NC',
      link: null,
      color: 'from-indigo-400 to-blue-400'
    }
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      url: 'https://github.com/vikkyfury',
      color: 'hover:from-blue-400 hover:to-cyan-400'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vikaskaturu/',
      color: 'hover:from-cyan-400 hover:to-indigo-400'
    }
  ];

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's connect and discuss AI/ML opportunities"
      className="py-12"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card p-6 relative overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-cyan-400/3 to-indigo-400/5 rounded-xl"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 rounded-lg flex items-center justify-center">
                  <FiMessageSquare className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Send me a message</h3>
              </div>
              
              {/* Success Message */}
              <AnimatePresence>
                {showSuccessMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="mb-4 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                  >
                    <FiCheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 font-medium text-sm">Message sent successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-white">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <FiUser className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-white">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <FiMail className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-sm font-semibold text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="flex-1 w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Type your message here .."
                  />
                </div>

                <AccentButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  <div className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </div>
                </AccentButton>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card p-6 relative overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-cyan-400/3 to-indigo-400/5 rounded-xl"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <FiMail className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Get in touch</h3>
              </div>
              
              <div className="space-y-4 flex-1">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-400/5 via-cyan-400/3 to-indigo-400/5 border border-gradient-to-r from-blue-400/15 via-cyan-400/10 to-indigo-400/15 hover:border-gradient-to-r hover:from-blue-400/25 hover:via-cyan-400/20 hover:to-indigo-400/25 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {React.createElement(info.icon, { className: "w-5 h-5 text-white" })}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white/70 font-medium mb-1">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FiGlobe className="w-4 h-4 text-blue-400" />
                  Connect with me
                </h4>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-12 h-12 bg-gradient-to-r from-blue-400/15 via-cyan-400/10 to-indigo-400/15 border border-gradient-to-r from-blue-400/20 via-cyan-400/15 to-indigo-400/20 rounded-lg flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 ${social.color}`}
                    >
                      {React.createElement(social.icon, { className: "w-5 h-5" })}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact; 