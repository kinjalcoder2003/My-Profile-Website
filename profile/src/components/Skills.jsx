import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  GithubOutlined,
  AppstoreOutlined,
  ApiOutlined,
  CodeOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons';


const { Meta } = Card;

const Skills = () => {
  const skills = [
    {
      title: 'React.js',
      description: 'Frontend library for building UI',
      icon: <CodeOutlined />,
    },
    {
      title: 'Git & GitHub',
      description: 'Version control and collaboration',
      icon: <GithubOutlined />,
    },
    {
      title: 'Node.js',
      description: 'JavaScript runtime for backend',
      icon: <AppstoreOutlined />,
    },
    {
      title: 'REST APIs',
      description: 'Building RESTful services',
      icon: <ApiOutlined />,
    },
    {
      title: 'CSS',
      description: 'Styling and layout of web pages',
      icon: <DeploymentUnitOutlined />,
    },
    {
      title: 'Express.js',
      description: 'Backend framework for Node.js',
      icon: <AppstoreOutlined />,
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title"> Technical Skills</h2>
      <Row gutter={[16, 16]} justify="center">
        {skills.map((skill, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card className="skill-card" hoverable>
              <div className="skill-icon">{skill.icon}</div>
              <Meta title={skill.title} description={skill.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Skills;
