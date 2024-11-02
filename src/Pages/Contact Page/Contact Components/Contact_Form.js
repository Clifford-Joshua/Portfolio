import React from "react";
import Form from "./Form";
import Title from "./Title";
import Adress from "./Adress";
import styled from "styled-components";
const ContactForm = () => {
  return (
    <Wrapper>
      <Title />
      <div className="form_area">
        <Adress />
        <Form />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ============================================ */
  /* Mobile View */
  margin: auto;
  padding-top: 5rem;
  padding-bottom: 2rem;
  clip-path: polygon(
    6% 5%,
    6% 0,
    0 0,
    0 100%,
    20% 100%,
    48% 100%,
    80% 100%,
    100% 100%,
    100% 49%,
    100% 0,
    95% 0,
    94% 5%
  );

  background: var(--clr-contact-bgimge);
  .form_area {
    background-color: var(--clr-light-black-light-gray);
  }

  /* ============================================ */
  /* Ipad View */
  @media screen and (width >= 764px) {
    clip-path: polygon(
      6% 8%,
      6% 0,
      0 0,
      0 100%,
      20% 100%,
      48% 100%,
      80% 100%,
      100% 100%,
      100% 49%,
      100% 0,
      95% 0,
      95% 8%
    );
    .form_area {
      gap: 1rem;
      display: flex;
      padding: 0.5rem;
    }
  }

  /* ============================================ */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    padding-top: 6rem;
    clip-path: polygon(
      25% 11%,
      14% 0,
      0 0,
      0 100%,
      20% 100%,
      48% 100%,
      80% 100%,
      100% 100%,
      100% 49%,
      100% 0,
      89% 0,
      78% 11%
    );

    .form_area {
      width: 85%;
      margin: auto;
      border-radius: 20px;
    }
  }
`;

export default ContactForm;
