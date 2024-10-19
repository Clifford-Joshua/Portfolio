import React from "react";
import styled from "styled-components";
import { Bio, Qoute, Profile } from "./About Component";
const About = () => {
  return (
    <Wrapper>
      <Qoute />
      <div>
        <Profile />
        <Bio />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ============================= */
  /* Mobile View */
  padding: 5rem 1rem;
  min-height: 100vh;
  background-color: var(--clr-bgColor);

  /* ============================ */
  /* Ipad View */
  @media screen and (width >= 764px) {
    padding: 5rem 2.5rem;
  }

  /* ============================== */
  /* Desktop View */
  @media screen and (width>=1023px) {
    padding: 5rem;
  }
`;
export default About;
