import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <h2 className="title">full-stack developer</h2>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ============================= */
  /* Moobile View */
  display: flex;
  min-height: 50vh;
  align-items: center;
  .title {
    text-transform: capitalize;
    font-size: var(--clr-font-13);
    letter-spacing: var(--clr-rem-1);
    color: var(--clr-text-black-white);
    font-family: "Protest Strike", serif;
  }

  /* ============================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: var(--clr-font-19);
    }
  }

  /* ================================ */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    padding-right: 10rem;
    .title {
      font-size: var(--clr-font-21);
    }
  }
`;
export default Title;
