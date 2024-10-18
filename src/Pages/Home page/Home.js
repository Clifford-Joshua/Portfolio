import React from "react";
import { HireBtn, Opened, Title } from "./Home Components";
import styled from "styled-components";
const Home = () => {
  return (
    <Wrapper>
      <Title />
      <HireBtn />
      <Opened />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ==================================== */
  /* Mobile View */

  min-height: 100vh;
  padding: 5rem 1rem;
  background: var(--clr-homepage-gradient-img);
  background-size: contain;
  background-position-x: right;

  /* ===================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    padding: 5rem;
  }
`;
export default Home;
