import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () =>
  <>
    <Navbar collapseOnSelect="true" fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" exact>My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/" eventKey="1" exact>Home</Nav.Link>
            <NavDropdown data-bs-theme="dark" title="Games" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/item1" eventKey="2">Bending Arena</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/item2" eventKey="3">Labyrinth 3</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/item3" eventKey="4">Fates: Battle Royale</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/aboutme" eventKey="5">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="pb-5" />
  </>;

export default Navigation;
