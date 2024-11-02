import React from "react";
import styled from "styled-components";
const FaqTitle = () => {
  return (
    <Wrapper>
      <h1 className="title">Faqs</h1>
      <p className="sub_title">
        Everything you need to know about the product and billing.Can't find the
        answear you're looking for? please message me.
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* =========================================== */
  /* Mobile View */
  font-family: "Roboto", serif;
  .title {
    height: 60px;
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: var(--clr-text-black-white);
  }
  .sub_title {
    font-size: 0.9rem;
    color: var(--clr-text-ash-steel);
  }

  /* =========================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-weight: 700;
      font-size: 1.7rem;
      justify-content: left;
    }
    .sub_title {
      font-size: 1rem;
    }
  }

  /* =========================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .title {
      font-size: 2rem;
    }
  }
`;
export default FaqTitle;
