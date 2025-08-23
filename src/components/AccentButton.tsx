import React from 'react';
import { motion } from 'framer-motion';

interface AccentButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const AccentButton: React.FC<AccentButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-white hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-0.5',
    secondary: 'bg-stroke text-white hover:bg-blue-400 hover:text-white hover:shadow-glow',
    outline: 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const ButtonContent = (
    <motion.div
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={classes}
    >
      {children}
    </motion.div>
  );

  if (href) {
    // Handle internal navigation (hash links)
    if (href.startsWith('#')) {
      return (
        <a href={href}>
          {ButtonContent}
        </a>
      );
    }
    // Handle external links
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {ButtonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default AccentButton; 