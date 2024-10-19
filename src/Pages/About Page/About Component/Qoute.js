import React from "react";
import styled from "styled-components";
const Qoute = () => {
  return (
    <Wrapper>
      <h2 className="qoute">
        <q>
          addiction is anything that drains life of meaning while making it seem
          better.
        </q>
      </h2>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ============================= */
  /* Mobile */
  .qoute {
    display: flex;
    min-height: 20vh;
    font-weight: 800;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: "Roboto", serif;
    font-size: var(--clr-font-3);
    letter-spacing: var(--clr-rem-0);
    color: var(--clr-text-ash-steel);
  }

  /* ================================ */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .qoute {
      font-size: var(--clr-font-4);
    }
  }

  /* =============================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .qoute {
      height: 30vh;
      font-size: var(--clr-font-6);
    }
  }
`;
export default Qoute;
