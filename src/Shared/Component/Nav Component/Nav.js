import React from "react";
import styled from "styled-components";
import { NavLogo, NavLinks, Theme, ToggleBtn } from "./NavBar";
const Nav = () => {
  return (
    <Wrapper>
      <nav>
        <NavLogo />
        <NavLinks />
        <Theme />
        <ToggleBtn />
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ================================= */
  /* Mobile View */
  nav {
    width: 100%;
    display: flex;
    padding: 20px 0;
    position: fixed;
    align-items: center;
    justify-content: space-evenly;
    font-family: "Roboto", sans-serif;
  }
`;
export default Nav;
