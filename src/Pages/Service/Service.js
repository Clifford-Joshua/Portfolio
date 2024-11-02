import React from "react";
import styled from "styled-components";
import { Title, Image, Works, Technologies } from "./Service Component";
const Service = () => {
  return (
    <Wrapper>
      <Title />
      <div className="service_container">
        <Image />
        <Works />
      </div>
      <Technologies />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ======================================== */
  /* Mobile View */
  min-height: 100vh;
  padding: 5rem 1rem;
  background-color: var(--clr-bgColor);
  .service_container {
    gap: 2rem;
  }

  /* ======================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .service_container {
      display: flex;
    }
  }
`;
export default Service;
