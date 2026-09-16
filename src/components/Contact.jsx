
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Toast from '../ui/Toast';
import emailjs from '@emailjs/browser';


/* =========================================================
   🍃 FLOATING LEAVES
========================================================= */

const FloatingLeaves = () => {
  const leaves = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        size: 14 + Math.random() * 16,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 7,
        drift: Math.random() * 100 - 50,
        rotate: Math.random() * 360,
      })),
    []
  );

  return (
    <div className="contact-floating-leaves">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="contact-floating-leaf"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
          }}
          initial={{
            y: '-10vh',
            opacity: 0,
            rotate: leaf.rotate,
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
              leaf.rotate,
              leaf.rotate + 120,
              leaf.rotate + 240,
              leaf.rotate + 360,
            ],
            opacity: [0, 0.5, 0.45, 0.25, 0],
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
              stroke="#DDEBCF"
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
   🌿 BOTANICAL DECORATION
========================================================= */

const BotanicalDecor = () => {
  return (
    <div className="botanical-decoration">

      {/* Main left vine */}

      <motion.div
        className="contact-vine contact-vine-left"
        initial={{
          height: 0,
        }}
        whileInView={{
          height: '100%',
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 2,
          ease: 'easeOut',
        }}
      >
        <span className="vine-stem" />

        <motion.span
          className="vine-leaf leaf-a"
          initial={{ scale: 0, rotate: -40 }}
          whileInView={{ scale: 1, rotate: -20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: 'spring' }}
        >
          🍃
        </motion.span>

        <motion.span
          className="vine-leaf leaf-b"
          initial={{ scale: 0, rotate: 30 }}
          whileInView={{ scale: 1, rotate: 15 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: 'spring' }}
        >
          🍃
        </motion.span>

        <motion.span
          className="vine-leaf leaf-c"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, type: 'spring' }}
        >
          🌿
        </motion.span>
      </motion.div>


      {/* Right vine */}

      <motion.div
        className="contact-vine contact-vine-right"
        initial={{
          height: 0,
        }}
        whileInView={{
          height: '100%',
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 2.2,
          delay: 0.2,
          ease: 'easeOut',
        }}
      >
        <span className="vine-stem" />

        <motion.span
          className="vine-leaf leaf-d"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, type: 'spring' }}
        >
          🍃
        </motion.span>

        <motion.span
          className="vine-leaf leaf-e"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, type: 'spring' }}
        >
          🌿
        </motion.span>
      </motion.div>


      {/* Flowers */}

      <motion.span
        className="contact-flower flower-one"
        initial={{
          opacity: 0,
          scale: 0,
          rotate: -30,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 1.1,
          type: 'spring',
          stiffness: 180,
        }}
      >
        🌸
      </motion.span>


      <motion.span
        className="contact-flower flower-two"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 1.4,
          type: 'spring',
        }}
      >
        🌼
      </motion.span>


      <motion.span
        className="contact-flower flower-three"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 1.7,
          type: 'spring',
        }}
      >
        🌷
      </motion.span>

    </div>
  );
};


/* =========================================================
   ☎️ CSS TELEPHONE
========================================================= */

