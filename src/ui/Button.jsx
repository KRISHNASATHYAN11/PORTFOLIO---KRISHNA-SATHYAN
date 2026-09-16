import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, primary, outline, onClick, type = "button", style }) => {
  const baseStyle = {
    padding: '12px 30px',
    borderRadius: '50px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'Poppins, sans-serif',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s',
    textDecoration: 'none' // For anchor tags
  };

  const primaryStyle = {
    ...baseStyle,
    background: 'var(--forest-green)',
    color: 'var(--white)',
    boxShadow: '0 5px 15px rgba(44, 95, 45, 0.3)'
  };

  const outlineStyle = {
    ...baseStyle,
    border: '2px solid var(--forest-green)',
    color: 'var(--forest-green)',
    background: 'transparent'
  };

  const combinedStyle = primary ? primaryStyle : outline ? outlineStyle : baseStyle;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={{ ...combinedStyle, ...style }}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;