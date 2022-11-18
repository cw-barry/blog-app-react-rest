import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { AppContext } from '../context/AppContext';

const NavbarItem = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { userInfo, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const toggleNavbar = () => setCollapsed(!collapsed);

  const pages = [
    {
      title: 'Dasboard',
      link: '/',
      display: true,
    },
    {
      title: 'Create New Post',
      link: '/post/create',
      display: true,
    },
    {
      title: 'My Profile',
      link: '/profile/',
      display: true,
    },
    {
      title: 'Login',
      link: '/auth/login',
      display: userInfo ? false : true,
    },
    {
      title: 'Register',
      link: '/auth/register',
      display: userInfo ? false : true,
    },
    {
      title: 'Logout',
      display: userInfo ? true : false,
      handler: () => {
        logout(navigate);
      },
    },
  ];

  return (
    <div className="bg-secondary">
      <Navbar color="faded" className="container" light expand="md">
        <NavbarBrand href="/" className="me-auto fs-3 text text-white">
          Blog App
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2 bg-white" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            {pages
              .filter((item) => item.display)
              .map((item, idx) => (
                <NavItem key={idx}>
                  <NavLink
                    className="text-white"
                    href={item.link}
                    onClick={item?.handler}
                  >
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarItem;
