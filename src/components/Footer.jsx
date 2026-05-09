import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--text-light)', fontSize: '0.9rem' }}>
      <div style={{ marginBottom: '20px' }}>
        {[FaInstagram, FaLinkedinIn, FaGithub].map((Icon, index) => (
          <a key={index} href="#" style={{ display: 'inline-flex', width: '40px', height: '40px', background: 'white', color: 'var(--dark-pink)', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', margin: '0 8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', transition: 'all 0.3s' }}>
            <Icon />
          </a>
        ))}
      </div>
      <p>&copy; 2026  Designed with <FaHeart style={{ color: 'var(--dark-pink)', display: 'inline-block', verticalAlign: 'middle' }} /> <span style={{color:"purple"}}>Krishna Sathyan</span></p>
    </footer>
  );
};

export default Footer;