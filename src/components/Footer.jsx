import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import Icon from "../ui/Icon";

/* =========================================================
   FOOTER - Accessible social links with descriptive labels
   ========================================================= */
const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Thanks for visiting! 💚",
    "Let's grow together! 🌱",
    "See you again! 😊",
    "Keep creating! ✨",
  ];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length, shouldReduceMotion]);

  return (
    <footer className="animated-footer" role="contentinfo">
      <div className="footer-vine" aria-hidden="true">
        <span className="vine-line" />
        <span className="vine-leaf vine-leaf-left">🍃</span>
        <span className="vine-leaf vine-leaf-right">🍃</span>
      </div>

      <div className="footer-container">
        <motion.div
          className="leaf-character-area"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          <motion.div
            key={messageIndex}
            className="leaf-message"
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {messages[messageIndex]}
            <span className="message-tail" />
          </motion.div>

          <motion.div
            className="leaf-character"
            animate={shouldReduceMotion ? {} : { y: [0, -7, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="leaf-body">
              <div className="leaf-vein" />
              <div className="leaf-face">
                <motion.span className="leaf-eye eye-left" aria-hidden="true"
                  animate={shouldReduceMotion ? {} : { scaleY: [1, 1, 1, 0.1, 1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.42, 0.46, 0.49, 0.53, 1] }} />
                <motion.span className="leaf-eye eye-right" aria-hidden="true"
                  animate={shouldReduceMotion ? {} : { scaleY: [1, 1, 1, 0.1, 1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.42, 0.46, 0.49, 0.53, 1] }} />
                <span className="leaf-blush blush-left" />
                <span className="leaf-blush blush-right" />
                <motion.span className="leaf-mouth" aria-hidden="true"
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
              </div>
            </div>

            <motion.div className="leaf-arm leaf-arm-left" aria-hidden="true"
              animate={shouldReduceMotion ? {} : { rotate: [-10, -25, -10] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
              <span className="leaf-hand">✋</span>
            </motion.div>

            <motion.div className="leaf-arm leaf-arm-right" aria-hidden="true"
              animate={shouldReduceMotion ? {} : { rotate: [15, 35, 15] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}>
              <span className="leaf-hand">👋</span>
            </motion.div>

            <motion.div className="leaf-leg leaf-leg-left" aria-hidden="true"
              animate={shouldReduceMotion ? {} : { rotate: [-3, 3, -3] }}
              transition={{ duration: 1.2, repeat: Infinity }} />
            <motion.div className="leaf-leg leaf-leg-right" aria-hidden="true"
              animate={shouldReduceMotion ? {} : { rotate: [3, -3, 3] }}
              transition={{ duration: 1.2, repeat: Infinity }} />
            <span className="leaf-foot foot-left" />
            <span className="leaf-foot foot-right" />
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="footer-small-title">LET'S STAY CONNECTED</span>
          <h2>Keep in touch<span aria-hidden="true"> 🌿</span></h2>
          <p>Have an idea, opportunity, or just want to say hello?</p>
        </motion.div>

        {/* SOCIAL LINKS - Descriptive aria-labels */}
        <motion.nav
          className="footer-socials"
          aria-label="Social media links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {resumeData.socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target={social.url.startsWith('http') ? "_blank" : undefined}
              rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
              aria-label={`Visit Krishna Sathyan's ${social.name}${social.name === 'Email' ? ' - krishnasathyan11@gmail.com' : ''}`}
              className="footer-social"
              whileHover={{ y: -7, rotate: 5, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <Icon name={social.icon} />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </motion.nav>

        <div className="footer-decoration" aria-hidden="true">
          <span /><Icon name="leaf" /><span />
        </div>

        <motion.p
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          © {new Date().getFullYear()} {resumeData.name}. Designed with
          <Icon name="heart" />& Code.
        </motion.p>

        <motion.div
          className="footer-final-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span aria-hidden="true">🌱</span>
          <span>Built with curiosity & creativity.</span>
          <span aria-hidden="true">🍃</span>
        </motion.div>
      </div>

      <style>{`
        .animated-footer { position: relative; overflow: hidden; padding: 70px 20px 30px; color: var(--white); background: linear-gradient(160deg, #1E4023 0%, #28552C 45%, #17351D 100%); text-align: center; }
        .animated-footer::before { content: ''; position: absolute; width: 450px; height: 450px; top: -250px; left: -180px; border-radius: 50%; background: rgba(151,188,98,0.12); filter: blur(60px); pointer-events: none; }
        .animated-footer::after { content: ''; position: absolute; width: 350px; height: 350px; bottom: -220px; right: -120px; border-radius: 50%; background: rgba(111,157,92,0.12); filter: blur(60px); pointer-events: none; }
        .footer-container { position: relative; z-index: 5; max-width: 900px; margin: 0 auto; }
        .footer-vine { position: absolute; top: 10px; left: 50%; width: 300px; height: 50px; transform: translateX(-50%); opacity: 0.5; pointer-events: none; }
        .vine-line { position: absolute; top: 25px; left: 0; width: 100%; height: 2px; border-radius: 50%; background: #8FBC8F; transform: rotate(-2deg); }
        .vine-leaf { position: absolute; font-size: 25px; animation: vineFloat 3s ease-in-out infinite; }
        .vine-leaf-left { left: 25px; top: 5px; transform: rotate(-25deg); }
        .vine-leaf-right { right: 25px; top: 18px; transform: rotate(25deg); }
        @keyframes vineFloat { 0%, 100% { transform: translateY(0) rotate(-15deg); } 50% { transform: translateY(-5px) rotate(5deg); } }
        .leaf-character-area { position: relative; width: 230px; height: 230px; margin: 0 auto 20px; display: flex; justify-content: center; align-items: flex-end; }
        .leaf-message { position: absolute; top: 0; right: -120px; width: 190px; padding: 12px 15px; border-radius: 18px; background: var(--white); color: #315C35; font-size: 0.8rem; font-weight: 700; line-height: 1.4; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
        .message-tail { position: absolute; bottom: -9px; left: 30px; width: 18px; height: 18px; background: var(--white); transform: rotate(45deg); }
        .leaf-character { position: relative; width: 145px; height: 190px; }
        .leaf-body { position: absolute; left: 20px; top: 15px; width: 105px; height: 125px; border-radius: 100% 0 100% 0; background: linear-gradient(135deg, #9CCB68 0%, #6FA34F 45%, #4F7942 100%); transform: rotate(-45deg); box-shadow: inset -8px -10px 15px rgba(30,70,35,0.15), 0 12px 25px rgba(0,0,0,0.18); }
        .leaf-vein { position: absolute; width: 110px; height: 3px; top: 65px; left: -2px; background: rgba(255,255,255,0.35); border-radius: 20px; transform: rotate(45deg); }
        .leaf-vein::before, .leaf-vein::after { content: ''; position: absolute; width: 35px; height: 2px; background: rgba(255,255,255,0.25); border-radius: 20px; }
        .leaf-vein::before { top: -10px; left: 35px; transform: rotate(-30deg); }
        .leaf-vein::after { top: 10px; left: 50px; transform: rotate(30deg); }
        .leaf-face { position: absolute; left: 23px; top: 38px; width: 65px; height: 60px; transform: rotate(45deg); }
        .leaf-eye { position: absolute; top: 15px; width: 12px; height: 16px; border-radius: 50%; background: #203223; box-shadow: inset 3px 3px 0 rgba(255,255,255,0.8); }
        .eye-left { left: 12px; }
        .eye-right { right: 12px; }
        .leaf-blush { position: absolute; top: 35px; width: 12px; height: 7px; border-radius: 50%; background: rgba(255,145,145,0.55); }
        .blush-left { left: 2px; }
        .blush-right { right: 2px; }
        .leaf-mouth { position: absolute; left: 27px; top: 34px; width: 13px; height: 9px; border-radius: 0 0 50% 50%; background: #263827; }
        .leaf-arm { position: absolute; top: 100px; width: 35px; height: 7px; border-radius: 10px; background: #5F8D4E; transform-origin: right center; z-index: 5; }
        .leaf-arm-left { left: -4px; transform: rotate(-15deg); }
        .leaf-arm-right { right: -3px; transform-origin: left center; transform: rotate(20deg); }
        .leaf-hand { position: absolute; font-size: 20px; top: -12px; }
        .leaf-arm-left .leaf-hand { left: -18px; transform: rotate(-15deg); }
        .leaf-arm-right .leaf-hand { right: -20px; transform: rotate(10deg); }
        .leaf-leg { position: absolute; top: 135px; width: 7px; height: 35px; border-radius: 10px; background: #315C35; transform-origin: top; }
        .leaf-leg-left { left: 58px; }
        .leaf-leg-right { left: 82px; }
        .leaf-foot { position: absolute; top: 165px; width: 25px; height: 8px; border-radius: 50%; background: #203D25; }
        .foot-left { left: 42px; transform: rotate(-10deg); }
        .foot-right { left: 77px; transform: rotate(10deg); }
        .footer-heading { margin-top: 5px; }
        .footer-small-title { display: block; margin-bottom: 10px; color: #A8C98A; font-size: 0.72rem; font-weight: 800; letter-spacing: 3px; }
        .footer-heading h2 { margin: 0; font-size: clamp(1.8rem, 4vw, 2.6rem); color: var(--white); }
        .footer-heading h2 span { display: inline-block; animation: leafSway 2.5s ease-in-out infinite; }
        @keyframes leafSway { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(10deg); } }
        .footer-heading p { margin: 12px 0 25px; color: rgba(255,255,255,0.68); font-size: 0.85rem; }
        .footer-socials { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 30px; }
        .footer-social { width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: var(--white); background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.12); text-decoration: none; font-size: 1rem; transition: background 0.3s ease, color 0.3s ease; }
        .footer-social:hover { background: var(--white); color: #315C35; }
        .footer-decoration { display: flex; align-items: center; justify-content: center; gap: 10px; margin: 10px 0 20px; }
        .footer-decoration span { width: 70px; height: 1px; background: rgba(255,255,255,0.18); }
        .footer-decoration .portfolio-icon { color: #9BC477; font-size: 0.8rem; }
        .footer-copyright { margin: 0; color: rgba(255,255,255,0.65); font-size: 0.78rem; }
        .footer-copyright .portfolio-icon { margin: 0 5px; color: #9BC477; animation: heartbeat 1.5s ease-in-out infinite; }
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.25); } }
        .footer-final-message { display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 14px; color: rgba(255,255,255,0.42); font-size: 0.7rem; letter-spacing: 0.5px; }
        @media (max-width: 850px) { .leaf-message { right: -70px; } }
        @media (max-width: 600px) {
          .animated-footer { padding: 60px 15px 25px; }
          .leaf-character-area { width: 250px; height: 225px; }
          .leaf-message { top: 0; right: -15px; width: 170px; font-size: 0.72rem; padding: 10px 12px; }
          .leaf-character { transform: scale(0.9); }
          .footer-vine { width: 230px; }
          .footer-heading h2 { font-size: 1.8rem; }
          .footer-heading p { padding: 0 20px; line-height: 1.6; }
          .footer-final-message { flex-wrap: wrap; }
        }
        @media (max-width: 400px) {
          .leaf-character-area { width: 220px; height: 215px; }
          .leaf-message { right: -25px; width: 155px; font-size: 0.68rem; }
          .leaf-character { transform: scale(0.82); }
          .footer-small-title { font-size: 0.65rem; letter-spacing: 2px; }
          .footer-social { width: 42px; height: 42px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .leaf-character, .leaf-arm, .footer-heading h2 span, .footer-copyright .portfolio-icon, .vine-leaf { animation: none !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
