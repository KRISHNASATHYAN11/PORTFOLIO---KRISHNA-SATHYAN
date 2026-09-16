import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { resumeData } from "../data/resumeData";

/* =========================================================
   DECORATIVE VINE
========================================================= */

const Vine = ({ side = "left" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`project-vine project-vine-${side}`}
      animate={
        shouldReduceMotion
          ? {}
          : {
              rotate: side === "left" ? [0, 1.5, 0] : [0, -1.5, 0],
            }
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 220 650"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Main vine */}
        <motion.path
          d={
            side === "left"
              ? "M105 0 C45 90 170 130 80 220 C15 285 150 355 65 455 C25 500 95 570 45 650"
              : "M115 0 C175 90 50 130 140 220 C205 285 70 355 155 455 C195 500 125 570 175 650"
          }
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Branches */}
        <path
          d={
            side === "left"
              ? "M87 175 C48 150 25 125 15 90"
              : "M133 175 C172 150 195 125 205 90"
          }
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />

        <path
          d={
            side === "left"
              ? "M103 280 C145 250 175 220 185 180"
              : "M117 280 C75 250 45 220 35 180"
          }
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />

        <path
          d={
            side === "left"
              ? "M78 430 C40 400 20 370 10 335"
              : "M142 430 C180 400 200 370 210 335"
          }
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />

        {/* Leaves */}
        <g fill="currentColor">
          <ellipse
            cx={side === "left" ? "18" : "202"}
            cy="92"
            rx="23"
            ry="10"
            transform={
              side === "left" ? "rotate(-35 18 92)" : "rotate(35 202 92)"
            }
          />

          <ellipse
            cx={side === "left" ? "188" : "32"}
            cy="181"
            rx="23"
            ry="10"
            transform={
              side === "left" ? "rotate(35 188 181)" : "rotate(-35 32 181)"
            }
          />

          <ellipse
            cx={side === "left" ? "13" : "207"}
            cy="340"
            rx="23"
            ry="10"
            transform={
              side === "left" ? "rotate(-35 13 340)" : "rotate(35 207 340)"
            }
          />
        </g>

        {/* Small grape clusters */}
        <g fill="#725568">
          <circle cx={side === "left" ? "35" : "185"} cy="130" r="6" />
          <circle cx={side === "left" ? "48" : "172"} cy="135" r="6" />
          <circle cx={side === "left" ? "61" : "159"} cy="130" r="6" />
          <circle cx={side === "left" ? "42" : "178"} cy="147" r="6" />
          <circle cx={side === "left" ? "54" : "166"} cy="151" r="6" />
          <circle cx={side === "left" ? "48" : "172"} cy="163" r="6" />
        </g>
      </svg>
    </motion.div>
  );
};

/* =========================================================
   FLOATING LEAF
========================================================= */

const FloatingLeaf = ({ className, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`floating-leaf ${className}`}
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, -18, 0],
              x: [0, 8, 0],
              rotate: [0, 12, -5, 0],
            }
      }
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      🍃
    </motion.div>
  );
};

/* =========================================================
   LITTLE PLANT
========================================================= */

