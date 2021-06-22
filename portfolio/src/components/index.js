import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import background from "../images/korriban.jpg"
  
const Header = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Thomas Musler</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbarNav">
            <NavDropdown.Item href="/">About Me</NavDropdown.Item>
            <NavDropdown.Item href="/work">Work</NavDropdown.Item>
            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            <NavDropdown.Divider />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    </div>
  );
};

export default Header;