import React from "react";
import styled from "styled-components";
import NavbgChanger from "../../Utilities/Functionality/NavbgChanger";
import { NavLogo, NavLinks, Theme, ToggleBtn } from "./NavBar";
const Nav = () => {
  NavbgChanger();
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
    z-index: 22;
    display: flex;
    padding: 20px 0;
    position: fixed;
    align-items: center;
    justify-content: space-evenly;
    font-family: "Roboto", sans-serif;
  }
`;
export default Nav;
