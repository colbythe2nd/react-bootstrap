import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () =>
  <Navbar className="blue-navbar">
    {/* "Link" in brand component since just redirect is needed */}
    <Navbar.Brand as={NavLink} to="/">My Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
        <NavDropdown title="Games" id="basic-nav-dropdown">
          <NavDropdown.Item as={NavLink} to="/item1">Item 1</NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/item2">Item 2</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="About Me" id="basic-nav-dropdown">
          <NavDropdown.Item as={NavLink} to="/item3">Item 1</NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/item5">Item 2</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

export default Navigation;
