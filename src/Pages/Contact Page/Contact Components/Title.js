import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <h2 className="title">contact me</h2>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ======================================== */
  /* Mobile View */
  .title {
    color: white;
    padding: 1rem;
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
    font-family: "Catamaran", serif;
  }

  /* ======================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: 2.3rem;
    }
  }

  /* ======================================== */
  /* desktop View */
  @media screen and (width >= 1023px) {
    .title {
      font-size: 2.5rem;
      text-transform: uppercase;
    }
  }
`;
export default Title;
