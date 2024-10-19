import React from "react";
import { FaBars } from "react-icons/fa6";
import styled from "styled-components";
import { useGlobalContent } from "../../../Use Context/useContext";
const ToggleBtn = () => {
  const { setOpenNav } = useGlobalContent();

  return (
    <Wrapper>
      <p>
        <FaBars className="Open_Nav_Btn" onClick={() => setOpenNav(true)} />
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ================================= */
  /* Mobile View */
  .Open_Nav_Btn {
    font-size: 1.2rem;
    color: var(--clr-navtoggle-navy-black);
  }
  /* ================================= */
  /* Ipad View */
  @media screen and (width>= 764px) {
    .open_Nav_Btn {
      font-size: 1.5rem;
    }
  }
  /* ================================= */
  /* Desktop View */
  @media screen and (width>=1023px) {
    display: none;
  }
`;
export default ToggleBtn;
