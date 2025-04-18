import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomFooter from './components/Footer';

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Navbar />
      <Content>
        <section id="home" className="section"><Home /></section>
        <section id="about" className="section"><About /></section>
        <section id="skills" className="section"><Skills /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="contact" className="section"><Contact /></section>
      </Content>
      <CustomFooter/>
    </Layout>
  );
}

export default App;
