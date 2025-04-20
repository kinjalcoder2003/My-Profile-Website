// src/components/Footer.jsx
import React from 'react';
import { Layout } from 'antd';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="footer">
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/kinjal-joshi-73621735a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/kinjalcoder2003"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:kinjal.coder@gmail.com"
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
