import React from "react";
import styled from "styled-components";
import { FaSnowflake } from "react-icons/fa";
const Opened = () => {
  return (
    <Wrapper>
      <h2 className="opened">
        open to work
        <span className="icon ms-3">
          <FaSnowflake />
        </span>
      </h2>
      <p className="sub_text">Based in nigeria</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* =========================== */
  /* Mobile View */
  right: 5%;
  bottom: 4%;
  color: white;
  position: absolute;
  font-family: "Roboto", serif;
  .opened {
    display: flex;
    text-transform: uppercase;
    font-size: var(--clr-rem-10);
    color: var(--clr-text-azure-Apricot);
    text-shadow: 3px 3px black;
  }
  .icon {
    color: var(--clr-text-aqua-gold);
    font-size: var(--clr-rem-9);
  }
  .sub_text {
    color: var(--clr-text-aqua-gold);
    font-size: var(--clr-rem-8);
  }

  /* ============================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .opened {
      font-size: var(--clr-rem-12);
    }
    .icon {
      font-size: var(--clr-rem-11);
    }
    .sub_text {
      font-size: var(--clr-rem-10);
    }
  }

  /* ============================ */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    :is(.icon, .sub_text) {
      text-shadow: 3px 3px black;
    }
  }
`;
export default Opened;
