// src/components/Footer.jsx
import React from 'react';
import { Layout } from 'antd';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="footer">
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/kinjaljoshi-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/kinjal.codes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:kinjaljoshi.dev@gmail.com"
          aria-label="Gmail"
        >
          <FaEnvelope />
        </a>
      </div>
      <div style={{ marginTop: '10px' }}>
        © 2025 Kinjal Joshi | Designed with ❤️ by Kinjal
      </div>
    </Footer>
  );
};

export default CustomFooter;
