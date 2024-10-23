import React from "react";
import styled from "styled-components";
import { Bio, Qoute, Profile } from "./About Component";
const About = () => {
  return (
    <Wrapper>
      <Qoute />
      <div className="about_container">
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

  .about_container {
    display: flex;
    gap: var(--clr-rem-8);
    flex-direction: column;
  }
  /* ============================ */
  /* Ipad View */
  @media screen and (width >= 764px) {
    padding: 5rem 2.5rem;

    .about_container {
      flex-direction: row;
    }
  }

  /* ============================== */
  /* Desktop View */
  @media screen and (width>=1023px) {
    padding: 5rem;
    .about_container {
      gap: var(--clr-rem-14);
    }
  }
`;
export default About;
