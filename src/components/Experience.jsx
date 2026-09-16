
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

/* =========================================================
   🍃 FLOATING LEAVES
========================================================= */

const FloatingLeaves = () => {
  const leaves = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 9 + Math.random() * 7,
        size: 18 + Math.random() * 16,
        drift: Math.random() * 100 - 50,
        rotation: Math.random() * 180,
      })),
    []
  );

  return (
    <div className="experience-floating-leaves">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="experience-leaf"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
          }}
          initial={{
            y: '-10vh',
            x: 0,
            rotate: leaf.rotation,
            opacity: 0,
          }}
          animate={{
            y: '110vh',
            x: [
              0,
              leaf.drift,
              -leaf.drift,
              leaf.drift / 2,
              0,
            ],
            rotate: [
              leaf.rotation,
              leaf.rotation + 100,
              leaf.rotation + 230,
              leaf.rotation + 360,
            ],
            opacity: [0, 0.55, 0.55, 0.35, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 50 50">
            <path
              d="M42 7C24 9 10 17 8 31C7 39 13 44 20 42C35 38 42 22 42 7Z"
              fill="#5F8D4E"
            />
            <path
              d="M10 39C20 28 29 19 40 9"
              stroke="#DCEBCF"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};


/* =========================================================
   🍃 GIANT LEAF INTRO
========================================================= */

const GiantLeafReveal = () => {
  return (
    <motion.div
      className="giant-leaf-overlay"
      initial={{
        opacity: 1,
        scale: 1,
      }}
      whileInView={{
        opacity: 0,
        scale: 3.5,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 2.2,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      <motion.div
        className="giant-leaf"
        initial={{
          scale: 0.75,
          rotate: -18,
        }}
        whileInView={{
          scale: [0.75, 1, 1.15],
          rotate: [-18, -4, 10],
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.8,
          ease: 'easeOut',
        }}
      >
        <svg viewBox="0 0 500 500">
          <defs>
            <linearGradient
              id="leafGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#315C35"
              />

              <stop
                offset="50%"
                stopColor="#5F8D4E"
              />

              <stop
                offset="100%"
                stopColor="#97BC62"
              />
            </linearGradient>
          </defs>

          <path
            d="
              M410 45
              C260 55 115 125 75 270
              C45 380 130 455 235 410
              C360 357 430 210 410 45Z
            "
            fill="url(#leafGradient)"
          />

          {/* Leaf vein */}

          <path
            d="
              M90 395
              C170 310 250 220 400 55
            "
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />

          {/* Smaller veins */}

          <path
            d="M160 330 L110 250"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="4"
          />

          <path
            d="M215 270 L155 190"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="4"
          />

          <path
            d="M275 205 L235 125"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="4"
          />

          <path
            d="M125 360 L70 330"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="4"
          />

          <path
            d="M190 310 L130 285"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="4"
          />
        </svg>
      </motion.div>

      <motion.span
        className="leaf-reveal-text"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
      >
        MY JOURNEY
      </motion.span>
    </motion.div>
  );
};


/* =========================================================
   🌿 VERTICAL VINE
========================================================= */

const TimelineVine = () => {
  return (
    <div className="timeline-vine">
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <motion.path
          d="
            M50 0
            C15 100 85 180 45 270
            C5 360 90 430 50 520
            C10 610 90 700 45 790
            C15 850 70 930 50 1000
          "
          fill="none"
          stroke="#4F7942"
          strokeWidth="7"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
          }}
          whileInView={{
            pathLength: 1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Vine leaves */}

      <motion.span
        className="timeline-vine-leaf vine-leaf-1"
        initial={{ scale: 0, rotate: -30 }}
        whileInView={{ scale: 1, rotate: -10 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          type: 'spring',
        }}
      >
        🍃
      </motion.span>

      <motion.span
        className="timeline-vine-leaf vine-leaf-2"
        initial={{ scale: 0, rotate: 30 }}
        whileInView={{ scale: 1, rotate: 10 }}
        viewport={{ once: true }}
        transition={{
          delay: 1.3,
          type: 'spring',
        }}
      >
        🍃
      </motion.span>

      <motion.span
        className="timeline-vine-leaf vine-leaf-3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 1.8,
          type: 'spring',
        }}
      >
        🌱
      </motion.span>
    </div>
  );
};


/* =========================================================
   🌱 EXPERIENCE CARD
========================================================= */

const ExperienceCard = ({ job, index }) => {
  return (
    <motion.div
      className={`experience-item ${
        index % 2 === 0
          ? 'experience-left'
          : 'experience-right'
      }`}
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      {/* Timeline node */}

      <motion.div
        className="experience-node"
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: [0, 1.3, 1],
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: index * 0.08 + 0.2,
        }}
      >
        <span>🌱</span>
      </motion.div>


      {/* Card */}

      <motion.div
        className="experience-card"
        whileHover={{
          y: -8,
          scale: 1.015,
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 20,
        }}
      >

        {/* Date */}

        <div className="experience-date">
          <span className="date-leaf">🍃</span>

          {job.date}
        </div>


        {/* Title */}

        <h3>
          {job.title}
        </h3>


        {/* Company */}

        <h4>
          {job.company}
        </h4>


        {/* Description */}

        <p>
          {job.desc}
        </p>


        {/* Decorative bottom vine */}

        <div className="card-vine">
          <span />
          <span />
          <span />
        </div>

      </motion.div>
    </motion.div>
  );
};


