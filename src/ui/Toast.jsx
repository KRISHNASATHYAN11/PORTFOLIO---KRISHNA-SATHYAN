import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#333',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '50px',
        zIndex: 1000,
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        fontSize: '14px'
      }}
    >
      {message}
    </motion.div>
  );
};

export default Toast;