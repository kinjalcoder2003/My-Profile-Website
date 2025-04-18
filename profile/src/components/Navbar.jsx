import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { Link } from 'react-scroll';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // Handle drawer visibility
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="about" smooth={true} duration={500}>About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </Menu.Item>
        </Menu>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="mobile-menu">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          style={{ color: 'white' }}
        />
      </div>

      {/* Drawer Sidebar for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="200px"
      >
        <Menu
        className="drawer-menu"  
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
          style={{ border: 'none' }}
        >
          <Menu.Item key="1">
            <Link to="home" smooth={true} duration={500} onClick={onClose}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="about" smooth={true} duration={500} onClick={onClose}>About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="skills" smooth={true} duration={500} onClick={onClose}>Skills</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="projects" smooth={true} duration={500} onClick={onClose}>Projects</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="contact" smooth={true} duration={500} onClick={onClose}>Contact</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
