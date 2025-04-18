import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home-container"
      id="home-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="hi-text">Hi,</span>
          <span className="welcome-text">Welcome</span>
        </h1>

        <p className="intro-role">
          I'm Kinjal Joshi,<br />
          Frontend Developer | MERN Stack Enthusiast
        </p>

        <p className="hero-description">
          Shaping functional, beautiful web experiences using React, Node.js and more. Bridging the gap between design, development, and user needs.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">See My Work</a>
          <a href="#contact" className="btn btn-outline">Let's Connect</a>
        </div>

        <a
          href="/path/to/kinjal_Joshi_Resume.pdf"
          className="resume-link"
          download="Kinjal_Joshi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
