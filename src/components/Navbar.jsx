import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle Screen Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px 5%', 
      position: 'fixed', 
      width: '100%', 
      top: 0, 
      zIndex: 1000, 
      background: 'rgba(255,255,255,0.8)', 
      backdropFilter: 'blur(10px)' 
    }}>
      
      {/* Logo */}
      <a href="#" style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.8rem', color: 'var(--dark-pink)', textDecoration: 'none' }}>
        Portfolio.
      </a>

      {/* Desktop Menu - Hidden on Mobile */}
      <ul style={{ 
        display: isMobile ? 'none' : 'flex', 
        gap: '30px', 
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        {links.map((link) => (
          <li key={link.name} style={{ position: 'relative' }}>
            <motion.a 
              href={link.href}
              style={{ 
                fontWeight: '600', 
                textDecoration: 'none', 
                color: 'var(--text-dark)',
                position: 'relative'
              }}
              whileHover={{ scale: 1.1, color: 'var(--dark-pink)' }} // Cute Scale & Color Change
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.name}
              {/* Underline Animation */}
              <motion.span
                style={{
                  position: 'absolute',
                  width: '0%',
                  height: '3px',
                  bottom: '-4px',
                  left: '50%',
                  backgroundColor: 'var(--dark-pink)',
                  borderRadius: '2px',
                }}
                whileHover={{ width: '100%', left: 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger - Hidden on Desktop */}
      <div 
        style={{ 
          display: isMobile ? 'block' : 'none', 
          cursor: 'pointer',
          color: 'var(--text-dark)',
          fontSize: '1.5rem'
        }} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.i 
          className={isOpen ? "fas fa-times" : "fas fa-bars"}
          whileHover={{ rotate: isMobile && !isOpen ? 90 : 0, color: 'var(--dark-pink)' }}
          transition={{ duration: 0.3 }}
        ></motion.i>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{ 
              position: 'absolute', 
              top: '80px', 
              right: '5%', 
              background: 'white', 
              padding: '25px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px',
              minWidth: '200px',
              zIndex: 999
            }}
          >
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                  color: 'var(--text-dark)', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  fontSize: '1.1rem'
                }}
                whileHover={{ color: 'var(--dark-pink)', paddingLeft: '10px' }} // Cute Side Slide
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;