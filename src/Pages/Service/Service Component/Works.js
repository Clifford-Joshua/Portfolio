import React from "react";
import styled from "styled-components";
import { IoMdCheckmark } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { LocalData } from "../../../Shared/Utilities/LocalData";
const Works = () => {
  const { Service_Card } = LocalData;

  return (
    <Wrapper>
      {Service_Card.map(({ title, description, work }, index) => {
        return (
          <div className="card" key={index}>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <div className="tools_container">
              {work.map((works, index) => {
                return (
                  <p key={index}>
                    <IoMdCheckmark className="mark_icon" />
                    {works}
                  </p>
                );
              })}
            </div>
            <button className="btn">
              contact now <FaArrowRight className="arrow_icon" />
            </button>
          </div>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ==================================================== *
/* Mobile View/ */
  gap: 2rem;
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  font-family: "Roboto", serif;
  .card {
    padding: 1.2rem;
    border-radius: 15px;
    color: var(--clr-text-ash-steel);
    border: 3px solid var(--clr-black-lightgray);
    background-color: var(--clr-light-black-light-gray);
  }
  .title {
    font-size: 1.3rem;
    text-transform: capitalize;
    font-family: "Roboto Slab", serif;
    color: var(--clr-text-black-white);
  }
  .description {
    font-size: 0.8rem;
  }
  .tools_container {
    display: grid;
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: capitalize;
  }
  .tools_container p {
    gap: 1rem;
    display: flex;
    align-items: center;
  }
  :is(.mark_icon, .arrow_icon) {
    font-weight: 900;
    color: var(--clr-blue-gold);
  }
  .btn {
    gap: 1rem;
    display: flex;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    border: 2px solid gray;
    color: var(--clr-text-black-white);
  }
  .btn:hover {
    color: var(--clr-seconds-neon-reen-light-orange);
  }
  .btn:hover .arrow_icon {
    color: var(--clr-seconds-neon-reen-light-orange);
  }

  /* ==================================================== *
/* Ipad View/ */
  @media screen and (width >= 764px) {
    .title {
      font-size: 1.5rem;
    }
    .description {
      font-size: 0.9rem;
    }
    .tools_container {
      font-size: 1.1rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .btn {
      font-size: 1.15rem;
    }
  }

  /* ============================================ */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 48%;
    padding: 0;
    .title {
      font-size: 1.4rem;
      font-weight: 900;
    }
    .card {
      padding: 1rem;
    }
    .description {
      font-size: 0.8rem;
    }
    .tools_container {
      font-size: 0.9rem;
    }
    .btn {
      width: 30%;
      font-size: 0.8rem;
    }
  }
`;
export default Works;
