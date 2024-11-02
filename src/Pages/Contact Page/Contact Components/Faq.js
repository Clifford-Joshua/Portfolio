import React from "react";
import FaqTitle from "./FaqTitle";
import Faquestion from "./Faquestion";
import Morequestion from "./Morequestion";
import styled from "styled-components";
const Faq = () => {
  return (
    <Wrapper>
      <FaqTitle />
      <Faquestion />
      <Morequestion />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ======================================== */
  /* Mobile view */
  padding: 0.5rem;
  padding-top: 2rem;

  /* ======================================== */
  /* Ipad view */
  @media screen and (width >= 764px) {
    padding: 1rem;
  }

  /* ======================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 85%;
    margin: auto;
  }
`;
export default Faq;