/* =========================================================
   🌿 EXPERIENCE
========================================================= */

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience-section"
    >

      {/* Background */}

      <div className="experience-background" />

      <FloatingLeaves />

      {/* Giant leaf reveal */}

      <GiantLeafReveal />


      {/* Main content */}

      <div className="experience-container">

        {/* Heading */}

        <motion.div
          className="experience-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.9,
          }}
        >

          <span className="heading-label">
            <i className="fas fa-seedling" />
            EXPERIENCE
          </span>

          <h2>
            My Journey
          </h2>

          <p>
            From studying plants to planting code.
          </p>

          <div className="heading-decoration">
            <span />
            <span />
            <span />
          </div>

        </motion.div>


        {/* Timeline */}

        <div className="timeline">

          {/* Growing vine */}

          <TimelineVine />


          {/* Experience items */}

          {resumeData.experience.map(
            (job, index) => (
              <ExperienceCard
                key={job.id}
                job={job}
                index={index}
              />
            )
          )}

        </div>

      </div>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* ===============================================
           SECTION
        =============================================== */

        .experience-section {
          position: relative;

          min-height: 100vh;

          padding:
            clamp(80px, 10vw, 140px)
            20px;

          overflow: hidden;

          background:
            linear-gradient(
              180deg,
              #E8F5E9 0%,
              #F5FAF1 50%,
              #EAF4E4 100%
            );
        }


        .experience-background {
          position: absolute;

          inset: 0;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(151,188,98,0.18),
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(79,121,66,0.12),
              transparent 30%
            );

          pointer-events: none;
        }


        /* ===============================================
           FLOATING LEAVES
        =============================================== */

        .experience-floating-leaves {
          position: absolute;

          inset: 0;

          overflow: hidden;

          pointer-events: none;

          z-index: 1;
        }

        .experience-leaf {
          position: absolute;

          top: -30px;
        }

        .experience-leaf svg {
          width: 100%;
          height: 100%;

          filter:
            drop-shadow(
              0 5px 7px
              rgba(44,95,45,0.12)
            );
        }


        /* ===============================================
           GIANT LEAF
        =============================================== */

        .giant-leaf-overlay {
          position: absolute;

          inset: 0;

          display: flex;

          justify-content: center;

          align-items: center;

          flex-direction: column;

          background:
            linear-gradient(
              135deg,
              #DDEDD3,
              #F4FAF0
            );

          z-index: 20;

          pointer-events: none;
        }

        .giant-leaf {
          width:
            clamp(220px, 40vw, 470px);

          height:
            clamp(220px, 40vw, 470px);

          filter:
            drop-shadow(
              0 30px 50px
              rgba(44,95,45,0.2)
            );
        }

        .giant-leaf svg {
          width: 100%;
          height: 100%;
        }

        .leaf-reveal-text {
          margin-top: -20px;

          color: #315C35;

          font-size:
            clamp(0.8rem, 1.5vw, 1rem);

          font-weight: 800;

          letter-spacing: 5px;
        }


        /* ===============================================
           CONTAINER
        =============================================== */

        .experience-container {
          position: relative;

          z-index: 5;

          max-width: 1100px;

          margin: 0 auto;
        }


        /* ===============================================
           HEADING
        =============================================== */

        .experience-heading {
          text-align: center;

          margin-bottom:
            clamp(70px, 9vw, 110px);
        }

        .heading-label {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 15px;

          color: #4F7942;

          font-size: 0.8rem;

          font-weight: 800;

          letter-spacing: 3px;
        }

        .heading-label i {
          font-size: 1rem;
        }

        .experience-heading h2 {
          margin: 0;

          color: #243B25;

          font-size:
            clamp(2.3rem, 5vw, 4rem);

          line-height: 1.1;

          font-weight: 800;
        }

        .experience-heading p {
          margin:
            15px auto 0;

          color: #687568;

          font-size:
            clamp(0.95rem, 2vw, 1.1rem);
        }


        /* ===============================================
           HEADING DECORATION
        =============================================== */

        .heading-decoration {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          margin-top: 20px;
        }

        .heading-decoration span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #6F9D5C;
        }

        .heading-decoration span:nth-child(2) {
          width: 45px;

          border-radius: 20px;
        }


        /* ===============================================
           TIMELINE
        =============================================== */

        .timeline {
          position: relative;

          width: 100%;

          padding-bottom: 30px;
        }


        /* ===============================================
           GROWING VINE
        =============================================== */

        .timeline-vine {
          position: absolute;

          left: 50%;

          top: 0;
          bottom: 0;

          width: 90px;

          transform:
            translateX(-50%);

          pointer-events: none;

          z-index: 1;
        }

        .timeline-vine svg {
          width: 100%;
          height: 100%;
        }

        .timeline-vine-leaf {
          position: absolute;

          font-size: 32px;
        }

        .vine-leaf-1 {
          top: 18%;
          left: -2px;
          transform: rotate(-20deg);
        }

        .vine-leaf-2 {
          top: 48%;
          right: -2px;
          transform: rotate(20deg);
        }

        .vine-leaf-3 {
          top: 78%;
          left: 10px;
        }


        /* ===============================================
           EXPERIENCE ITEM
        =============================================== */

        .experience-item {
          position: relative;

          width: 50%;

          margin-bottom:
            clamp(45px, 7vw, 80px);

          display: flex;

          align-items: flex-start;
        }

        .experience-left {
          padding-right: 75px;

          justify-content: flex-end;
        }

        .experience-right {
          margin-left: 50%;

          padding-left: 75px;

          justify-content: flex-start;
        }


        /* ===============================================
           NODE
        =============================================== */

        .experience-node {
          position: absolute;

          top: 25px;

          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            rgba(255,255,255,0.95);

          border:
            3px solid #6F9D5C;

          box-shadow:
            0 0 0 7px
            rgba(151,188,98,0.16),
            0 8px 20px
            rgba(44,95,45,0.12);

          z-index: 4;

          font-size: 20px;
        }

        .experience-left .experience-node {
          right: -24px;
        }

        .experience-right .experience-node {
          left: -24px;
        }


        /* ===============================================
           CARD
        =============================================== */

        .experience-card {
          position: relative;

          width: 100%;

          max-width: 470px;

          padding:
            clamp(22px, 3vw, 32px);

          border-radius: 24px;

          background:
            rgba(255,255,255,0.82);

          border:
            1px solid
            rgba(111,157,92,0.18);

          box-shadow:
            0 15px 45px
            rgba(44,95,45,0.08);

          backdrop-filter:
            blur(12px);

          overflow: hidden;

          transition:
            box-shadow 0.35s ease;
        }

        .experience-card:hover {
          box-shadow:
            0 25px 60px
            rgba(44,95,45,0.14);
        }


        /* ===============================================
           CARD TOP LINE
        =============================================== */

        .experience-card::before {
          content: '';

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 4px;

          background:
            linear-gradient(
              90deg,
              #315C35,
              #97BC62,
              #6F9D5C
            );

          transform:
            scaleX(0);

          transform-origin: left;

          transition:
            transform 0.5s ease;
        }

        .experience-card:hover::before {
          transform:
            scaleX(1);
        }


        /* ===============================================
           DATE
        =============================================== */

        .experience-date {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 12px;

          padding:
            6px 12px;

          border-radius: 30px;

          background:
            rgba(151,188,98,0.13);

          color: #5F8D4E;

          font-size: 0.8rem;

          font-weight: 700;
        }

        .date-leaf {
          font-size: 13px;
        }


        /* ===============================================
           TITLE
        =============================================== */

        .experience-card h3 {
          margin:
            0 0 8px;

          color: #243B25;

          font-size:
            clamp(1.15rem, 2vw, 1.45rem);

          line-height: 1.3;
        }


        /* ===============================================
           COMPANY
        =============================================== */

        .experience-card h4 {
          margin:
            0 0 14px;

          color: #6F9D5C;

          font-size: 0.95rem;

          font-weight: 700;
        }


        /* ===============================================
           DESCRIPTION
        =============================================== */

        .experience-card p {
          margin: 0;

          color: #687568;

          font-size:
            clamp(0.85rem, 1.5vw, 0.95rem);

          line-height: 1.7;
        }


        /* ===============================================
           CARD VINE
        =============================================== */

        .card-vine {
          position: absolute;

          right: -5px;
          bottom: -3px;

          width: 90px;
          height: 45px;

          opacity: 0.2;
        }

        .card-vine::before {
          content: '';

          position: absolute;

          width: 80px;
          height: 35px;

          border-top:
            2px solid #4F7942;

          border-radius:
            50%;

          transform:
            rotate(-10deg);
        }

        .card-vine span {
          position: absolute;

          width: 13px;
          height: 8px;

          border-radius:
            100% 0 100% 0;

          background: #6F9D5C;
        }

        .card-vine span:nth-child(1) {
          right: 55px;
          top: 17px;

          transform: rotate(-25deg);
        }

        .card-vine span:nth-child(2) {
          right: 30px;
          top: 9px;

          transform: rotate(25deg);
        }

        .card-vine span:nth-child(3) {
          right: 10px;
          top: 22px;

          transform: rotate(-25deg);
        }


        /* ===============================================
           TABLET
        =============================================== */

        @media (max-width: 900px) {

          .experience-left {
            padding-right: 55px;
          }

          .experience-right {
            padding-left: 55px;
          }

          .experience-node {
            width: 42px;
            height: 42px;
          }

          .experience-left .experience-node {
            right: -21px;
          }

          .experience-right .experience-node {
            left: -21px;
          }

          .timeline-vine {
            width: 70px;
          }
        }


        /* ===============================================
           MOBILE
        =============================================== */

        @media (max-width: 700px) {

          .experience-section {
            padding:
              90px 16px;
          }


          /* Make timeline one-sided */

          .timeline-vine {
            left: 22px;

            transform: none;

            width: 45px;
          }


          .experience-item {
            width: 100%;

            margin-left: 0;

            margin-bottom: 45px;

            padding-left: 65px;

            padding-right: 0;
          }


          .experience-left,
          .experience-right {
            margin-left: 0;

            padding-left: 65px;

            padding-right: 0;

            justify-content: flex-start;
          }


          .experience-node,
          .experience-left .experience-node,
          .experience-right .experience-node {
            left: 0;

            right: auto;

            width: 44px;
            height: 44px;
          }


          .experience-card {
            max-width: none;

            padding: 22px;

            border-radius: 20px;
          }


          .timeline-vine-leaf {
            font-size: 24px;
          }

          .vine-leaf-1 {
            left: 0;
          }

          .vine-leaf-2 {
            right: -5px;
          }


          .giant-leaf-overlay {
            padding: 20px;
          }

          .leaf-reveal-text {
            letter-spacing: 3px;
          }


          .experience-heading {
            margin-bottom: 65px;
          }
        }


        /* ===============================================
           SMALL MOBILE
        =============================================== */

        @media (max-width: 420px) {

          .experience-section {
            padding-left: 12px;
            padding-right: 12px;
          }

          .experience-item,
          .experience-left,
          .experience-right {
            padding-left: 55px;
          }

          .timeline-vine {
            left: 16px;
          }

          .experience-node,
          .experience-left .experience-node,
          .experience-right .experience-node {
            left: -5px;

            width: 40px;
            height: 40px;

            font-size: 17px;
          }

          .experience-card {
            padding: 18px;

            border-radius: 18px;
          }

          .experience-card p {
            font-size: 0.84rem;
          }
        }


        /* ===============================================
           REDUCED MOTION
        =============================================== */

        @media (prefers-reduced-motion: reduce) {

          .experience-floating-leaves {
            display: none;
          }

          .giant-leaf-overlay {
            display: none;
          }

          .experience-card {
            transition: none;
          }
        }

      `}</style>
    </section>
  );
};

export default Experience;
