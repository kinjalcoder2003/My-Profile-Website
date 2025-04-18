import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="about-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let me introduce myself
        </motion.p>

        <div className="about-cards">
          <motion.div
            className="about-card"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>Personal Bio</h2>
            <p>
              I’m <strong className='strong'>Kinjal Joshi</strong>, a Web Developer with a passion for clean, modern interfaces.
              I specialize in <strong>React.js</strong> for front-end development and have experience with
              <strong> Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong> for backend systems.
              I build responsive, scalable applications using the MERN stack.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>Timeline</h2>
            <ul>
              <li>2024: Started learning HTML, CSS & JavaScript</li>
              <li>2025: Built projects with React & Node.js</li>
              <li>2025: Advanced MERN stack developer</li>
              <li>Future: Continue growing as a Full-stack Developer</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
