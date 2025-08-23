import React from 'react';
import { motion } from 'framer-motion';

// Template 1: Neural Network Grid
export const NeuralNetworkBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    
    {/* Neural network pattern */}
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(102, 126, 234)" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="rgb(118, 75, 162)" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="rgb(240, 147, 251)" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
        
        {/* Neural Nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            animate={{
              r: [0.4, 1.2, 0.4],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            cx={8 + (i % 5) * 20}
            cy={10 + Math.floor(i / 5) * 20}
            r="0.8"
            fill="url(#neural-grad)"
          />
        ))}
        
        {/* Animated Connections */}
        <motion.path
          animate={{
            strokeDasharray: ["0,30", "30,0", "0,30"]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          d="M 8 10 L 28 10 L 48 10 L 68 10 L 88 10 M 8 30 L 28 30 L 48 30 L 68 30 L 88 30 M 8 50 L 28 50 L 48 50 L 68 50 L 88 50 M 8 70 L 28 70 L 48 70 L 68 70 L 88 70 M 8 90 L 28 90 L 48 90 L 68 90 L 88 90"
          stroke="url(#neural-grad)"
          strokeWidth="0.3"
          fill="none"
          strokeDasharray="0,30"
        />
      </svg>
    </div>
    
    {/* Floating orbs */}
    <div className="absolute inset-0">
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15],
          x: [0, -40, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"
      />
    </div>
    
    <div className="relative z-10">{children}</div>
  </div>
);

// Template 2: Matrix Digital Rain
export const MatrixBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
    
    {/* Matrix rain effect */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-100, window.innerHeight + 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
          className="absolute text-green-400 text-sm font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 8}px`
          }}
        >
          {String.fromCharCode(0x30A0 + Math.random() * 96)}
        </motion.div>
      ))}
    </div>
    
    {/* Grid overlay */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="matrix-grid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-green-400"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#matrix-grid)"/>
      </svg>
    </div>
    
    <div className="relative z-10">{children}</div>
  </div>
);

// Template 3: Particle System
export const ParticleBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
    
    {/* Particle system */}
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
    
    {/* Wave effect */}
    <div className="absolute inset-0 opacity-30">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(240, 147, 251, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(118, 75, 162, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-full h-full"
      />
    </div>
    
    <div className="relative z-10">{children}</div>
  </div>
);

// Template 4: Geometric Patterns
export const GeometricBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"></div>
    
    {/* Geometric shapes */}
    <div className="absolute inset-0">
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-400/30 transform rotate-45"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-24 h-24 border-2 border-purple-400/30 rounded-full"
      />
      <motion.div
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-indigo-400/30 transform rotate-12"
      />
      <motion.div
        animate={{
          rotate: [360, 180, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 right-1/3 w-28 h-28 border-2 border-pink-400/30 transform rotate-45"
      />
    </div>
    
    {/* Hexagonal pattern */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="hex-pattern" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
            <polygon points="10,0 20,5.77 20,17.32 10,23.09 0,17.32 0,5.77" 
                     fill="none" stroke="currentColor" strokeWidth="0.2" className="text-blue-400"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#hex-pattern)"/>
      </svg>
    </div>
    
    <div className="relative z-10">{children}</div>
  </div>
);

// Template 5: Gradient Mesh
export const GradientMeshBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"></div>
    
    {/* Animated gradient mesh */}
    <motion.div
      animate={{
        background: [
          "radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(118, 75, 162, 0.4) 0%, transparent 50%)",
          "radial-gradient(circle at 80% 80%, rgba(240, 147, 251, 0.4) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.4) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(118, 75, 162, 0.4) 0%, transparent 50%)",
          "radial-gradient(circle at 40% 80%, rgba(118, 75, 162, 0.4) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(240, 147, 251, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 40%, rgba(102, 126, 234, 0.4) 0%, transparent 50%)",
          "radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(118, 75, 162, 0.4) 0%, transparent 50%)"
        ]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0"
    />
    
    {/* Floating elements */}
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"
          style={{
            left: `${10 + (i % 4) * 25}%`,
            top: `${15 + Math.floor(i / 4) * 30}%`
          }}
        />
      ))}
    </div>
    
    <div className="relative z-10">{children}</div>
  </div>
);

// Template 6: Minimalist Clean
export const MinimalistBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Clean gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"></div>
    
    {/* Subtle pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="minimal-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-gray-400"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#minimal-pattern)"/>
      </svg>
    </div>
    
    {/* Subtle accent */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
    
    <div className="relative z-10">{children}</div>
  </div>
);

// Template 7: Cyberpunk Style
export const CyberpunkBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-cyan-900"></div>
    
    {/* Neon grid */}
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0, 255, 255)" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="rgb(255, 0, 255)" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="rgb(0, 255, 255)" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        <pattern id="cyber-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#neon-grad)" strokeWidth="0.3"/>
        </pattern>
        <rect width="100" height="100" fill="url(#cyber-grid)"/>
      </svg>
    </div>
    
    {/* Scanning line effect */}
    <motion.div
      animate={{
        y: [-100, window.innerHeight + 100]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
    />
    
    {/* Glitch effect */}
    <div className="absolute inset-0">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 1, 0],
            x: [0, Math.random() * 10 - 5]
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear"
          }}
          className="absolute top-0 left-0 right-0 h-px bg-cyan-400"
          style={{ top: `${20 + i * 15}%` }}
        />
      ))}
    </div>
    
    <div className="relative z-10">{children}</div>
  </div>
);

