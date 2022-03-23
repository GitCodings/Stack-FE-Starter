import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

  width: calc(100vw - 10px);
  height: 50px;
  padding: 5px;

  background-color: var(--detail-color);
`;

const StyledNavLink = styled(NavLink)`
  padding: 10px;
  font-size: 25px;
  color: var(--detail-font-color);
  text-decoration: none;
`;

const NavBar = () => {
    return (
        <StyledNav>
            <StyledNavLink to="/login">
                Login
            </StyledNavLink>
        </StyledNav>
    );
}

export default NavBar;
