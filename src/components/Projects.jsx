import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data - Updated with your local file paths
const resumeData = {
  projects: [
    {
      id: 1,
      title: "School Web App",
      category: "Education",
      img: "../src/assets/schoolwebapp.png",
    },
    {
      id: 4,
      title: "Muddie",
      category: "Service",
      img: "../src/assets/muddie.png",
    },
    {
      id: 2,
      title: "Call Driver",
      category: "Service",
      img: "../src/assets/calldriver.jpeg",
    },
    {
      id: 3,
      title: "Splendid",
      category: "Lifestyle",
      img: "../src/assets/splendid.png",
    },
  ],
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start in the middle
  const [toast, setToast] = useState(null);

  // Helper for Toast Notification
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  // Animation Config for "Cute" Bouncy feel
  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 25,
  };

  return (
    <section id="projects">
      {/* Background Decorations */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      {/* Header */}
      <div className="header-text">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springTransition}
        >
          Recent Works
        </motion.h2>
        <p className="subtitle">Crafting digital experiences with love & code</p>
      </div>

      {/* Carousel Area */}
      <div className="carousel-container">
        {/* Navigation Buttons */}
        <button
          className="nav-btn prev-btn"
          onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
          aria-label="Previous"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="nav-btn next-btn"
          onClick={() =>
            setActiveIndex((i) =>
              Math.min(resumeData.projects.length - 1, i + 1),
            )
          }
          aria-label="Next"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Cards */}
        {resumeData.projects.map((project, index) => {
          // Logic to calculate position based on activeIndex
          const offset = index - activeIndex;

          // Z-Index ensures the center card is always on top
          const zIndex = 10 - Math.abs(offset);

          // Position Logic
          let x = 0;
          let scale = 1;
          let opacity = 1;
          let rotateY = 0;

          if (offset === 0) {
            // Active Center Card
            x = 0;
            scale = 1.1;
            opacity = 1;
          } else if (offset > 0) {
            // Right side
            x = 280 + (offset - 1) * 50; // Stack to the right
            scale = 0.9;
            opacity = offset === 1 ? 0.8 : 0; // Hide deep cards
            rotateY = -15; // Slight rotation for 3D effect
          } else {
            // Left side
            x = -280 + (offset + 1) * 50; // Stack to the left
            scale = 0.9;
            opacity = offset === -1 ? 0.8 : 0;
            rotateY = 15;
          }

          return (
            <motion.div
              key={project.id}
              className="project-card"
              style={{ zIndex }}
              initial={false}
              animate={{
                x,
                scale,
                opacity,
                rotateY,
                z: 50, // Visual depth in 3D space
              }}
              transition={springTransition}
              onClick={() => {
                if (offset !== 0) {
                  setActiveIndex(index); // Click a side card to bring it to center
                } else {
                  showToast(`Opening ${project.title}...`);
                }
              }}
              whileHover={offset === 0 ? { y: -10 } : {}} // Only lift center card
            >
              <img
                src={project.img}
                alt={project.title}
                className="card-image"
              />
              <div className="card-overlay" />

              <div className="card-content">
                <span className="card-tag">{project.category}</span>
                <h3 className="card-title">{project.title}</h3>
                <motion.div
                  className="card-btn"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="indicators">
        {resumeData.projects.map((_, idx) => (
          <motion.div
            key={idx}
            className="indicator-dot"
            initial={false}
            animate={{
              backgroundColor:
                idx === activeIndex ? "var(--secondary-pink)" : "#E0E0E0",
              width: idx === activeIndex ? 30 : 12, // Expand when active
              borderRadius: idx === activeIndex ? 10 : 50,
            }}
            transition={springTransition}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      {/* Custom Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <i
              className="fa-solid fa-heart"
              style={{ color: "var(--secondary-pink)" }}
            ></i>
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
