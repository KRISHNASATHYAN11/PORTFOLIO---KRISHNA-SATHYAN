import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '10px 0' : '20px 0',
      zIndex: 1000,
      transition: '0.3s',
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled ? '0 5px 20px rgba(0,0,0,0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Full Name Logo */}
        <a href="#" style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', /* Responsive font size */
          fontWeight: 700, 
          color: 'var(--forest-green)', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          whiteSpace: 'nowrap' /* Prevents breaking on very small screens */
        }}>
          <i className="fas fa-leaf"></i> Krishna Sathyan
        </a>

        {/* Desktop Menu - Hidden on mobile */}
        <ul style={{ display: isOpen ? 'none' : window.innerWidth < 768 ? 'none' : 'flex', gap: '30px', listStyle: 'none' }}>
          {navLinks.map((link) => (
            <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
          ))}
        </ul>

        {/* Mobile Toggle - Hidden on desktop */}
        <div 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ 
            display: window.innerWidth >= 768 ? 'none' : 'block', 
            fontSize: '1.5rem', 
            color: 'var(--forest-green)' 
          }}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '70px', left: 0, width: '100%',
              background: 'var(--white)', padding: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                style={{ fontSize: '1.2rem', fontWeight: 500, width: '100%', textAlign: 'center', padding: '10px' }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;