const MiniPlant = ({ className }) => {
  return (
    <motion.div
      className={`mini-plant ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="plant-leaves">
        <span>🌿</span>
      </div>

      <div className="plant-pot">
        <div className="pot-top" />
        <div className="pot-body" />
      </div>
    </motion.div>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index }) => {
  const shouldReduceMotion = useReducedMotion();

  const fromLeft = index % 2 === 0;

  return (
    <motion.article
      className="project-card-new"
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              x: fromLeft ? -100 : 100,
              rotate: fromLeft ? -3 : 3,
            }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              x: 0,
              rotate: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -12,
              rotate: index % 2 === 0 ? 1 : -1,
              transition: {
                duration: 0.3,
              },
            }
      }
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <div
        className={`project-image-new ${
          project.type === "mobile" ? "project-mobile" : "project-web"
        }`}
      >
        {/* Botanical corner */}
        <div className="image-botanical">✦</div>

        {/* Number */}
        <div className="project-index">
          {String(index + 1).padStart(2, "0")}
        </div>

        <motion.img
          src={project.img}
          alt={`${project.title} project preview`}
          loading="lazy"
          decoding="async"
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: project.type === "mobile" ? 1.03 : 1.08,
                }
          }
          transition={{ duration: 0.5 }}
        />

        {/* Image overlay */}
        <div className="image-overlay">
          <span>
            {project.type === "mobile" ? "MOBILE APP" : "WEB EXPERIENCE"}
          </span>
        </div>
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="project-info">
        <div className="project-top-line">
          <span className="project-category-new">{project.category}</span>

          <span className="project-sprout">🌱</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.desc}</p>

        <div className="project-bottom">
          <button
            type="button"
            className="project-button"
            onClick={() => {
              // Add your project URL later
            }}
          >
            <span>Explore Project</span>
            <span className="button-arrow">↗</span>
          </button>

          <div className="tiny-vine">
            <span>⌁</span>
            <span>🍃</span>
          </div>
        </div>
      </div>

      {/* Bottom botanical decoration */}
      <div className="card-leaf-decoration">🍃</div>
    </motion.article>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Projects = () => {
  const projectsTrackRef = useRef(null);

  const dragState = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const handlePointerDown = (e) => {
    // Only use custom drag behavior for a primary mouse button.
    // Touch and pen devices keep their native scrolling behavior.
    if (e.pointerType !== "mouse" || e.button !== 0) return;

    const track = e.currentTarget;

    dragState.current = {
      isDragging: true,
      startX: e.clientX,
      startScrollLeft: track.scrollLeft,
      moved: false,
    };

    track.setPointerCapture(e.pointerId);
    track.classList.add("is-dragging");
  };

  const handlePointerMove = (e) => {
    const state = dragState.current;
    if (!state.isDragging) return;

    const distance = e.clientX - state.startX;

    if (Math.abs(distance) > 5) {
      state.moved = true;
    }

    e.currentTarget.scrollLeft = state.startScrollLeft - distance * 1.25;
  };

  const handlePointerUp = (e) => {
    const state = dragState.current;
    if (!state.isDragging) return;

    state.isDragging = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    e.currentTarget.classList.remove("is-dragging");

    // Keep the moved flag long enough to prevent an accidental
    // click on the card/button immediately after a drag.
    setTimeout(() => {
      dragState.current.moved = false;
    }, 100);
  };

  const handlePointerCancel = (e) => {
    dragState.current.isDragging = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    e.currentTarget.classList.remove("is-dragging");
  };

  /*
   * React's onWheel handler may be treated as passive by the browser.
   * That means preventDefault() can throw the warning:
   * "Unable to preventDefault inside passive event listener invocation."
   *
   * Attach the wheel listener directly with passive: false instead.
   */
  useEffect(() => {
    const track = projectsTrackRef.current;
    if (!track) return;

    const handleWheel = (e) => {
      // Keep native horizontal trackpad scrolling untouched.
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) {
        return;
      }

      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;

      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;

      const canScrollRight = track.scrollLeft < maxScroll;
      const canScrollLeft = track.scrollLeft > 0;

      if (
        (scrollingRight && canScrollRight) ||
        (scrollingLeft && canScrollLeft)
      ) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    };

    track.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      track.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleClickCapture = (e) => {
    // Prevent accidental clicks after a mouse drag.
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section id="projects" className="projects-garden">
      {/* Decorative background */}
      <div className="garden-glow garden-glow-one" />
      <div className="garden-glow garden-glow-two" />

      {/* Large vines */}
      <Vine side="left" />
      <Vine side="right" />

      {/* Floating leaves */}
      <FloatingLeaf className="leaf-one" delay={0} />

      <FloatingLeaf className="leaf-two" delay={1} />

      <FloatingLeaf className="leaf-three" delay={2} />

      <FloatingLeaf className="leaf-four" delay={1.5} />

      {/* Decorative plants */}
      <MiniPlant className="plant-one" />
      <MiniPlant className="plant-two" />

      <div className="projects-garden-container">
        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          className="projects-title"
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
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="title-eyebrow">
            <span className="eyebrow-line" />
            <span>MY CREATIVE GARDEN</span>
            <span className="eyebrow-line" />
          </div>

          <h2>
            Ideas I've
            <span> Grown</span>
          </h2>

          <p>
            From the first line of code to the final interface, these are some
            of the digital experiences I've cultivated.
          </p>
        </motion.div>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <div
          className="projects-track"
          ref={projectsTrackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onClickCapture={handleClickCapture}
        >
          {resumeData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div
          className="garden-scroll-indicator"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 1,
          }}
        >
          <span className="scroll-arrow">←</span>

          <div>
            <span>Swipe • Drag • Scroll through my garden</span>

            <div className="scroll-line">
              <span />
            </div>
          </div>

          <span className="scroll-arrow">→</span>
        </motion.div>
      </div>

      {/* =================================================
          STYLES
      ================================================= */}

      <style>{`

        /* =================================================
           MAIN SECTION
        ================================================= */

        .projects-garden {
          position: relative;
          overflow: hidden;
          padding: clamp(80px, 10vw, 140px) 0;
          background:
            linear-gradient(
              180deg,
              #f8faf5 0%,
              #f3f6ef 50%,
              #faf8f2 100%
            );
          isolation: isolate;
        }


        .projects-garden-container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }


        /* =================================================
           BACKGROUND GLOW
        ================================================= */

        .garden-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(2px);
          z-index: -1;
        }

        .garden-glow-one {
          width: 450px;
          height: 450px;
          left: -250px;
          top: 20%;
          background: rgba(112, 142, 94, 0.08);
        }

        .garden-glow-two {
          width: 400px;
          height: 400px;
          right: -220px;
          bottom: 5%;
          background: rgba(113, 82, 99, 0.07);
        }


        /* =================================================
           VINES
        ================================================= */

        .project-vine {
          position: absolute;
          width: clamp(110px, 14vw, 190px);
          height: clamp(350px, 48vw, 650px);
          color: rgba(70, 105, 68, 0.28);
          z-index: 1;
          pointer-events: none;
        }

        .project-vine-left {
          left: -30px;
          top: 40px;
        }

        .project-vine-right {
          right: -30px;
          bottom: 20px;
        }


        /* =================================================
           FLOATING LEAVES
        ================================================= */

        .floating-leaf {
          position: absolute;
          z-index: 3;
          font-size: clamp(20px, 3vw, 34px);
          opacity: 0.6;
          pointer-events: none;
        }

        .leaf-one {
          left: 20%;
          top: 13%;
        }

        .leaf-two {
          right: 18%;
          top: 25%;
        }

        .leaf-three {
          left: 8%;
          bottom: 25%;
        }

        .leaf-four {
          right: 9%;
          bottom: 12%;
        }


        /* =================================================
           MINI PLANTS
        ================================================= */

        .mini-plant {
          position: absolute;
          z-index: 2;
          pointer-events: none;
        }

        .plant-one {
          left: 5%;
          bottom: 60px;
          transform: scale(0.8);
        }

        .plant-two {
          right: 5%;
          top: 100px;
          transform: scale(0.65);
        }

        .plant-leaves {
          font-size: 65px;
          text-align: center;
          line-height: 0.8;
        }

        .plant-pot {
          position: relative;
          width: 65px;
          height: 50px;
          margin: -5px auto 0;
        }

        .pot-top {
          position: absolute;
          width: 70px;
          height: 14px;
          left: -3px;
          top: 0;
          border-radius: 50%;
          background: #b78f78;
        }

        .pot-body {
          position: absolute;
          top: 6px;
          left: 4px;
          width: 58px;
          height: 43px;
          background: #c69d82;
          clip-path: polygon(
            5% 0,
            95% 0,
            82% 100%,
            18% 100%
          );
        }


        /* =================================================
           HEADING
        ================================================= */

        .projects-title {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 60px;
        }

        .title-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: var(--forest-green);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 2.5px;
          margin-bottom: 18px;
        }

        .eyebrow-line {
          width: 35px;
          height: 1px;
          background: var(--forest-green);
          opacity: 0.35;
        }

        .projects-title h2 {
          margin: 0;
          font-size: clamp(2.5rem, 6vw, 5rem);
          line-height: 1;
          letter-spacing: -2px;
          color: var(--forest-green);
        }

        .projects-title h2 span {
          font-family: Georgia, serif;
          font-style: italic;
          color: #73576a;
          font-weight: 400;
        }

        .projects-title p {
          max-width: 600px;
          margin: 22px auto 0;
          color: var(--light-text);
          font-size: 0.95rem;
          line-height: 1.8;
        }


        /* =================================================
           PROJECT TRACK
        ================================================= */

        .projects-track {
          display: flex;
          gap: 28px;
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 20px 12px 35px;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          overscroll-behavior-x: contain;

          /* Native touch/trackpad scrolling remains available. */
          touch-action: pan-x;
          -webkit-overflow-scrolling: touch;

          /* Desktop mouse-drag support. */
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
        }

        .projects-track::-webkit-scrollbar {
          display: none;
        }

        .projects-track.is-dragging {
          cursor: grabbing;
          scroll-snap-type: none;
          user-select: none;
          -webkit-user-select: none;
        }

        .projects-track.is-dragging .project-card-new {
          pointer-events: none;
        }


        /* =================================================
           CARD
        ================================================= */

        .project-card-new {
          position: relative;
          flex: 0 0 350px;
          min-height: 535px;
          overflow: hidden;
          scroll-snap-align: center;

          border-radius: 32px;

          background: rgba(255, 255, 255, 0.92);

          border: 1px solid rgba(
            78,
            103,
            71,
            0.13
          );

          box-shadow:
            0 20px 60px rgba(
              44,
              65,
              40,
              0.08
            );

          transition:
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .project-card-new:hover {
          border-color:
            rgba(78, 103, 71, 0.25);

          box-shadow:
            0 30px 75px rgba(
              44,
              65,
              40,
              0.15
            );
        }


        /* =================================================
           IMAGE
        ================================================= */

        .project-image-new {
          position: relative;
          height: 225px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e9eee5;
        }

        .project-image-new img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .project-web img {
          object-fit: cover;
        }

        .project-mobile {
          padding: 14px;
          background:
            linear-gradient(
              135deg,
              #e5ece0,
              #f4efe8
            );
        }

        .project-mobile img {
          width: auto;
          height: 205px;
          max-width: 82%;
          object-fit: contain;
          border-radius: 20px;

          filter:
            drop-shadow(
              0 14px 18px rgba(
                0,
                0,
                0,
                0.18
              )
            );
        }


        /* =================================================
           IMAGE DECORATIONS
        ================================================= */

        .image-botanical {
          position: absolute;
          z-index: 4;
          top: 15px;
          right: 17px;

          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(
            255,
            255,
            255,
            0.82
          );

          color: var(--forest-green);
          font-size: 13px;

          backdrop-filter: blur(8px);
        }

        .project-index {
          position: absolute;
          z-index: 4;
          left: 16px;
          bottom: 15px;

          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(
            255,
            255,
            255,
            0.88
          );

          color: var(--forest-green);
          font-size: 0.7rem;
          font-weight: 800;

          backdrop-filter: blur(8px);
        }

        .image-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          padding: 25px 20px 15px;

          background:
            linear-gradient(
              transparent,
              rgba(30, 48, 29, 0.35)
            );

          color: white;
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 1.5px;
        }


        /* =================================================
           CONTENT
        ================================================= */

        .project-info {
          padding: 26px 26px 35px;
        }

        .project-top-line {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
        }

        .project-category-new {
          color: #74856d;
          font-size: 0.64rem;
          line-height: 1.5;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .project-sprout {
          font-size: 18px;
          opacity: 0.65;
        }

        .project-info h3 {
          margin: 11px 0 10px;
          color: var(--forest-green);
          font-size: 1.6rem;
          letter-spacing: -0.5px;
        }

        .project-info p {
          margin: 0;
          color: var(--light-text);
          font-size: 0.84rem;
          line-height: 1.7;
        }


        /* =================================================
           BOTTOM
        ================================================= */

        .project-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 25px;
        }

        .project-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          border: 0;
          background: transparent;
          padding: 0;

          color: var(--forest-green);

          font-family: inherit;
          font-size: 0.8rem;
          font-weight: 800;

          cursor: pointer;
        }

        .button-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 27px;
          height: 27px;

          border-radius: 50%;

          background: var(--forest-green);
          color: white;

          transition:
            transform 0.3s ease;
        }

        .project-button:hover .button-arrow {
          transform: translate(3px, -3px);
        }

        .tiny-vine {
          display: flex;
          align-items: center;
          gap: 2px;

          color: rgba(
            77,
            105,
            67,
            0.35
          );

          font-size: 18px;
        }


        /* =================================================
           CARD DECORATION
        ================================================= */

        .card-leaf-decoration {
          position: absolute;
          right: -7px;
          bottom: -8px;

          font-size: 48px;
          opacity: 0.08;

          transform: rotate(-20deg);
          pointer-events: none;
        }


        /* =================================================
           SCROLL INDICATOR
        ================================================= */

        .garden-scroll-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;

          margin-top: 15px;

          color: var(--light-text);
        }

        .garden-scroll-indicator > div {
          text-align: center;
        }

        .garden-scroll-indicator > div > span {
          display: block;
          font-size: 0.67rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .scroll-arrow {
          color: var(--forest-green);
          font-size: 1.1rem;
        }

        .scroll-line {
          width: 100px;
          height: 2px;
          margin: 8px auto 0;
          overflow: hidden;
          background: rgba(
            77,
            105,
            67,
            0.12
          );
        }

        .scroll-line span {
          display: block;
          width: 35%;
          height: 100%;
          background: var(--forest-green);
          animation: scrollIndicator 2s ease-in-out infinite;
        }

        @keyframes scrollIndicator {
          0% {
            transform: translateX(-100%);
          }

          50% {
            transform: translateX(180%);
          }

          100% {
            transform: translateX(300%);
          }
        }


        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {

          .projects-garden-container {
            width: min(
              100% - 30px,
              760px
            );
          }

          .project-card-new {
            flex-basis: 315px;
          }

          .project-vine {
            opacity: 0.6;
          }

          .mini-plant {
            opacity: 0.6;
          }

        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 600px) {

          .projects-garden {
            padding: 75px 0 90px;
          }

          .projects-garden-container {
            width: 100%;
          }

          .projects-title {
            padding: 0 25px;
            margin-bottom: 35px;
          }

          .title-eyebrow {
            font-size: 0.57rem;
            letter-spacing: 1.7px;
          }

          .eyebrow-line {
            width: 20px;
          }

          .projects-title h2 {
            font-size: clamp(
              2.4rem,
              12vw,
              3.3rem
            );

            letter-spacing: -1.5px;
          }

          .projects-title p {
            font-size: 0.83rem;
            line-height: 1.7;
          }


          /* Cards */

          .projects-track {
            gap: 18px;
            padding-left: 22px;
            padding-right: 22px;
            padding-bottom: 25px;
          }

          .project-card-new {
            flex-basis: min(
              82vw,
              330px
            );

            min-height: 510px;
            border-radius: 27px;
          }

          .project-image-new {
            height: 205px;
          }

          .project-mobile img {
            height: 188px;
          }

          .project-info {
            padding: 22px 21px 30px;
          }

          .project-info h3 {
            font-size: 1.4rem;
          }

          .project-info p {
            font-size: 0.8rem;
          }


          /* Hide large decorations */

          .project-vine {
            width: 85px;
            height: 320px;
            opacity: 0.45;
          }

          .project-vine-left {
            left: -55px;
            top: 150px;
          }

          .project-vine-right {
            right: -55px;
            bottom: 80px;
          }

          .mini-plant {
            display: none;
          }

          .floating-leaf {
            font-size: 22px;
          }

          .leaf-one {
            left: 7%;
            top: 10%;
          }

          .leaf-two {
            right: 7%;
            top: 20%;
          }

          .leaf-three {
            left: 5%;
            bottom: 15%;
          }

          .leaf-four {
            right: 5%;
            bottom: 8%;
          }

          .garden-scroll-indicator {
            margin-top: 5px;
          }

        }


        /* =================================================
           VERY SMALL PHONES
        ================================================= */

        @media (max-width: 380px) {

          .projects-title h2 {
            font-size: 2.25rem;
          }

          .project-card-new {
            flex-basis: 84vw;
          }

          .project-image-new {
            height: 190px;
          }

          .project-info {
            padding: 20px 18px 27px;
          }

          .project-category-new {
            font-size: 0.58rem;
          }

        }


        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {

          .scroll-line span {
            animation: none;
          }

          .project-card-new,
          .project-vine,
          .floating-leaf {
            transition: none !important;
          }

        }

      `}</style>
    </section>
  );
};

export default Projects;
