import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <h2 className="title">affordable price for super convenient services</h2>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ==================================================== *
/* Mobile View/ */
  .title {
    font-weight: 750;
    font-size: 1.6rem;
    text-align: center;
    padding-block: 1rem;
    text-transform: capitalize;
    font-family: "Catamaran", serif;
    color: var(--clr-mahogany-golden-yellow);
  }

  /* ==================================================== *
/* Ipad View/ */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.9rem;
    }
  }

  /* ==================================================== *
/* Ipad View/ */
  @media screen and (width >= 1023px) {
    .title {
      display: flex;
      height: 150px;
      font-size: 3rem;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Title;
