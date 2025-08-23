/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // AI Portfolio Design Tokens
        bg: '#0B0D12',
        muted: '#A9B3C1',
        card: '#101625',
        stroke: '#1C2333',
        accent: '#5DF4A8',
        accent2: '#52A3FF',
        // Legacy colors for compatibility
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Enhanced gradient colors
        gradient: {
          primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          tertiary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          quaternary: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'neural': 'neural 4s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(93, 244, 168, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(93, 244, 168, 0.5)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        neural: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.2)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-quaternary': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'gradient-accent': 'linear-gradient(135deg, #52A3FF 0%, #5DF4A8 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(93, 244, 168, 0.3)',
        'glow-lg': '0 0 30px rgba(93, 244, 168, 0.5)',
        'glow-xl': '0 0 40px rgba(93, 244, 168, 0.7)',
        'inner-glow': 'inset 0 0 20px rgba(93, 244, 168, 0.2)',
        'accent-glow': '0 0 20px rgba(82, 163, 255, 0.3)',
        'accent-glow-lg': '0 0 30px rgba(82, 163, 255, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Custom plugin for gradient text and utility classes
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-primary': {
          'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-secondary': {
          'background': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-accent': {
          'background': 'linear-gradient(135deg, #52A3FF 0%, #5DF4A8 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.bg-gradient-primary': {
          'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        '.bg-gradient-secondary': {
          'background': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        '.bg-gradient-accent': {
          'background': 'linear-gradient(135deg, #52A3FF 0%, #5DF4A8 100%)',
        },
        '.glass-effect': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.dark-glass': {
          'background': 'rgba(16, 22, 37, 0.8)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(28, 35, 51, 0.5)',
        },
        '.card': {
          'background': '#101625',
          'border': '1px solid #1C2333',
          'border-radius': '0.5rem',
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
        '.chip': {
          'background': 'rgba(93, 244, 168, 0.1)',
          'border': '1px solid rgba(93, 244, 168, 0.3)',
          'border-radius': '9999px',
          'padding': '0.25rem 0.75rem',
          'font-size': '0.875rem',
          'color': '#5DF4A8',
        },
        '.accent-btn': {
          'background': 'linear-gradient(135deg, #52A3FF 0%, #5DF4A8 100%)',
          'border-radius': '0.5rem',
          'padding': '0.75rem 1.5rem',
          'font-weight': '600',
          'color': '#0B0D12',
          'transition': 'all 0.2s ease-in-out',
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
        '.accent-btn:hover': {
          'transform': 'translateY(-2px)',
          'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        },
        '.grid-rows-auto-fit': {
          'grid-template-rows': 'repeat(auto-fit, minmax(200px, 1fr))',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 