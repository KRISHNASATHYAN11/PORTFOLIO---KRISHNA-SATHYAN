import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaHeart, 
  FaStar, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub,
  FaHandPaper
} from 'react-icons/fa';
import Button from '../ui/Button';
import krishna from "../assets/krishnasathyann.jpeg";

// --- 1. Animated Social Component ---
const SocialDock = () => {
  const socials = [
    { 
      icon: FaEnvelope, 
      label: "Email", 
      href: "mailto:krishnasathyan11@gmail.com", 
      color: "var(--dark-pink)" 
    },
    { 
      icon: FaLinkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/krishnasathyan07", 
      color: "#0077b5" 
    },
    { 
      icon: FaGithub, 
      label: "GitHub", 
      href: "https://github.com/KRISHNASATHYAN11", 
      color: "#333" 
    }
  ];

  return (
    <motion.div 
      style={{ display: 'flex', gap: '20px', marginTop: '30px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
    >
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'white',
            color: social.color,
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            textDecoration: 'none',
            position: 'relative',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 10,
            boxShadow: `0 10px 20px ${social.color}40`, 
            transition: { type: "spring", stiffness: 400 }
          }}
          whileTap={{ scale: 0.9 }}
          title={social.label} 
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );
};

// --- 2. Falling Petals Component ---
const FallingPetals = ({ wind, isMoving }) => {
  const petals = Array.from({ length: 15 });

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 5;
        const size = 15 + Math.random() * 20;

        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${left}%`,
              top: '-50px',
              width: size,
              height: size,
              zIndex: 0,
              opacity: isMoving ? 0.1 : 0.6, 
              filter: 'blur(0.5px)',
              transition: { opacity: { duration: 0.3, ease: "easeOut" } }
            }}
            animate={{
              y: window.innerHeight + 100,
              x: [0, 50 + wind, -50 + wind], 
              rotate: [0, 360, 180, 360]
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
              x: { type: "spring", stiffness: 50, damping: 20 } 
            }}
          >
            <svg viewBox="0 0 24 24" fill="var(--dark-pink)">
               <path d="M12,22 C12,22 4,16 4,9 C4,4 8,2 12,2 C16,2 20,4 20,9 C20,16 12,22 12,22 Z" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

// --- 3. Blooming Decoration Component ---
const BloomingFlower = ({ style, delay }) => (
  <motion.div
    style={{
      position: 'absolute',
      ...style,
      zIndex: 1,
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: 'spring', stiffness: 200, damping: 15 }}
  >
    <motion.div
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 50C50 50 70 30 80 20C90 10 100 30 90 50C80 70 60 80 50 50Z" fill="var(--accent-purple)" opacity="0.8"/>
        <path d="M50 50C50 50 30 70 20 80C10 90 30 100 50 90C70 80 80 60 50 50Z" fill="var(--dark-pink)" opacity="0.8"/>
        <path d="M50 50C50 50 70 70 80 80C90 90 100 70 90 50C80 30 60 20 50 50Z" fill="var(--accent-purple)" opacity="0.6"/>
        <path d="M50 50C50 50 30 30 20 20C10 10 30 0 50 10C70 20 80 40 50 50Z" fill="var(--dark-pink)" opacity="0.6"/>
        <circle cx="50" cy="50" r="10" fill="#FFF" />
      </svg>
    </motion.div>
  </motion.div>
);

// --- Main Hero Component ---
const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [wind, setWind] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (innerWidth / 2 - e.pageX) / 35; 
    const y = (innerHeight / 2 - e.pageY) / 35;
    setTilt({ x, y });

    const newWind = (e.clientX / innerWidth - 0.5) * 100;
    setWind(newWind);
    setIsMoving(true);
  };

  useEffect(() => {
    let timeoutId;
    const resetMoving = () => {
      setIsMoving(false);
    };

    if (isMoving) {
      timeoutId = setTimeout(resetMoving, 200);
    }

    return () => clearTimeout(timeoutId);
  }, [isMoving]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section 
      id="home" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '100px 5% 50px', 
        position: 'relative', 
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,240,245,0.5) 0%, rgba(255,255,255,0) 70%)' 
      }}
    >
      <FallingPetals wind={wind} isMoving={isMoving} />

      <div className="container" style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', zIndex: 2 }}>
        
        {/* Text Side */}
        <motion.div 
          style={{ flex: 1, minWidth: '300px' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* NEW: CUTE NAME SECTION */}
          <motion.div variants={itemVariants} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
              style={{ fontSize: '1.5rem', color: 'var(--dark-pink)' }}
            >
              👋
            </motion.span>
            <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            style={{ 
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', 
              lineHeight: '1.1', 
              marginBottom: '10px', 
              fontWeight: '800',
              background: 'linear-gradient(135deg, var(--accent-purple) 0%, var(--dark-pink) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            Krishna Sathyan
          </motion.h1>

          {/* Role Badge */}
          <motion.div variants={itemVariants}>
            <span style={{ 
              fontSize: '1rem', 
              color: 'var(--accent-purple)', 
              fontWeight: '700', 
              marginBottom: '20px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.8)', 
              padding: '6px 18px', 
              borderRadius: '30px', 
              boxShadow: '0 4px 15px rgba(179, 156, 208, 0.2)',
              border: '1px solid rgba(179, 156, 208, 0.3)'
            }}>
              <FaStar style={{ color: '#FFD700', fontSize: '0.8rem', animation: 'spin 3s infinite linear' }} />
              Junior Software Developer
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
              lineHeight: '1.2', 
              marginBottom: '25px', 
              color: 'var(--text-dark)', 
              fontWeight: '700'
            }}
          >
            Your Personality is What Makes Your <br/>
            <span style={{ 
              color: 'var(--dark-pink)', 
              position: 'relative', 
              display: 'inline-block',
              cursor: 'default'
            }}>
              Character
              <motion.div 
                style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  width: '100%',
                  height: '8px',
                  backgroundColor: 'rgba(255, 182, 193, 0.5)',
                  zIndex: -1,
                  borderRadius: '4px'
                }}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-light)', 
              marginBottom: '40px', 
              maxWidth: '500px',
              lineHeight: '1.6'
            }}
          >
            I craft beautiful, responsive, and user-friendly web experiences. 
            Passionate about bringing creative designs to life with clean code.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
          >
            <Button primary>
              View Work <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </Button>
            <Button>
              Save <i className="fas fa-download" style={{ marginLeft: '8px' }}></i>
            </Button>
          </motion.div>

          {/* --- SOCIAL DOCK --- */}
          <SocialDock />

        </motion.div>

        {/* Image Side */}
        <motion.div 
          style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative', minWidth: '300px', marginTop: '30px' }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        >
          <BloomingFlower style={{ top: '-20px', left: '0px' }} delay={1.2} />
          <BloomingFlower style={{ bottom: '10px', right: '-20px', transform: 'scale(0.8)' }} delay={1.5} />
          
          <motion.div 
            style={{ 
              width: '350px', 
              height: '350px', 
              borderRadius: '50%', 
              overflow: 'hidden', 
              border: '8px solid white', 
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)', 
              position: 'relative', 
              zIndex: 2, 
              background: '#fff'
            }}
            animate={{ rotateY: tilt.x, rotateX: tilt.y }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={krishna} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          {/* Float Card 1 */}
          <motion.div 
            className="float-card" 
            style={{ 
              position: 'absolute', 
              top: '30px', 
              right: '20px', 
              background: 'white', 
              padding: '12px 20px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)', 
              zIndex: 3, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              fontWeight: '700',
              border: '1px solid rgba(255,255,255,0.5)'
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
            transition={{ delay: 1, x: { type: 'spring' }, y: { repeat: Infinity, duration: 4 } }}
          >
            <div style={{ background: 'rgba(255, 182, 193, 0.2)', padding: '8px', borderRadius: '50%' }}>
              <FaCode style={{ color: 'var(--dark-pink)' }} /> 
            </div>
            <span>Coding</span>
          </motion.div>

          {/* Float Card 2 */}
          <motion.div 
            className="float-card" 
            style={{ 
              position: 'absolute', 
              bottom: '60px', 
              left: '0px', 
              background: 'white', 
              padding: '12px 20px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)', 
              zIndex: 3, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              fontWeight: '700',
              border: '1px solid rgba(255,255,255,0.5)'
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
            transition={{ delay: 1.2, x: { type: 'spring' }, y: { repeat: Infinity, duration: 5 } }}
          >
            <div style={{ background: 'rgba(179, 156, 208, 0.2)', padding: '8px', borderRadius: '50%' }}>
              <FaHeart style={{ color: 'var(--dark-pink)' }} />
            </div>
            <span>Design</span>
          </motion.div>
        </motion.div>

      </div>
      <style>{`
        @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Hero;