import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import Button from '../ui/Button';
import greenprofile from '../assets/greenprofile.webp';

/* =========================================================
   🌿 FALLING LEAVES
========================================================= */

const FallingLeaves = () => {
  const leaves = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 105 - 2}%`,
        size: 16 + Math.random() * 18,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 12,
        rotate: Math.random() * 360,
        drift: Math.random() * 160 - 80,
        opacity: 0.35 + Math.random() * 0.4,
      })),
    []
  );

  return (
    <div className="falling-leaves">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="falling-leaf"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            opacity: leaf.opacity,
          }}
          initial={{
            y: '-10vh',
            x: 0,
            rotate: leaf.rotate,
          }}
          animate={{
            y: '115vh',
            x: [0, leaf.drift, -leaf.drift, leaf.drift / 2, 0],
            rotate: [
              leaf.rotate,
              leaf.rotate + 120,
              leaf.rotate + 250,
              leaf.rotate + 360,
            ],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            viewBox="0 0 50 50"
            width="100%"
            height="100%"
            fill="none"
          >
            <path
              d="M42 7C24 9 10 17 8 31C7 39 13 44 20 42C35 38 42 22 42 7Z"
              fill="#5F8D4E"
            />
            <path
              d="M10 39C19 28 27 20 39 10"
              stroke="#D8E8C8"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};


/* =========================================================
   🌬️ FLOATING POLLEN
========================================================= */

const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        duration: 4 + Math.random() * 5,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="pollen"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -20, 10, 0],
            opacity: [0.15, 0.7, 0.2, 0.15],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};


/* =========================================================
   🌿 GROWING VINE
========================================================= */

const Vine = ({ position = 'left' }) => {
  const isLeft = position === 'left';

  return (
    <div
      className={`vine-wrapper ${
        isLeft ? 'vine-left' : 'vine-right'
      }`}
    >
      <svg
        className="vine-svg"
        viewBox="0 0 180 500"
        preserveAspectRatio="none"
      >
        <motion.path
          d={
            isLeft
              ? 'M20 500 C80 430, 10 360, 65 300 C115 245, 45 190, 90 125 C115 90, 100 45, 145 0'
              : 'M160 500 C100 430, 170 360, 115 300 C65 245, 135 190, 90 125 C65 90, 80 45, 35 0'
          }
          fill="none"
          stroke="#4F7942"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{
            duration: 4,
            delay: isLeft ? 0.4 : 0.9,
            ease: 'easeInOut',
          }}
        />

        {/* Small branches */}
        <motion.path
          d={
            isLeft
              ? 'M65 300 C35 275, 20 265, 5 260 M90 125 C120 105, 140 95, 155 75'
              : 'M115 300 C145 275, 160 265, 175 260 M90 125 C60 105, 40 95, 25 75'
          }
          fill="none"
          stroke="#6F9D5C"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: 2.5,
            ease: 'easeOut',
          }}
        />
      </svg>

      {/* Leaves growing from the vine */}

      <motion.div
        className="vine-leaf leaf-one"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: -8 }}
        transition={{ delay: 2.4, type: 'spring' }}
      >
        🍃
      </motion.div>

      <motion.div
        className="vine-leaf leaf-two"
        initial={{ scale: 0, rotate: 30 }}
        animate={{ scale: 1, rotate: 12 }}
        transition={{ delay: 2.8, type: 'spring' }}
      >
        🍃
      </motion.div>

      <motion.div
        className="vine-leaf leaf-three"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3.2, type: 'spring' }}
      >
        🌿
      </motion.div>
    </div>
  );
};


/* =========================================================
   🌸 BLOOMING FLOWER
========================================================= */

const BloomingFlower = ({ style, delay = 0 }) => {
  return (
    <motion.div
      className="flower"
      style={style}
      initial={{ scale: 0, opacity: 0, rotate: -20 }}
      animate={{
        scale: [0, 1.15, 1],
        opacity: [0, 1, 1],
        rotate: [-20, 10, 0],
      }}
      transition={{
        delay,
        duration: 1.4,
        ease: 'easeOut',
      }}
    >
      <span>🌸</span>
    </motion.div>
  );
};


/* =========================================================
   🖱️ MOUSE REACTIVE NATURE
========================================================= */

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () =>
      window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="mouse-glow"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  );
};


/* =========================================================
   👋 NOTIFICATION
========================================================= */

const NotificationPopup = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          className="notification-popup notification-desktop-position"
          onClick={onClose}
        >
          <motion.div
            animate={{
              rotate: [0, -20, 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="notification-hand"
          >
            👋
          </motion.div>

          <div>
            <h4>Hey you!</h4>

            <p>
              Look who found their way here. 😏
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


/* =========================================================
   🌱 HERO
========================================================= */

const Hero = () => {
  const [showNotification, setShowNotification] =
    useState(false);

  /* Notification timing */

  useEffect(() => {
    const showTimer = setTimeout(
      () => setShowNotification(true),
      2000
    );

    const hideTimer = setTimeout(
      () => setShowNotification(false),
      8000
    );

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* Notification */}

      <div className="notification-wrapper">
        <NotificationPopup
          show={showNotification}
          onClose={() => setShowNotification(false)}
        />
      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section id="home" className="hero-section">

        {/* Nature atmosphere */}

        <MouseGlow />

        <FallingLeaves />

        <FloatingParticles />

        {/* Growing vines */}

        <Vine position="left" />
        <Vine position="right" />

        {/* Flowers */}

        <BloomingFlower
          delay={3.5}
          style={{
            top: '16%',
            left: '8%',
          }}
        />

        <BloomingFlower
          delay={4.2}
          style={{
            bottom: '12%',
            right: '10%',
          }}
        />

        {/* Main content */}

        <div className="container">

          <div className="hero-layout">

            {/* =================================================
                TEXT
            ================================================= */}

            <motion.div
              className="hero-text"
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
            >

              {/* Nature & Code */}

              <motion.div
                className="nature-code-label"
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
              >
                <motion.i
                  className="fas fa-seedling"
                  animate={{
                    rotate: [0, -8, 8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                NATURE & CODE
              </motion.div>


              {/* Heading */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                }}
              >
                {resumeData.hero.title}
              </motion.h1>


              {/* Tagline */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
              >
                {resumeData.hero.tagline}
              </motion.p>


              {/* Badges */}

              <motion.div
                className="badge-container"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.9,
                }}
              >
                {resumeData.hero.badges.map(
                  (badge, idx) => (
                    <motion.span
                      key={idx}
                      className="hero-badge"
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                      }}
                    >
                      <i
                        className={`fas ${badge.icon}`}
                      />

                      {badge.text}
                    </motion.span>
                  )
                )}
              </motion.div>


              {/* Buttons */}

              <motion.div
                className="btn-container"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.1,
                }}
              >
                <Button primary>
                  My Resume
                </Button>

                <Button outline>
                  Download
                </Button>
              </motion.div>

            </motion.div>


            {/* =================================================
                IMAGE
            ================================================= */}

            <motion.div
              className="image-group"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >

              {/* Glow */}

              <motion.div
                className="profile-glow"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />


              {/* Image container */}

              <div className="image-container">

                {/* Rotating ring */}

                <motion.div
                  className="offset-ring ring-1"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Second ring */}

                <motion.div
                  className="offset-ring ring-2"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />


                {/* Orbit dots */}

                <motion.div
                  className="orbit-dot dot-one"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <motion.div
                  className="orbit-dot dot-two"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />


                {/* Profile */}

                <motion.img
                  src={greenprofile}
                  alt="Profile"
                  className="profile-image"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />


                {/* Developer badge */}

                <motion.div
                  className="dev-badge"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <i className="fas fa-laptop-code" />

                  <span>Dev</span>

                  <span className="divider">|</span>

                  <i className="fas fa-leaf" />

                  <span>Nature</span>
                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .hero-section {
          min-height: 100vh;
          position: relative;
          overflow: hidden;

          display: flex;
          align-items: center;

          padding-top: 80px;
          padding-bottom: 50px;

          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(151,188,98,0.18),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              var(--cream, #FDFBF7) 0%,
              var(--pale-green, #E8F5E9) 100%
            );
        }


        /* ================================================
           CONTAINER
        ================================================ */

        .container {
          width: 100%;
          max-width: 1200px;

          margin: 0 auto;
          padding: 0 24px;

          position: relative;
          z-index: 10;
        }


        /* ================================================
           FALLING LEAVES
        ================================================ */

        .falling-leaves {
          position: absolute;
          inset: 0;

          overflow: hidden;

          pointer-events: none;

          z-index: 1;
        }

        .falling-leaf {
          position: absolute;

          top: -40px;

          filter: drop-shadow(
            0 4px 5px rgba(44,95,45,0.08)
          );
        }


        /* ================================================
           POLLEN
        ================================================ */

        .floating-particles {
          position: absolute;
          inset: 0;

          pointer-events: none;

          z-index: 2;
        }

        .pollen {
          position: absolute;

          border-radius: 50%;

          background: rgba(143,188,143,0.65);

          filter: blur(0.5px);
        }


        /* ================================================
           MOUSE GLOW
        ================================================ */

        .mouse-glow {
          position: absolute;

          width: 300px;
          height: 300px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(151,188,98,0.13),
              transparent 70%
            );

          pointer-events: none;

          left: 50%;
          top: 50%;

          margin-left: -150px;
          margin-top: -150px;

          z-index: 1;

          filter: blur(5px);
        }


        /* ================================================
           VINES
        ================================================ */

        .vine-wrapper {
          position: absolute;

          width: 180px;
          height: 500px;

          z-index: 3;

          pointer-events: none;

          opacity: 0.65;
        }

        .vine-left {
          left: -30px;
          bottom: -40px;
        }

        .vine-right {
          right: -30px;
          bottom: -40px;
        }

        .vine-svg {
          width: 100%;
          height: 100%;
        }

        .vine-leaf {
          position: absolute;

          font-size: 34px;

          filter: drop-shadow(
            0 4px 5px rgba(44,95,45,0.15)
          );
        }

        .vine-left .leaf-one {
          left: 35px;
          top: 190px;
        }

        .vine-left .leaf-two {
          right: 10px;
          top: 310px;
        }

        .vine-left .leaf-three {
          left: 55px;
          top: 90px;
        }

        .vine-right .leaf-one {
          right: 35px;
          top: 190px;
          transform: scaleX(-1);
        }

        .vine-right .leaf-two {
          left: 10px;
          top: 310px;
          transform: scaleX(-1);
        }

        .vine-right .leaf-three {
          right: 55px;
          top: 90px;
          transform: scaleX(-1);
        }


        /* ================================================
           FLOWERS
        ================================================ */

        .flower {
          position: absolute;

          z-index: 4;

          pointer-events: none;

          font-size: 26px;

          filter:
            drop-shadow(
              0 4px 7px rgba(44,95,45,0.15)
            );
        }


        /* ================================================
           HERO LAYOUT
        ================================================ */

        .hero-layout {
          display: flex;

          flex-direction: row;

          align-items: center;

          justify-content: space-between;

          gap: 50px;

          width: 100%;
        }


        /* ================================================
           TEXT
        ================================================ */

        .hero-text {
          flex: 1;

          display: flex;
          flex-direction: column;

          align-items: flex-start;

          text-align: left;

          position: relative;

          z-index: 10;
        }

        .nature-code-label {
          display: flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 15px;

          color:
            var(--forest-green, #2E7D32);

          font-size: 0.9rem;

          font-weight: 700;

          letter-spacing: 2px;
        }

        .nature-code-label i {
          font-size: 1rem;
        }

        .hero-text h1 {
          font-size:
            clamp(2.5rem, 5vw, 4.5rem);

          line-height: 1.1;

          margin: 0 0 20px;

          color:
            var(--dark-text, #1a1a1a);

          font-weight: 800;

          position: relative;
        }

        .hero-text p {
          font-size:
            clamp(1rem, 2vw, 1.2rem);

          color:
            var(--light-text, #555);

          margin-bottom: 30px;

          max-width: 600px;

          line-height: 1.6;
        }


        /* ================================================
           BADGES
        ================================================ */

        .badge-container {
          display: flex;

          gap: 12px;

          margin-bottom: 35px;

          flex-wrap: wrap;

          justify-content: flex-start;
        }

        .hero-badge {
          padding: 8px 16px;

          border-radius: 50px;

          font-size: 0.85rem;

          font-weight: 600;

          background:
            rgba(151,188,98,0.2);

          color:
            var(--forest-green, #2E7D32);

          display: flex;

          align-items: center;

          gap: 8px;

          border:
            1px solid rgba(0,0,0,0.05);

          cursor: default;

          transition:
            box-shadow 0.3s ease;
        }

        .hero-badge:hover {
          box-shadow:
            0 8px 25px rgba(44,95,45,0.12);
        }


        /* ================================================
           BUTTONS
        ================================================ */

        .btn-container {
          display: flex;

          gap: 15px;

          flex-wrap: wrap;
        }


        /* ================================================
           IMAGE
        ================================================ */

        .image-group {
          flex: 1;

          display: flex;

          justify-content: center;

          align-items: center;

          position: relative;

          z-index: 10;
        }

        .profile-glow {
          position: absolute;

          width: 110%;
          height: 110%;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(151,188,98,0.35),
              transparent 65%
            );

          filter: blur(25px);

          z-index: 0;
        }

        .image-container {
          width:
            clamp(280px, 35vw, 400px);

          height:
            clamp(280px, 35vw, 400px);

          position: relative;

          display: flex;

          justify-content: center;

          align-items: center;
        }


        /* ================================================
           RINGS
        ================================================ */

        .offset-ring {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;
        }

        .ring-1 {
          width: 100%;
          height: 100%;

          border:
            2px dashed
            var(--sage, #8FBC8F);

          z-index: 1;
        }

        .ring-2 {
          width: 91%;
          height: 91%;

          border:
            3px solid
            rgba(255,255,255,0.85);

          box-shadow:
            0 10px 30px
            rgba(44,95,45,0.1);

          background:
            rgba(255,255,255,0.35);

          backdrop-filter:
            blur(5px);

          z-index: 2;
        }


        /* ================================================
           ORBIT DOTS
        ================================================ */

        .orbit-dot {
          position: absolute;

          width: 12px;
          height: 12px;

          border-radius: 50%;

          background:
            var(--forest-green, #2E7D32);

          z-index: 5;

          transform-origin:
            50% 200px;

          box-shadow:
            0 0 15px
            rgba(46,125,50,0.35);
        }

        .dot-one {
          top: 0;
          left: calc(50% - 6px);
        }

        .dot-two {
          bottom: 5px;
          right: 20%;
        }


        /* ================================================
           PROFILE IMAGE
        ================================================ */

        .profile-image {
          width: 85%;
          height: 85%;

          border-radius: 50%;

          object-fit: cover;

          border:
            6px solid
            var(--white, #ffffff);

          box-shadow:
            0 15px 35px
            rgba(44,95,45,0.2);

          z-index: 3;

          position: relative;
        }


        /* ================================================
           DEV / NATURE BADGE
        ================================================ */

        .dev-badge {
          position: absolute;

          bottom: -10px;
          right: -10px;

          background:
            var(--white, #ffffff);

          padding: 10px 20px;

          border-radius: 30px;

          box-shadow:
            0 10px 25px
            rgba(0,0,0,0.1);

          z-index: 6;

          display: flex;

          align-items: center;

          gap: 8px;

          font-size: 0.85rem;

          font-weight: 700;

          color:
            var(--forest-green, #2E7D32);

          white-space: nowrap;
        }

        .dev-badge i:first-child {
          color:
            var(--sage, #8FBC8F);
        }

        .dev-badge i:nth-of-type(2) {
          color:
            var(--forest-green, #2E7D32);
        }

        .divider {
          color: #ddd;
        }


        /* ================================================
           NOTIFICATION
        ================================================ */

        .notification-wrapper {
          position: fixed;

          top: 0;
          left: 0;

          width: 100%;
          height: 0;

          z-index: 10000;
        }

        .notification-popup {
          position: fixed;

          bottom: 30px;
          left: 50%;

          transform:
            translateX(-50%);

          z-index: 9999;

          background:
            rgba(255,255,255,0.95);

          backdrop-filter:
            blur(10px);

          padding:
            16px 24px;

          border-radius: 20px;

          box-shadow:
            0 10px 40px
            rgba(44,95,45,0.2);

          border:
            1px solid #97BC62;

          display: flex;

          align-items: center;

          gap: 15px;

          max-width: 90vw;

          cursor: pointer;
        }

        .notification-popup h4 {
          margin: 0;

          color:
            #2C5F2D;

          font-size: 0.95rem;

          font-weight: bold;
        }

        .notification-popup p {
          margin: 2px 0 0;

          font-size: 0.85rem;

          color: #555;
        }

        .notification-popup button {
          background: none;

          border: none;

          cursor: pointer;

          color: #999;

          font-size: 1.2rem;

          padding: 0 5px;
        }

        .notification-hand {
          font-size: 1.5rem;
        }


        /* ================================================
           TABLET
        ================================================ */

        @media (max-width: 1024px) {

          .hero-layout {
            flex-direction:
              column-reverse;

            text-align: center;

            justify-content: center;

            gap: 45px;

            padding-top: 20px;
          }

          .hero-text {
            align-items: center;

            width: 100%;
          }

          .badge-container {
            justify-content: center;
          }

          .btn-container {
            justify-content: center;
          }

          .vine-wrapper {
            opacity: 0.35;
          }
        }


        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 600px) {

          .hero-section {
            padding-top: 90px;
          }

          .hero-layout {
            gap: 30px;
          }

          .image-container {
            width: 250px;
            height: 250px;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .vine-wrapper {
            opacity: 0.18;

            transform:
              scale(0.65);
          }

          .vine-left {
            left: -70px;
          }

          .vine-right {
            right: -70px;
          }

          .falling-leaf {
            transform: scale(0.75);
          }

          .flower {
            font-size: 20px;
          }

          .dev-badge {
            right: -5px;
            bottom: -5px;

            padding: 8px 13px;

            font-size: 0.75rem;
          }
        }


        /* ================================================
           ACCESSIBILITY
        ================================================ */

        @media (prefers-reduced-motion: reduce) {

          .falling-leaves,
          .floating-particles,
          .mouse-glow,
          .vine-wrapper {
            display: none;
          }

          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

      `}</style>
    </>
  );
};

export default Hero;
