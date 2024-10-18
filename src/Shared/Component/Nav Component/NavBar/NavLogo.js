import React from "react";
import styled from "styled-components";
const NavLogo = () => {
  return (
    <Wrapper>
      <h2 className="Logo_name">clifford</h2>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ===================================== */
  /* Mobile View */
  .Logo_name {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: var(--clr-logo);
    text-transform: uppercase;
    font-family: "Protest Strike", sans-serif;
  }
  /* ==================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .Logo_name {
      font-size: 1.5rem;
    }
  }
`;
export default NavLogo;
