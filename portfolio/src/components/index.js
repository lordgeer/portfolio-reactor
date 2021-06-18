import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
            <h1>Thomas Musler</h1>
          <NavLink to='/bio' activeStyle>
            About Me
          </NavLink>
          <NavLink to='/work' activeStyle>
            My Work
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Me
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;