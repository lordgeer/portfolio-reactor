import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
  
const Header = () => {
  return (
    <div>
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbarNav">
      <Navbar.Brand href="/">Thomas Musler</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
            <NavDropdown.Item href="/" className="nav-link">About Me</NavDropdown.Item>
            <NavDropdown.Item href="/work" className="nav-link">Work</NavDropdown.Item>
            <NavDropdown.Item href="/contact" className="nav-link">Contact</NavDropdown.Item>
            <NavDropdown.Divider />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    </div>
  );
};

export default Header;