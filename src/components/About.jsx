import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

// --- Updated Imports ---
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaMobileAlt, 
  FaPaintBrush,
  // New Imports for extra skills
  FaTerminal,    // TypeScript
  FaCogs,        // Express
  FaDatabase,    // MongoDB
  FaNodeJs       // Node.js
} from 'react-icons/fa';

const About = () => {
  // Updated Map to match the keys in resumeData
  const iconMap = {
    'fa-html5': FaHtml5,
    'fa-css3-alt': FaCss3Alt,
    'fa-js': FaJs,
    'fa-react': FaReact,
    'fa-mobile-alt': FaMobileAlt,
    'fa-paint-brush': FaPaintBrush,
    // New Mappings
    'fa-terminal': FaTerminal,
    'fa-cogs': FaCogs,
    'fa-database': FaDatabase,
    'fa-node': FaNodeJs, // Maps 'fa-node' (class) to FaNodeJs (component)
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="about" style={{ padding: '100px 5%', background: 'rgba(255,255,255,0.3)' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', position: 'relative', display: 'inline-block' }}>
            About Me
            <span style={{ position: 'absolute', width: '60%', height: '8px', background: 'var(--primary-pink)', bottom: '5px', left: '20%', zIndex: -1, borderRadius: '4px', opacity: 0.5 }}></span>
          </h2>
          <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>Get to know me better</p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          style={{
            background: 'var(--glass)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            padding: '50px',
            boxShadow: 'var(--shadow-soft)',
            border: '1px solid rgba(255,255,255,0.6)',
            textAlign: 'center'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '50px', lineHeight: '1.8' }}>
            {resumeData.about}
          </p>

          {/* Skills Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '25px' }}>
            {resumeData.skills.map((skill, index) => {
              // Safety check: if icon doesn't exist in map, don't crash
              const IconComponent = iconMap[skill.icon]; 
              
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(255,158,175,0.4)' }}
                  style={{
                    background: 'white',
                    padding: '25px 15px',
                    borderRadius: '20px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px',
                    cursor: 'default'
                  }}
                >
                  {IconComponent && (
                    <IconComponent 
                      style={{ fontSize: '2.5rem', color: 'var(--accent-purple)' }} 
                    />
                  )}
                  {/* Fallback if no icon is found */}
                  {!IconComponent && <div style={{fontSize: '1.5rem'}}>⚙️</div>}
                  
                  <span style={{ fontWeight: '600', color: 'var(--text-dark)' }}>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;