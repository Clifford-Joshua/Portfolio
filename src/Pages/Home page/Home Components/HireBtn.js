import React from "react";
import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";
const HireBtn = () => {
  return (
    <Wrapper>
      <button className="hire_btn">
        <p className="hire layout">hire me</p>
        <p className="icon layout">
          <BsArrowUpRight></BsArrowUpRight>
        </p>
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ====================================== */
  /* Mobile View */
  border: 2px solid red;
  .hire_btn {
    color: white;
    display: flex;
    cursor: pointer;
    overflow: hidden;
    height: var(--clr-rem-14);
    font-family: "Roboto", serif;
    background-color: transparent;
    border-radius: var(--clr-rem-9);
    border: 2px solid var(--clr-orange-400);
  }
  .hire_btn:hover {
    border: 2px solid var(--clr-orange);
  }
  .hire_btn:hover .hire {
    background-color: var(--clr-orange);
  }
  .hire_btn:hover .icon {
    color: var(--clr-orange);
  }
  .layout {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hire {
    color: black;
    font-weight: 500;
    width: var(--clr-rem-26);
    text-transform: capitalize;
    background-color: var(--clr-orange-400);
    border-top-right-radius: var(--clr-rem-14);
  }
  .icon {
    width: var(--clr-rem-11);
    color: var(--clr-orange-400);
  }
`;
export default HireBtn;