const BotanicalTelephone = () => {
  return (
    <motion.div
      className="telephone-scene"
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      {/* Glow */}

      <motion.div
        className="telephone-glow"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />


      {/* Small message */}

      <motion.div
        className="telephone-message"
        initial={{
          opacity: 0,
          x: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.7,
          duration: 0.6,
        }}
      >
        <span>☎</span>
        Let's talk!
      </motion.div>


      {/* Telephone */}

      <motion.div
        className="telephone"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >

        {/* Phone receiver */}

        <motion.div
          className="phone-receiver"
          animate={{
            rotate: [0, -2, 0, 2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >

          <div className="receiver-left" />

          <div className="receiver-middle" />

          <div className="receiver-right" />

        </motion.div>


        {/* Phone base */}

        <div className="phone-base">

          <div className="phone-dial">

            <div className="dial-center">
              <i className="fas fa-phone" />
            </div>

            <span className="dial-dot dot-1" />
            <span className="dial-dot dot-2" />
            <span className="dial-dot dot-3" />
            <span className="dial-dot dot-4" />
            <span className="dial-dot dot-5" />
            <span className="dial-dot dot-6" />

          </div>

        </div>


        {/* Phone cord */}

        <svg
          className="phone-cord"
          viewBox="0 0 180 100"
        >
          <path
            d="M20 10 C40 80 140 20 160 90"
            fill="none"
            stroke="#315C35"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>

      </motion.div>


      {/* Phone shadow */}

      <div className="telephone-shadow" />

    </motion.div>
  );
};


/* =========================================================
   🌱 CONTACT
========================================================= */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showToast, setShowToast] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setShowToast(true);

    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Message could not be sent. Please try again.");
  }
};

  return (
    <section
      id="contact"
      className="contact-section"
    >

      {/* Background */}

      <div className="contact-background" />

      {/* Floating leaves */}

      <FloatingLeaves />

      {/* Growing botanical decoration */}

      <BotanicalDecor />


      {/* Main content */}

      <div className="contact-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="contact-heading"
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.8,
          }}
        >

          <span className="contact-label">
            <i className="fas fa-leaf" />
            LET'S CONNECT
          </span>

          <h2>
            Get In Touch
          </h2>

          <p>
            Have a project in mind?
            Let's grow something together.
          </p>

          <div className="contact-heading-line">
            <span />
            <i className="fas fa-seedling" />
            <span />
          </div>

        </motion.div>


        {/* =================================================
            CONTACT CONTENT
        ================================================= */}

        <div className="contact-layout">


          {/* =================================================
              TELEPHONE
          ================================================= */}

          <div className="telephone-column">

            <BotanicalTelephone />


            <motion.div
              className="phone-caption"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 1,
              }}
            >
              <span>🌿</span>

              <p>
                Your message is always
                welcome here.
              </p>

              <span>🌿</span>
            </motion.div>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <motion.div
            className="contact-form-wrapper"
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* =================================================
                LEAF BORDER
            ================================================= */}

            <div className="form-leaf form-leaf-1">
              🍃
            </div>

            <div className="form-leaf form-leaf-2">
              🌿
            </div>

            <div className="form-leaf form-leaf-3">
              🍃
            </div>

            <div className="form-flower">
              🌸
            </div>


            {/* =================================================
                FORM CARD
            ================================================= */}

            <div className="contact-form-card">

              <div className="form-top">

                <div className="form-icon">
                  <i className="fas fa-envelope" />
                </div>

                <div>
                  <span>
                    SEND A MESSAGE
                  </span>

                  <h3>
                    Let's talk about your idea.
                  </h3>
                </div>

              </div>


              <form onSubmit={handleSubmit}>

                {/* Name */}

                <div className="form-field">

                  <label htmlFor="contact-name">
                    Name
                  </label>

                  <div className="input-wrapper">

                    <i className="fas fa-user" />

                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      required
                    />

                  </div>

                </div>


                {/* Email */}

                <div className="form-field">

                  <label htmlFor="contact-email">
                    Email
                  </label>

                  <div className="input-wrapper">

                    <i className="fas fa-envelope" />

                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      required
                    />

                  </div>

                </div>


                {/* Message */}

                <div className="form-field">

                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <div className="input-wrapper textarea-wrapper">

                    <i className="fas fa-comment-dots" />

                    <textarea
                      id="contact-message"
                      rows="5"
                      placeholder="Tell me a little about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      required
                    />

                  </div>

                </div>


                {/* Submit */}

                <motion.div
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >

                  <Button
                    type="submit"
                    primary
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                    }}
                  >
                    Send Message

                    <i className="fas fa-paper-plane" />

                  </Button>

                </motion.div>

              </form>

            </div>

          </motion.div>

        </div>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          className="contact-bottom"
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
            delay: 0.4,
          }}
        >

          <span>🌱</span>

          <p>
            Good things grow from good conversations.
          </p>

          <span>🍃</span>

        </motion.div>

      </div>


      {/* Toast */}

      <Toast
        message="Message sent successfully!"
        show={showToast}
      />


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* ==================================================
           SECTION
        ================================================== */

        .contact-section {
          position: relative;

          min-height: 100vh;

          padding:
            clamp(80px, 9vw, 130px)
            20px;

          overflow: hidden;

          background:
            linear-gradient(
              145deg,
              #F7FBF4 0%,
              #E7F3E5 48%,
              #FCFAF5 100%
            );
        }


        .contact-background {
          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            radial-gradient(
              circle at 12% 40%,
              rgba(95,141,78,0.14),
              transparent 25%
            ),
            radial-gradient(
              circle at 88% 55%,
              rgba(151,188,98,0.15),
              transparent 28%
            );
        }


        /* ==================================================
           FLOATING LEAVES
        ================================================== */

        .contact-floating-leaves {
          position: absolute;

          inset: 0;

          overflow: hidden;

          pointer-events: none;

          z-index: 1;
        }


        .contact-floating-leaf {
          position: absolute;

          top: -30px;
        }


        .contact-floating-leaf svg {
          width: 100%;
          height: 100%;

          filter:
            drop-shadow(
              0 4px 7px
              rgba(44,95,45,0.12)
            );
        }


        /* ==================================================
           CONTAINER
        ================================================== */

        .contact-container {
          position: relative;

          z-index: 5;

          max-width: 1100px;

          margin: 0 auto;
        }


        /* ==================================================
           HEADING
        ================================================== */

        .contact-heading {
          text-align: center;

          margin-bottom:
            clamp(55px, 7vw, 80px);
        }


        .contact-label {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: #4F7942;

          font-size: 0.78rem;

          font-weight: 800;

          letter-spacing: 3px;

          margin-bottom: 14px;
        }


        .contact-heading h2 {
          margin: 0;

          color: #243B25;

          font-size:
            clamp(2.3rem, 5vw, 4rem);

          line-height: 1.1;

          font-weight: 800;
        }


        .contact-heading p {
          margin:
            15px 0 0;

          color: #6D786D;

          font-size:
            clamp(0.9rem, 2vw, 1.05rem);
        }


        .contact-heading-line {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          margin-top: 20px;
        }


        .contact-heading-line span {
          width: 45px;

          height: 1px;

          background: #8FBC8F;
        }


        .contact-heading-line i {
          color: #5F8D4E;

          font-size: 0.9rem;
        }


        /* ==================================================
           LAYOUT
        ================================================== */

        .contact-layout {
          display: grid;

          grid-template-columns:
            minmax(350px, 0.85fr)
            minmax(430px, 1.15fr);

          align-items: center;

          gap:
            clamp(40px, 7vw, 90px);
        }


        /* ==================================================
           TELEPHONE COLUMN
        ================================================== */

        .telephone-column {
          position: relative;

          min-height: 520px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;
        }


        /* ==================================================
           TELEPHONE SCENE
        ================================================== */

        .telephone-scene {
          position: relative;

          width: 380px;

          height: 400px;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .telephone-glow {
          position: absolute;

          width: 330px;
          height: 330px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(151,188,98,0.3),
              transparent 68%
            );

          filter: blur(20px);
        }


        /* ==================================================
           PHONE
        ================================================== */

        .telephone {
          position: relative;

          width: 260px;

          height: 280px;

          z-index: 4;
        }


        /* ==================================================
           RECEIVER
        ================================================== */

        .phone-receiver {
          position: absolute;

          top: 15px;

          left: 35px;

          width: 190px;

          height: 75px;

          z-index: 5;
        }


        .receiver-left,
        .receiver-right {
          position: absolute;

          width: 65px;

          height: 70px;

          border-radius:
            30px 30px 18px 18px;

          background:
            linear-gradient(
              145deg,
              #6F9D5C,
              #315C35
            );

          box-shadow:
            0 10px 18px
            rgba(44,95,45,0.2);
        }


        .receiver-left {
          left: 0;

          transform:
            rotate(-18deg);
        }


        .receiver-right {
          right: 0;

          transform:
            rotate(18deg);
        }


        .receiver-middle {
          position: absolute;

          left: 37px;

          top: 25px;

          width: 115px;

          height: 30px;

          border-radius: 20px;

          background:
            #4F7942;
        }


        /* ==================================================
           PHONE BASE
        ================================================== */

        .phone-base {
          position: absolute;

          left: 25px;

          bottom: 25px;

          width: 210px;

          height: 145px;

          border-radius:
            45px 45px 35px 35px;

          background:
            linear-gradient(
              145deg,
              #82AD68,
              #4F7942
            );

          box-shadow:
            0 22px 35px
            rgba(44,95,45,0.22);
        }


        /* ==================================================
           DIAL
        ================================================== */

        .phone-dial {
          position: absolute;

          left: 50%;

          top: 20px;

          transform:
            translateX(-50%);

          width: 105px;

          height: 105px;

          border-radius: 50%;

          background:
            #F5F3E9;

          box-shadow:
            inset 0 3px 8px
            rgba(0,0,0,0.1);
        }


        .dial-center {
          position: absolute;

          left: 50%;

          top: 50%;

          transform:
            translate(-50%, -50%);

          width: 38px;

          height: 38px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            #315C35;

          color:
            white;

          font-size: 0.75rem;
        }


        .dial-dot {
          position: absolute;

          width: 9px;

          height: 9px;

          border-radius: 50%;

          background:
            #6F9D5C;
        }


        .dot-1 {
          top: 15px;

          left: 48px;
        }


        .dot-2 {
          top: 30px;

          right: 18px;
        }


        .dot-3 {
          bottom: 28px;

          right: 17px;
        }


        .dot-4 {
          bottom: 14px;

          left: 48px;
        }


        .dot-5 {
          bottom: 29px;

          left: 18px;
        }


        .dot-6 {
          top: 30px;

          left: 18px;
        }


        /* ==================================================
           PHONE CORD
        ================================================== */

        .phone-cord {
          position: absolute;

          width: 180px;

          height: 100px;

          right: -40px;

          bottom: -15px;

          z-index: 2;
        }


        /* ==================================================
           PHONE SHADOW
        ================================================== */

        .telephone-shadow {
          position: absolute;

          bottom: 20px;

          width: 230px;

          height: 28px;

          border-radius: 50%;

          background:
            rgba(44,95,45,0.15);

          filter: blur(9px);
        }


        /* ==================================================
           PHONE MESSAGE
        ================================================== */

        .telephone-message {
          position: absolute;

          top: 15px;

          right: -10px;

          padding:
            12px 18px;

          border-radius: 18px;

          background:
            white;

          color:
            #315C35;

          font-size: 0.8rem;

          font-weight: 700;

          box-shadow:
            0 12px 30px
            rgba(44,95,45,0.12);

          z-index: 10;
        }


        .telephone-message span {
          margin-right: 6px;
        }


        /* ==================================================
           PHONE CAPTION
        ================================================== */

        .phone-caption {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-top: -20px;

          color: #607060;

          font-size: 0.82rem;

          font-style: italic;
        }


        .phone-caption p {
          margin: 0;
        }


        /* ==================================================
           FORM WRAPPER
        ================================================== */

        .contact-form-wrapper {
          position: relative;

          padding: 18px;

          border-radius: 34px;

          background:
            rgba(151,188,98,0.13);
        }


        /* ==================================================
           FORM CARD
        ================================================== */

        .contact-form-card {
          position: relative;

          padding:
            clamp(25px, 4vw, 40px);

          border-radius: 26px;

          background:
            rgba(255,255,255,0.94);

          box-shadow:
            0 25px 65px
            rgba(44,95,45,0.1);

          backdrop-filter:
            blur(15px);
        }


        /* ==================================================
           FORM HEADER
        ================================================== */

        .form-top {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-bottom: 30px;
        }


        .form-icon {
          flex-shrink: 0;

          width: 50px;

          height: 50px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 16px;

          background:
            rgba(151,188,98,0.15);

          color:
            #4F7942;

          font-size: 1.1rem;
        }


        .form-top span {
          display: block;

          margin-bottom: 4px;

          color:
            #6F9D5C;

          font-size: 0.68rem;

          font-weight: 800;

          letter-spacing: 2px;
        }


        .form-top h3 {
          margin: 0;

          color:
            #29452D;

          font-size:
            clamp(1.15rem, 2vw, 1.4rem);
        }


        /* ==================================================
           FORM FIELD
        ================================================== */

        .form-field {
          margin-bottom: 20px;
        }


        .form-field label {
          display: block;

          margin-bottom: 8px;

          color:
            #3F5942;

          font-size: 0.82rem;

          font-weight: 700;
        }


        /* ==================================================
           INPUT
        ================================================== */

        .input-wrapper {
          position: relative;

          display: flex;

          align-items: center;
        }


        .input-wrapper > i {
          position: absolute;

          left: 15px;

          top: 50%;

          transform:
            translateY(-50%);

          color:
            #7FA06F;

          font-size: 0.85rem;

          z-index: 2;
        }


        .input-wrapper input,
        .input-wrapper textarea {
          width: 100%;

          box-sizing: border-box;

          border:
            2px solid
            #E1ECD9;

          border-radius: 13px;

          outline: none;

          font-family: inherit;

          font-size: 0.88rem;

          color:
            #29452D;

          background:
            #F8FBF5;

          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }


        .input-wrapper input {
          height: 52px;

          padding:
            0 15px 0 44px;
        }


        .input-wrapper textarea {
          min-height: 130px;

          padding:
            15px 15px 15px 44px;

          resize: vertical;
        }


        .input-wrapper textarea + i {
          top: 23px;

          transform: none;
        }


        .input-wrapper input::placeholder,
        .input-wrapper textarea::placeholder {
          color:
            #A0AAA0;
        }


        .input-wrapper input:focus,
        .input-wrapper textarea:focus {
          border-color:
            #6F9D5C;

          background:
            white;

          box-shadow:
            0 0 0 4px
            rgba(111,157,92,0.1);
        }


        /* ==================================================
           LEAF FORM DECORATION
        ================================================== */

        .form-leaf {
          position: absolute;

          z-index: 8;

          font-size: 35px;

          pointer-events: none;
        }


        .form-leaf-1 {
          top: -28px;

          left: 30px;

          transform:
            rotate(-25deg);
        }


        .form-leaf-2 {
          top: 20px;

          right: -20px;

          transform:
            rotate(30deg);
        }


        .form-leaf-3 {
          bottom: 35px;

          left: -24px;

          transform:
            rotate(-35deg);
        }


        .form-flower {
          position: absolute;

          right: 35px;

          bottom: -20px;

          z-index: 8;

          font-size: 34px;
        }


        /* ==================================================
           BOTANICAL VINES
        ================================================== */

        .botanical-decoration {
          position: absolute;

          inset: 0;

          pointer-events: none;

          z-index: 2;
        }


        .contact-vine {
          position: absolute;

          bottom: 0;

          width: 100px;

          overflow: visible;
        }


        .contact-vine-left {
          left: 1%;

          height: 75%;
        }


        .contact-vine-right {
          right: 1%;

          height: 70%;
        }


        .vine-stem {
          position: absolute;

          bottom: 0;

          left: 50%;

          width: 4px;

          height: 100%;

          border-radius: 10px;

          background:
            #5F8D4E;

          transform:
            rotate(
              var(--vine-rotation, 6deg)
            );

          transform-origin: bottom;
        }


        .contact-vine-right .vine-stem {
          transform:
            rotate(-6deg);
        }


        .vine-leaf {
          position: absolute;

          font-size: 32px;
        }


        .leaf-a {
          top: 20%;

          left: 5px;

          transform:
            rotate(-25deg);
        }


        .leaf-b {
          top: 48%;

          right: 0;

          transform:
            rotate(25deg);
        }


        .leaf-c {
          top: 75%;

          left: 10px;
        }


        .leaf-d {
          top: 25%;

          right: 0;

          transform:
            rotate(25deg);
        }


        .leaf-e {
          top: 65%;

          left: 0;

          transform:
            rotate(-25deg);
        }


        /* ==================================================
           FLOWERS
        ================================================== */

        .contact-flower {
          position: absolute;

          font-size: 35px;
        }


        .flower-one {
          left: 7%;

          top: 18%;
        }


        .flower-two {
          right: 7%;

          top: 35%;
        }


        .flower-three {
          right: 4%;

          bottom: 12%;
        }


        /* ==================================================
           BOTTOM
        ================================================== */

        .contact-bottom {
          display: flex;

          justify-content: center;

          align-items: center;

          gap: 12px;

          margin-top: 65px;

          color:
            #607060;
        }


        .contact-bottom p {
          margin: 0;

          font-size: 0.85rem;

          font-style: italic;

          font-weight: 600;
        }


        .contact-bottom span {
          font-size: 20px;
        }


        /* ==================================================
           TABLET
        ================================================== */

        @media (max-width: 950px) {

          .contact-layout {
            grid-template-columns:
              1fr 1fr;

            gap: 30px;
          }


          .telephone-scene {
            transform:
              scale(0.9);
          }


          .telephone-message {
            right: -30px;
          }


          .contact-vine-left {
            left: -35px;
          }


          .contact-vine-right {
            right: -35px;
          }

        }


        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 760px) {

          .contact-section {
            padding:
              75px 15px;
          }


          .contact-layout {
            grid-template-columns: 1fr;

            gap: 20px;
          }


          .telephone-column {
            min-height: 410px;
          }


          .telephone-scene {
            width: 330px;

            height: 360px;

            transform:
              scale(0.9);
          }


          .telephone-message {
            right: -5px;

            top: 5px;
          }


          .contact-form-wrapper {
            margin-top: 10px;

            padding: 12px;

            border-radius: 26px;
          }


          .contact-form-card {
            padding:
              25px 20px;

            border-radius: 21px;
          }


          .contact-vine-left,
          .contact-vine-right {
            opacity: 0.15;
          }


          .contact-vine-left {
            left: -55px;
          }


          .contact-vine-right {
            right: -55px;
          }


          .contact-flower {
            opacity: 0.35;
          }


          .contact-bottom {
            margin-top: 45px;
          }

        }


        /* ==================================================
           SMALL PHONES
        ================================================== */

        @media (max-width: 420px) {

          .telephone-column {
            min-height: 350px;
          }


          .telephone-scene {
            width: 280px;

            height: 320px;

            transform:
              scale(0.78);
          }


          .telephone-message {
            right: -15px;

            font-size: 0.7rem;

            padding:
              9px 12px;
          }


          .phone-caption {
            margin-top: -45px;

            font-size: 0.74rem;
          }


          .form-top h3 {
            font-size: 1rem;
          }


          .form-top span {
            font-size: 0.6rem;
          }


          .contact-form-card {
            padding:
              22px 17px;
          }


          .form-leaf {
            font-size: 27px;
          }


          .form-flower {
            font-size: 27px;
          }


          .contact-bottom p {
            font-size: 0.75rem;

            text-align: center;
          }

        }


        /* ==================================================
           REDUCED MOTION
        ================================================== */

        @media (prefers-reduced-motion: reduce) {

          .contact-floating-leaves {
            display: none;
          }

          .telephone {
            animation: none;
          }

          .telephone-glow {
            animation: none;
          }

        }

      `}</style>

    </section>
  );
};

export default Contact;

