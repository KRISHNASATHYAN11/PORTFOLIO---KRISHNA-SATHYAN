import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import aboutGirl from '../assets/about-girl.webp';
import Icon from '../ui/Icon';

/* =========================================================
   🍃 FLOATING LEAVES - Decorative only
========================================================= */
const FloatingLeaves = () => {
  const shouldReduceMotion = useReducedMotion();
  const [leaves] = useState(() =>
    Array.from({ length: 14 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      size: 14 + Math.random() * 18,
      delay: Math.random() * 6,
      duration: 9 + Math.random() * 8,
      drift: Math.random() * 100 - 50,
    }))
  );

  if (shouldReduceMotion) return null;

  return (
    <div className="about-floating-leaves" aria-hidden="true">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="about-floating-leaf"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
          }}
          initial={{ y: '-10vh', x: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            x: [0, leaf.drift, -leaf.drift, leaf.drift / 2, 0],
            opacity: [0, 0.5, 0.45, 0.25, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 50 50" aria-hidden="true">
            <path d="M42 7C24 9 10 17 8 31C7 39 13 44 20 42C35 38 42 22 42 7Z" fill="#5F8D4E" />
            <path d="M10 39C20 28 29 19 40 9" stroke="#DDEBCF" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

/* =========================================================
   💬 GIRL SPEECH BUBBLE
========================================================= */
const SpeechBubble = () => (
  <motion.div
    className="girl-speech"
    role="note"
    aria-label="Introduction"
    initial={{ opacity: 0, scale: 0.7, x: 25 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, delay: 0.6, type: 'spring', stiffness: 180, damping: 18 }}
  >
    <div className="speech-header">
      <span className="speech-wave" aria-hidden="true">👋</span>
      <span>Hi there!</span>
    </div>
    <strong>I'm a Botany graduate turned Web Developer.</strong>
    <p>I love creating things that are useful, beautiful & meaningful.</p>
    <span className="speech-tail" aria-hidden="true" />
  </motion.div>
);

/* =========================================================
   👩 GIRL PRESENTATION
========================================================= */
const AboutGirl = () => (
  <motion.div
    className="about-girl-area"
    initial={{ opacity: 0, x: -80, y: 30 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      className="girl-glow"
      aria-hidden="true"
      animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    />
    <SpeechBubble />
    <motion.img
      src={aboutGirl}
      alt="Illustration representing Krishna's journey from Botany to Web Development"
      className="about-girl-image"
      width="410"
      height="520"
      loading="lazy"
      decoding="async"
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="girl-shadow"
      aria-hidden="true"
      animate={{ scaleX: [1, 0.9, 1], opacity: [0.16, 0.08, 0.16] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.span
      className="girl-decoration girl-decoration-one"
      aria-hidden="true"
      animate={{ y: [0, -10, 0], rotate: [-10, 5, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >🍃</motion.span>
    <motion.span
      className="girl-decoration girl-decoration-two"
      aria-hidden="true"
      animate={{ y: [0, 8, 0], rotate: [10, -5, 10] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    >🌿</motion.span>
  </motion.div>
);

/* =========================================================
   🌱 SKILL CHIP
========================================================= */
const SkillChip = ({ skill, index }) => (
  <motion.li
    className="about-skill-chip"
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    whileHover={{ y: -5, scale: 1.04 }}
  >
    <span className="skill-icon" aria-hidden="true">
      <Icon name={skill.icon} />
    </span>
    <span>{skill.name}</span>
  </motion.li>
);

/* =========================================================
   🌿 ABOUT SECTION
========================================================= */
const About = () => {
  const techSkills = resumeData.skills.slice(0, 8);
  const otherSkills = resumeData.skills.slice(8);

  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-background" aria-hidden="true" />
      <FloatingLeaves />

      <div className="about-container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-label">
            <Icon name="leaf" />
            GET TO KNOW ME
          </span>
          <h2 id="about-heading">About Me</h2>
          <p>A little story about the person behind the code.</p>
          <div className="heading-decoration" aria-hidden="true">
            <span /><Icon name="seedling" /><span />
          </div>
        </motion.div>

        <div className="about-story">
          <div className="girl-column">
            <AboutGirl />
          </div>

          <motion.div
            className="story-column"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <article className="story-card">
              <span className="story-label">
                <Icon name="seedling" />
                MY STORY
              </span>
              <h3>
                Different roots.
                <br />
                <span>Same passion for growth.</span>
              </h3>
              <p>
                With a background in Botany and a passion for Technology, I bring
                a unique perspective to web development.
              </p>
              <p>
                I understand that just like a garden, a website needs care, structure,
                and the right environment to flourish.
              </p>
              <div className="story-quote" role="blockquote">
                <span className="quote-mark" aria-hidden="true">"</span>
                <p>I'm always learning, always experimenting, and always growing.</p>
                <span className="quote-leaf" aria-hidden="true">🍃</span>
              </div>
              <div className="story-vine" aria-hidden="true">
                <span /><span /><span />
              </div>
            </article>
          </motion.div>
        </div>

        <div className="skills-section">
          <motion.section
            className="skill-box"
            aria-labelledby="tech-stack-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="skill-heading">
              <div className="skill-heading-icon" aria-hidden="true">
                <Icon name="laptopCode" />
              </div>
              <div>
                <h3 id="tech-stack-heading">My Tech Stack</h3>
                <p>Tools I use to bring ideas to life.</p>
              </div>
            </div>
            <ul className="skills-list">
              {techSkills.map((skill, index) => (
                <SkillChip key={index} skill={skill} index={index} />
              ))}
            </ul>
          </motion.section>

          <motion.section
            className="skill-box"
            aria-labelledby="beyond-code-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="skill-heading">
              <div className="skill-heading-icon creative-icon" aria-hidden="true">
                <Icon name="palette" />
              </div>
              <div>
                <h3 id="beyond-code-heading">Beyond Code</h3>
                <p>Where my creativity grows.</p>
              </div>
            </div>
            <ul className="skills-list">
              {otherSkills.map((skill, index) => (
                <SkillChip key={index} skill={skill} index={index} />
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.div
          className="about-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span aria-hidden="true">🌱</span>
          <p>Always learning. Always growing.</p>
          <span aria-hidden="true">🍃</span>
        </motion.div>
      </div>

      <style>{`
        .about-section { position: relative; min-height: 100vh; padding: clamp(80px, 9vw, 130px) 20px; overflow: hidden; background: linear-gradient(145deg, #F7FBF4 0%, #E8F5E9 48%, #FDFBF7 100%); }
        .about-background { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle at 8% 30%, rgba(95,141,78,0.13), transparent 25%), radial-gradient(circle at 92% 65%, rgba(151,188,98,0.14), transparent 28%); }
        .about-floating-leaves { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 1; }
        .about-floating-leaf { position: absolute; top: -30px; }
        .about-floating-leaf svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 6px rgba(44,95,45,0.12)); }
        .about-container { position: relative; z-index: 5; width: 100%; max-width: 1150px; margin: 0 auto; }
        .about-heading { text-align: center; margin-bottom: clamp(50px, 7vw, 85px); }
        .about-label { display: inline-flex; align-items: center; gap: 8px; color: #4F7942; font-size: 0.78rem; font-weight: 800; letter-spacing: 3px; margin-bottom: 14px; }
        .about-heading h2 { margin: 0; color: #243B25; font-size: clamp(2.3rem, 5vw, 4rem); line-height: 1.1; font-weight: 800; }
        .about-heading > p { margin: 15px 0 0; color: #6D786D; font-size: clamp(0.9rem, 2vw, 1.1rem); }
        .heading-decoration { display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 20px; }
        .heading-decoration span { width: 45px; height: 1px; background: #8FBC8F; }
        .heading-decoration .portfolio-icon { color: #5F8D4E; font-size: 0.9rem; }
        .about-story { display: grid; grid-template-columns: minmax(340px, 0.9fr) minmax(400px, 1.1fr); align-items: center; gap: clamp(50px, 7vw, 90px); margin-bottom: clamp(60px, 9vw, 100px); }
        .girl-column { position: relative; min-height: 510px; display: flex; justify-content: center; align-items: flex-end; }
        .about-girl-area { position: relative; width: min(100%, 450px); min-height: 500px; display: flex; align-items: flex-end; justify-content: center; }
        .about-girl-image { position: relative; z-index: 4; width: min(100%, 410px); max-height: 520px; object-fit: contain; filter: drop-shadow(0 25px 30px rgba(44,95,45,0.18)); }
        .girl-glow { position: absolute; width: 85%; aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle, rgba(151,188,98,0.3), transparent 68%); filter: blur(25px); z-index: 1; }
        .girl-shadow { position: absolute; bottom: 5px; width: 55%; height: 24px; border-radius: 50%; background: rgba(44,95,45,0.18); filter: blur(8px); z-index: 2; }
        .girl-speech { position: absolute; z-index: 10; top: 30px; right: -105px; width: clamp(210px, 24vw, 280px); padding: 20px 21px; border-radius: 22px; background: rgba(255,255,255,0.96); border: 1px solid rgba(95,141,78,0.18); box-shadow: 0 18px 45px rgba(44,95,45,0.13); backdrop-filter: blur(12px); }
        .girl-speech::before { content: ''; position: absolute; top: 0; left: 20px; width: 45px; height: 4px; border-radius: 10px; background: #6F9D5C; }
        .speech-header { display: flex; align-items: center; gap: 7px; margin-bottom: 8px; color: #6F9D5C; font-size: 0.78rem; font-weight: 700; }
        .speech-wave { font-size: 1rem; }
        .girl-speech strong { display: block; color: #29452D; font-size: 0.95rem; line-height: 1.45; }
        .girl-speech p { margin: 9px 0 0; color: #6D786D; font-size: 0.76rem; line-height: 1.55; }
        .speech-tail { position: absolute; left: -10px; top: 48px; width: 20px; height: 20px; background: rgba(255,255,255,0.96); border-left: 1px solid rgba(95,141,78,0.18); border-bottom: 1px solid rgba(95,141,78,0.18); transform: rotate(45deg); }
        .girl-decoration { position: absolute; z-index: 7; font-size: 28px; }
        .girl-decoration-one { left: 5%; top: 40%; }
        .girl-decoration-two { right: 4%; bottom: 18%; }
        .story-card { position: relative; padding: clamp(28px, 4vw, 45px); border-radius: 30px; background: rgba(255,255,255,0.84); border: 1px solid rgba(255,255,255,0.9); box-shadow: 0 20px 60px rgba(44,95,45,0.09); backdrop-filter: blur(15px); overflow: hidden; }
        .story-card::before { content: ''; position: absolute; top: 0; left: 0; width: 5px; height: 100%; background: linear-gradient(180deg, #315C35, #97BC62); }
        .story-label { display: inline-flex; align-items: center; gap: 7px; color: #6F9D5C; font-size: 0.75rem; font-weight: 800; letter-spacing: 2px; margin-bottom: 15px; }
        .story-card h3 { margin: 0 0 20px; color: #243B25; font-size: clamp(1.7rem, 3vw, 2.5rem); line-height: 1.2; }
        .story-card h3 span { color: #6F9D5C; }
        .story-card > p { margin: 0 0 15px; color: #687568; font-size: clamp(0.88rem, 1.5vw, 0.98rem); line-height: 1.8; }
        .story-quote { display: flex; align-items: center; gap: 10px; margin-top: 25px; padding: 18px 20px; border-radius: 18px; background: rgba(151,188,98,0.1); }
        .quote-mark { color: #97BC62; font-size: 2.5rem; line-height: 0.5; }
        .story-quote p { margin: 0; color: #4F7942; font-size: 0.88rem; font-weight: 600; font-style: italic; line-height: 1.5; }
        .quote-leaf { margin-left: auto; font-size: 25px; }
        .story-vine { position: absolute; right: -5px; bottom: -2px; width: 100px; height: 55px; opacity: 0.18; }
        .story-vine::before { content: ''; position: absolute; width: 90px; height: 40px; border-top: 2px solid #4F7942; border-radius: 50%; transform: rotate(-10deg); }
        .story-vine span { position: absolute; width: 14px; height: 8px; border-radius: 100% 0 100% 0; background: #6F9D5C; }
        .story-vine span:nth-child(1) { right: 60px; top: 18px; transform: rotate(-25deg); }
        .story-vine span:nth-child(2) { right: 35px; top: 9px; transform: rotate(25deg); }
        .story-vine span:nth-child(3) { right: 10px; top: 22px; transform: rotate(-25deg); }
        .skills-section { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 25px; }
        .skill-box { padding: clamp(24px, 3vw, 32px); border-radius: 25px; background: rgba(255,255,255,0.7); border: 1px solid rgba(111,157,92,0.14); box-shadow: 0 15px 40px rgba(44,95,45,0.06); backdrop-filter: blur(10px); }
        .skill-heading { display: flex; align-items: center; gap: 15px; margin-bottom: 22px; }
        .skill-heading-icon { flex-shrink: 0; width: 48px; height: 48px; display: flex; justify-content: center; align-items: center; border-radius: 15px; background: rgba(151,188,98,0.16); color: #4F7942; font-size: 1.2rem; }
        .creative-icon { background: rgba(143,188,143,0.15); }
        .skill-heading h3 { margin: 0; color: #29452D; font-size: 1.15rem; }
        .skill-heading p { margin: 3px 0 0; color: #788178; font-size: 0.78rem; }
        .skills-list { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; margin: 0; }
        .about-skill-chip { display: inline-flex; align-items: center; gap: 8px; padding: 9px 13px; border-radius: 13px; background: rgba(255,255,255,0.95); border: 1px solid rgba(0,0,0,0.04); color: #536053; font-size: 0.8rem; font-weight: 600; box-shadow: 0 5px 15px rgba(44,95,45,0.06); cursor: default; }
        .skill-icon { width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: rgba(151,188,98,0.12); color: #5F8D4E; }
        .about-bottom { display: flex; align-items: center; justify-content: center; gap: 15px; margin-top: 60px; }
        .about-bottom p { margin: 0; color: #557056; font-size: 0.95rem; font-weight: 600; font-style: italic; letter-spacing: 1px; }
        .about-bottom span { font-size: 22px; }
        @media (max-width: 1000px) {
          .about-story { grid-template-columns: minmax(300px, 0.85fr) minmax(350px, 1.15fr); gap: 35px; }
          .girl-speech { right: -45px; width: 225px; }
          .about-girl-image { width: 370px; }
        }
        @media (max-width: 850px) {
          .about-story { grid-template-columns: 1fr; gap: 30px; }
          .girl-column { min-height: 520px; }
          .about-girl-area { width: min(100%, 500px); }
          .girl-speech { right: -10px; top: 25px; width: 230px; }
          .skills-section { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .about-section { padding: 75px 15px; }
          .about-heading { margin-bottom: 45px; }
          .girl-column { min-height: 430px; }
          .about-girl-area { min-height: 420px; width: 100%; }
          .about-girl-image { width: min(90vw, 350px); max-height: 410px; }
          .girl-speech { top: 0; right: 0; width: min(205px, 57vw); padding: 15px 16px; border-radius: 18px; }
          .girl-speech strong { font-size: 0.78rem; }
          .girl-speech p { font-size: 0.67rem; line-height: 1.45; }
          .speech-header { font-size: 0.7rem; margin-bottom: 5px; }
          .speech-tail { left: auto; right: 25px; top: auto; bottom: -9px; width: 18px; height: 18px; }
          .girl-decoration-one { left: 0; top: 45%; }
          .girl-decoration-two { right: 0; bottom: 15%; }
          .story-card { padding: 25px 22px; border-radius: 23px; }
          .story-card h3 { font-size: 1.6rem; }
          .story-card > p { font-size: 0.85rem; line-height: 1.7; }
          .skills-section { grid-template-columns: 1fr; }
          .skill-box { padding: 22px 18px; }
          .skills-list { justify-content: center; }
          .about-bottom { margin-top: 45px; }
          .about-bottom p { font-size: 0.8rem; text-align: center; }
        }
        @media (max-width: 400px) {
          .girl-column { min-height: 390px; }
          .about-girl-area { min-height: 380px; }
          .about-girl-image { width: 290px; }
          .girl-speech { width: 180px; padding: 12px 13px; }
          .girl-speech strong { font-size: 0.73rem; }
          .girl-speech p { font-size: 0.62rem; }
          .about-skill-chip { font-size: 0.73rem; padding: 8px 10px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-floating-leaves { display: none; }
        }
      `}</style>
    </section>
  );
};

export default About;
