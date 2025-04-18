import React from 'react';

const projects = [
  {
    title: 'Digital Twin Life Simulator',
    description:
      'AI-powered life simulator with predictions for career, health, finance, and relationships using modern tech stack.',
    link: 'https://github.com/kinjalcoder2003',
  },
  {
    title: 'Profile Website Builder',
    description:
      'Drag-and-drop React app to create and publish custom personal websites. Built with Zustand, Ant Design, and Express.',
    link: 'https://github.com/kinjalcoder2003',
  },
  {
    title: 'Healthcare Provider Dashboard',
    description:
      'A dashboard for hospitals and labs with secure messaging, EHR, appointment management, and patient query resolution.',
    link: 'https://github.com/kinjalcoder2003',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h6>{project.title}</h6>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
