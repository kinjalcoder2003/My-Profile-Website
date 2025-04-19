// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { Link } from 'react-scroll';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const navItems = [
    { key: '1', label: 'Home', to: 'home' },
    { key: '2', label: 'About', to: 'about' },
    { key: '3', label: 'Skills', to: 'skills' },
    { key: '4', label: 'Projects', to: 'projects' },
    { key: '5', label: 'Contact', to: 'contact' },
  ];

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {navItems.map((item) => (
            <Menu.Item key={item.key}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
              >
                {item.label}
              </Link>
            </Menu.Item>
          ))}
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
        open={visible}
        width="200px"
        className="drawer"
      >
        <Menu
          className="drawer-menu"
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
          style={{ border: 'none' }}
        >
          {navItems.map((item) => (
            <Menu.Item key={item.key}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                onClick={onClose}
              >
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
