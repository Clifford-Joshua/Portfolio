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
  display: flex;
  min-height: 50vh;
  align-items: center;
  border: 2px solid blue;
  .title {
    text-transform: capitalize;
    font-size: var(--clr-font-13);
    letter-spacing: var(--clr-rem-1);
    color: var(--clr-text-black-white);
    font-family: "Protest Strike", serif;
  }
`;
export default Title;
