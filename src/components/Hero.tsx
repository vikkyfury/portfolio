import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiStar } from 'react-icons/fi';
import AccentButton from './AccentButton';

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);


  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + particle.speed * 5,
              repeat: Infinity,
              delay: particle.id * 0.5,
            }}
          />
        ))}

        {/* Geometric Network Background */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </radialGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Dots */}
          <circle cx="20" cy="20" r="0.3" fill="url(#dotGradient)" />
          <circle cx="80" cy="20" r="0.3" fill="url(#dotGradient)" />
          <circle cx="20" cy="80" r="0.3" fill="url(#dotGradient)" />
          <circle cx="80" cy="80" r="0.3" fill="url(#dotGradient)" />
          <circle cx="50" cy="50" r="0.3" fill="url(#dotGradient)" />
          <circle cx="35" cy="35" r="0.3" fill="url(#dotGradient)" />
          <circle cx="65" cy="35" r="0.3" fill="url(#dotGradient)" />
          <circle cx="35" cy="65" r="0.3" fill="url(#dotGradient)" />
          <circle cx="65" cy="65" r="0.3" fill="url(#dotGradient)" />
          
          {/* Connecting Lines */}
          <line x1="20" y1="20" x2="80" y2="20" stroke="url(#lineGradient)" strokeWidth="0.1" />
          <line x1="20" y1="20" x2="20" y2="80" stroke="url(#lineGradient)" strokeWidth="0.1" />
          <line x1="80" y1="20" x2="80" y2="80" stroke="url(#lineGradient)" strokeWidth="0.1" />
          <line x1="20" y1="80" x2="80" y2="80" stroke="url(#lineGradient)" strokeWidth="0.1" />
          <line x1="20" y1="20" x2="80" y2="80" stroke="url(#lineGradient)" strokeWidth="0.1" />
          <line x1="80" y1="20" x2="20" y2="80" stroke="url(#lineGradient)" strokeWidth="0.1" />
          <line x1="50" y1="20" x2="50" y2="80" stroke="url(#lineGradient)" strokeWidth="0.1" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="url(#lineGradient)" strokeWidth="0.1" />
        </svg>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Tech Elements */}
        <motion.div
          className="absolute top-20 left-10 text-blue-400/20 text-2xl font-mono"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          &lt;/&gt;
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-cyan-400/20 text-xl font-mono"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          AI
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-blue-400/20 text-lg font-mono"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          ML
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <FiStar className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Hello, I'm</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Venkata Sai Vikas
              </span>
              <br />
              <span className="text-white">Katuru</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              AI Engineer & ML Specialist passionate about building intelligent systems that solve real-world problems
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-white/70 text-sm">1+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full animate-pulse"></div>
                <span className="text-white/70 text-sm">20+ Technologies</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <AccentButton
                href="#projects"
                variant="primary"
                size="lg"
                className="group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects
                <FiArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </AccentButton>
              <AccentButton
                href="/vikas_resume.pdf"
                variant="outline"
                size="lg"
                className="group transform hover:scale-105 transition-all duration-300 border-2 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-cyan-400/10"
              >
                <FiDownload className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </AccentButton>
            </motion.div>

            {/* Available Badge and Social Links */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              {/* Available Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-white text-sm font-medium rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Available for Work
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/vikkyfury"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-400/20 via-cyan-400/15 to-indigo-400/20 border border-gradient-to-r from-blue-400/30 via-cyan-400/20 to-indigo-400/30 rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 backdrop-blur-sm"
                >
                  <FiGithub className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vikaskaturu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-400/20 via-cyan-400/15 to-indigo-400/20 border border-gradient-to-r from-blue-400/30 via-cyan-400/20 to-indigo-400/30 rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 backdrop-blur-sm"
                >
                  <FiLinkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="mailto:vikkyus2772000@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-400/20 via-cyan-400/15 to-indigo-400/20 border border-gradient-to-r from-blue-400/30 via-cyan-400/20 to-indigo-400/30 rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 backdrop-blur-sm"
                >
                  <FiMail className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/15 to-indigo-400/20 rounded-full blur-2xl animate-pulse"></div>
                
                {/* Image Border */}
                <div className="absolute inset-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 rounded-full p-1">
                  <div className="w-full h-full bg-bg rounded-full overflow-hidden">
                    <img
                      src="/image.png"
                      alt="Venkata Sai Vikas Katuru"
                      className="w-full h-full object-cover"
                      style={{ transform: 'rotate(-90deg)' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-blue-400/10 via-cyan-400/5 to-indigo-400/10 flex items-center justify-center text-6xl hidden">
                      👨‍💻
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        .sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
      ` }} />
    </section>
  );
};

export default Hero; 