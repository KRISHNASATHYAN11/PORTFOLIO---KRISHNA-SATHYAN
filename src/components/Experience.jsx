import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Items appear one after another
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 }, // Start from the right
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, mass: 1 }
    }
  };

  return (
    <section id='experience' style={{ padding: '100px 5%', position: 'relative' }}>
      
      {/* Background Decor (Optional Glow) */}
      <div style={{
        position: 'absolute', 
        top: '20%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '80%', 
        height: '80%', 
        background: 'radial-gradient(circle, rgba(255,240,245,0.3) 0%, rgba(255,255,255,0) 70%)', 
        zIndex: '-1'
      }}></div>

      {/* Section Header */}
      <motion.div 
        style={{ textAlign: 'center', marginBottom: '80px' }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', position: 'relative', display: 'inline-block' }}>
          My Experience
          <motion.span 
            style={{ position: 'absolute', width: '100%', height: '10px', background: 'var(--accent-purple)', bottom: '5px', left: '0', zIndex: -1, borderRadius: '4px', opacity: 0.3 }}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 1 }}
          ></motion.span>
        </h2>
        <p style={{ color: 'var(--text-light)', marginTop: '10px', fontWeight: '500' }}>My professional journey</p>
      </motion.div>

      {/* Timeline Container */}
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', padding: '20px 0' }}>
        
        {/* Vertical Line (The Timeline) */}
        <div style={{
          position: 'absolute',
          left: '20px', // Align line to the left
          top: '0',
          bottom: '0',
          width: '4px',
          background: 'linear-gradient(to bottom, var(--accent-purple), var(--dark-pink), transparent)',
          borderRadius: '2px'
        }}></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {resumeData.experience.map((job, index) => (
            <motion.div 
              key={job.id} 
              variants={itemVariants}
              style={{ 
                marginBottom: '50px', 
                position: 'relative', 
                paddingLeft: '60px' // Space for the line
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '8px', // Center on the line
                top: '10px',
                width: '28px',
                height: '28px',
                background: 'white',
                border: '4px solid var(--dark-pink)',
                borderRadius: '50%',
                zIndex: 2,
                boxShadow: '0 0 15px rgba(255, 105, 180, 0.5)'
              }}></div>

              {/* Content Card */}
              <motion.div 
                style={{
                  background: 'rgba(255, 255, 255, 0.7)', // Glass effect
                  backdropFilter: 'blur(12px)',
                  padding: '30px',
                  borderRadius: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 20px 40px rgba(255, 105, 180, 0.15)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Cute Top Bar decoration */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: 'linear-gradient(90deg, var(--accent-purple), var(--dark-pink))' }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', margin: 0 }}>
                    {job.title}
                  </h3>
                  {/* <span style={{
                    background: '#fff0f5', 
                    color: 'var(--dark-pink)', 
                    padding: '5px 15px', 
                    borderRadius: '20px', 
                    fontSize: '0.85rem', 
                    fontWeight: '700',
                    border: '1px solid rgba(255, 105, 180, 0.2)'
                  }}>
                    {job.date}
                  </span> */}
                </div>

                <h4 style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--accent-purple)', 
                  marginBottom: '15px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px' 
                }}>
                  <i className="fas fa-building" style={{ fontSize: '0.9rem' }}></i>
                  {job.company}
                </h4>

                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '20px' }}>
                  {job.desc}
                </p>
                
                {/* Highlight Section */}
                {job.isHighlight && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ 
                      marginTop: '20px', 
                      background: 'linear-gradient(135deg, #fff5f8, #fff)', 
                      padding: '20px', 
                      borderRadius: '16px', 
                      border: '1px dashed var(--dark-pink)',
                      position: 'relative'
                    }}
                  >
                    <div style={{ 
                      position: 'absolute', 
                      top: '-12px', 
                      left: '20px', 
                      background: 'var(--dark-pink)', 
                      color: 'white', 
                      padding: '4px 12px', 
                      borderRadius: '10px', 
                      fontSize: '0.75rem', 
                      fontWeight: 'bold',
                      boxShadow: '0 4px 10px rgba(255, 105, 180, 0.4)'
                    }}>
                      🌟 FEATURED PROJECT
                    </div>
                    <p style={{ margin: 0, color: '#555', fontSize: '0.9rem', lineHeight: '1.6', marginTop: '10px' }}>
                      <strong style={{ color: 'var(--text-dark)' }}>CallDriver:</strong> Implemented real-time booking interface, map integration, and live tracking to enhance driver-passenger efficiency.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;