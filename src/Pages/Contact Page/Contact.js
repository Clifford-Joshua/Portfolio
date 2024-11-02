import React from "react";
import { ContactForm } from "./Contact Components";
import Faq from "./Contact Components/Faq";
import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <ContactForm />
      <Faq />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: var(--clr-bgColor);
`;
export default Contact;
