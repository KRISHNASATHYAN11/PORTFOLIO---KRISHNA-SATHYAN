import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Toast from '../ui/Toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setShowToast(true);

    setFormData({
      name: '',
      email: '',
      message: '',
    });

  } catch (error) {
    console.log(error);
    alert('Failed to send message');
  }
};

  return (
    <section id='contact' style={{ padding: '100px 5%' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>Get in Touch</h2>
        <p>Let's create something cute together</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '30px', boxShadow: 'var(--shadow-soft)' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '12px 15px', border: '2px solid #eee', borderRadius: '12px', fontFamily: 'Quicksand' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '12px 15px', border: '2px solid #eee', borderRadius: '12px', fontFamily: 'Quicksand' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{ width: '100%', padding: '12px 15px', border: '2px solid #eee', borderRadius: '12px', fontFamily: 'Quicksand', resize: 'vertical' }}
            ></textarea>
          </div>
          <Button type="submit" primary style={{ width: '100%', justifyContent: 'center' }}>
            Send Message <i className="fas fa-paper-plane"></i>
          </Button>
        </form>
      </div>
      {showToast && <Toast message="Message Sent Successfully!" onClose={() => setShowToast(false)} />}
    </section>
  );
};

export default Contact;