import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { HeaderContainer, Nav, NavLink, Logo } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo as={Link} to="/">
        Fyke
      </Logo>
      <Nav>
        <NavLink as={Link} to="/">
          Home
        </NavLink>
        <NavLink as={Link} to="/contact">
          Contact
        </NavLink>
      </Nav>
      <Cart></Cart>
    </HeaderContainer>
  );
};

export default Header;
