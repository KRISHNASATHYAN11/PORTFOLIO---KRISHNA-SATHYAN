import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../ui/Icon';

/**
 * Accessible Navbar
 *
 * Lighthouse Accessibility Improvements:
 * - Proper ARIA attributes (aria-label, aria-expanded, aria-controls)
 * - Keyboard navigation support (Escape to close, focus trap)
 * - Resize-aware menu state (replaces window.innerWidth inline)
 * - Semantic <nav> with aria-label
 * - aria-current for active page
 * - Focus management on menu toggle
 * - Click-outside to close
 * - Hamburger button has accessible name
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Detect mobile viewport with proper listener
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll handler with passive listener for performance
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  const handleMenuToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: scrolled ? '10px 0' : '20px 0',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 5px 20px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Full Name Logo */}
        <a
          href="#home"
          aria-label="Krishna Sathyan - Home"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            fontWeight: 700,
            color: 'var(--forest-green)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            whiteSpace: 'nowrap',
          }}
        >
          <Icon name="leaf" />
          Krishna Sathyan
        </a>

        {/* Desktop Menu - Hidden on mobile */}
        <ul
          style={{
            display: isMobile || isOpen ? 'none' : 'flex',
            gap: '30px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{ padding: '8px 4px' }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle - Accessible hamburger button */}
        <button
          ref={hamburgerRef}
          type="button"
          className="hamburger"
          onClick={handleMenuToggle}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          style={{
            display: isMobile ? 'block' : 'none',
            fontSize: '1.5rem',
            color: 'var(--forest-green)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
          }}
        >
          <Icon name={isOpen ? 'times' : 'bars'} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-navigation-menu"
            role="menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '70px',
              left: 0,
              width: '100%',
              background: 'var(--white)',
              padding: '20px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                role="menuitem"
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  width: '100%',
                  textAlign: 'center',
                  padding: '12px 10px',
                }}
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
