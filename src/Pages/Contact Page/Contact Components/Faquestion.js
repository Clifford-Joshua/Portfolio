import React from "react";
import styled from "styled-components";
import { LocalData } from "../../../Shared/Utilities/LocalData";
const Faquestion = () => {
  const { FQA } = LocalData;
  console.log(FQA);

  return (
    <Wrapper>
      {FQA.map(({ question, answear }, index) => {
        return (
          <div className="questions_container" key={index}>
            <h2 className="question">{question}</h2>
            <p className="answear">{answear}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* =========================================== */
  /* Mobile View */
  gap: 1rem;
  display: grid;
  padding-block: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .question {
    font-size: 1.1rem;
    text-transform: capitalize;
    font-family: "Roboto Slab", serif;
    color: var(--clr-text-black-white);
  }
  .answear {
    font-size: 0.95rem;
    text-transform: lowercase;
    font-family: "Catamaran", serif;
    color: var(--clr-text-ash-steel);
  }

  /* ======================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .question {
      font-size: 1.3rem;
    }
    .answear {
      font-size: 1rem;
    }
  }

  /* ======================================== */
  /* desktop View */
  @media screen and (width >= 1023px) {
    .question {
      font-size: 1.2rem;
    }
    .answear {
      font-size: 0.8rem;
    }
  }
`;
export default Faquestion;
