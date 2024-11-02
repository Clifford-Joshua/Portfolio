import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

import styled from "styled-components";
const Form = () => {
  return (
    <Wrapper>
      <form className="form">
        <div className="user_detail_area_container">
          <input
            type="text"
            name=""
            id=""
            className="input_name"
            placeholder="your name"
          />
          <input
            type="text"
            name=""
            id=""
            className="input_name"
            placeholder="your email"
          />
          <input
            type="text"
            name=""
            id=""
            className="input_name"
            placeholder="phone number"
          />
          <input
            type="text"
            name=""
            id=""
            className="input_name"
            placeholder="subject"
          />
        </div>
        <textarea
          name="message"
          id=""
          className="message"
          placeholder="message"
        ></textarea>
        <button className="submit_btn" type="submit">
          <p className="submit layout">submit</p>
          <p className="icon layout">
            <BsArrowUpRight></BsArrowUpRight>
          </p>
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ======================================== */
  /* Mobile View */
  font-family: "Catamaran", serif;
  .form {
    gap: 1rem;
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
  }
  .user_detail_area_container {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
  .input_name {
    width: 100%;
    height: 50px;
    padding: 1rem;
    outline: none;
    font-size: 1rem;
    border-radius: 6px;
    text-transform: capitalize;
    background-color: transparent;
    color: var(--clr-text-black-white);
    border: 1px solid var(--clr-black-lightgray);
  }
  .input_name:focus {
    outline: none;
    border: 1px solid blue;
  }
  .message {
    padding: 1rem;
    outline: none;
    font-size: 1rem;
    min-height: 30vh;
    border-radius: 6px;
    text-transform: capitalize;
    background-color: transparent;
    color: var(--clr-text-black-white);
    border: 1px solid var(--clr-black-lightgray);
  }
  .submit_btn {
    width: 80%;
    margin: auto;
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
  .submit_btn:hover {
    border: 2px solid var(--clr-orange);
  }
  .submit_btn:hover .submit {
    color: var(--clr-white);
    background-color: var(--clr-orange);
  }
  .submit_btn:hover .icon {
    color: var(--clr-orange);
  }
  .layout {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .submit {
    width: 80%;
    color: black;
    font-weight: 500;
    text-transform: capitalize;
    background-color: var(--clr-orange-400);
    border-top-right-radius: var(--clr-rem-14);
  }
  .icon {
    font-size: 1.5rem;
    color: var(--clr-orange-400);
  }

  /* ========================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    width: 55%;
    .message {
      min-height: 20vh;
    }
    .submit_btn {
      width: 60%;
      height: var(--clr-rem-13);
    }
  }

  /* ========================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .message {
      min-height: 35vh;
    }
  }
`;
export default Form;
