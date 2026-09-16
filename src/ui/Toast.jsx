import React from 'react';
import { motion } from 'framer-motion';

const Toast = ({ message, show, onClose }) => {
  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: show ? 0 : 150, opacity: show ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: 'var(--white)',
        borderLeft: '5px solid var(--forest-green)',
        padding: '15px 25px',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        zIndex: 2000,
      }}
    >
      <i className="fas fa-check-circle" style={{ color: 'var(--forest-green)', fontSize: '1.2rem' }}></i>
      <span>{message}</span>
    </motion.div>
  );
};

export default Toast;