// Template 8: Organic Flow
export const OrganicFlowBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
    
    {/* Organic flowing shapes */}
    <div className="absolute inset-0">
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          borderRadius: ["50%", "30%", "50%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          borderRadius: ["30%", "50%", "30%"]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [180, 360, 180],
          borderRadius: ["40%", "60%", "40%"]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-2xl"
      />
    </div>
    
    {/* Flowing particles */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 bg-emerald-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
    
    <div className="relative z-10">{children}</div>
  </div>
);

// Template 9: Data Visualization
export const DataVizBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
    
    {/* Data bars */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            height: [0, Math.random() * 200 + 50, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 w-4 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-lg"
          style={{
            left: `${5 + i * 4.5}%`,
            height: `${Math.random() * 200 + 50}px`
          }}
        />
      ))}
    </div>
    
    {/* Connection lines */}
    <div className="absolute inset-0 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="data-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(102, 126, 234)" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="rgb(240, 147, 251)" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        <motion.path
          animate={{
            d: [
              "M 10 80 Q 30 60 50 40 Q 70 20 90 60",
              "M 10 60 Q 30 40 50 80 Q 70 60 90 40",
              "M 10 80 Q 30 60 50 40 Q 70 20 90 60"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          stroke="url(#data-grad)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </div>
    
    <div className="relative z-10">{children}</div>
  </div>
);

// Template 10: Futuristic Hologram
export const HologramBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-purple-900"></div>
    
    {/* Holographic grid */}
    <div className="absolute inset-0 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="holo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0, 255, 255)" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="rgb(255, 0, 255)" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="rgb(0, 255, 255)" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
        <pattern id="holo-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="url(#holo-grad)" strokeWidth="0.2"/>
        </pattern>
        <rect width="100" height="100" fill="url(#holo-pattern)"/>
      </svg>
    </div>
    
    {/* Holographic orbs */}
    <div className="absolute inset-0">
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0.3, 0.7, 0.3],
          rotate: [360, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-purple-400 rounded-full"
      />
    </div>
    
    {/* Scanning effect */}
    <motion.div
      animate={{
        y: [-100, window.innerHeight + 100],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
    />
    
    <div className="relative z-10">{children}</div>
  </div>
);

export default {
  NeuralNetworkBackground,
  MatrixBackground,
  ParticleBackground,
  GeometricBackground,
  GradientMeshBackground,
  MinimalistBackground,
  CyberpunkBackground,
  OrganicFlowBackground,
  DataVizBackground,
  HologramBackground
}; 