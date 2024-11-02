import React from "react";
import styled from "styled-components";
const Morequestion = () => {
  return (
    <Wrapper>
      <div className="more_questions">
        <h2 className="title">Still have questions ?</h2>
        <p className="sub_title">
          Can't find the answer you're looking for ? Please message me.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ======================================== */
  /* Mobile View */
  font-family: "Catamaran", serif;
  .more_questions {
    padding: 1rem;
    border: 2px solid var(--clr-black-lightgray);
    background-color: var(--clr-light-black-light-gray);
  }
  .title {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--clr-text-black-white);
  }
  .sub_title {
    font-size: 0.9rem;
    color: var(--clr-black-lightgray);
  }

  /* ======================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.4rem;
    }
    .sub_title {
      font-size: 1rem;
    }
  }

  /* ======================================== */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .more_questions {
      border-radius: 15px;
    }
  }
`;
export default Morequestion;
