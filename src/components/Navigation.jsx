import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () =>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Games" id="basic-nav-dropdown">
          <NavDropdown.Item href="#games/1">Item 1</NavDropdown.Item>
          <NavDropdown.Item href="#games/2">Item 2</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="About Me" id="basic-nav-dropdown">
          <NavDropdown.Item href="#about/1">Item 1</NavDropdown.Item>
          <NavDropdown.Item href="#about/2">Item 2</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

export default Navigation;
