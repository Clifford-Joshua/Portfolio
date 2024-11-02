import React from "react";
import styled from "styled-components";
import { ClientData } from "../../../Shared/Utilities/Client";
import { ProjectData } from "../../../Shared/Utilities/ProjectData";
import { CompaniesData } from "../../../Shared/Utilities/CompanyData";
import DataCalculation from "../../../Shared/Utilities/Functionality/DataCalculation";
const Exprience = () => {
  const { years } = DataCalculation();

  return (
    <Wrapper>
      <div className="Expreinece">
        <h2 className="num">{years.length < 3 ? `0${years} ` : years} +</h2>
        <h2 className="title">years of expreinece</h2>
      </div>
      <div className="Expreinece">
        <h2 className="num">
          {ProjectData.length < 3 ? `0${ProjectData} ` : years} +
        </h2>
        <h2 className="title">company served</h2>
      </div>
      <div className="Expreinece">
        <h2 className="num">
          {CompaniesData.length < 3 ? `0${CompaniesData} ` : years} +
        </h2>
        <h2 className="title">completed project</h2>
      </div>
      <div className="Expreinece">
        <h2 className="num">
          {ClientData.length < 3 ? `0${ClientData} ` : years} +
        </h2>
        <h2 className="title">satisfied client</h2>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ================================================ */
  /* Mobile View */
  gap: 3rem;
  display: grid;
  min-height: 30vh;
  align-items: center;
  font-family: "Roboto Slab", serif;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  .Expreinece {
    gap: 2rem;
    padding: 2rem;
    height: 150px;
    display: flex;
    border-radius: 15px;
    align-items: center;
    border: 2px solid gray;
    justify-content: center;
  }
  .num {
    width: 50%;
    font-size: 2rem;
    text-align: center;
    color: var(--clr-blue-gold);
  }
  .title {
    width: 50%;
    font-weight: 700;
    font-size: 1.6rem;
    text-transform: capitalize;
    color: var(--clr-black-lightgray);
    font-family: "Roboto", sans-serif;
  }

  /* ================================================ */

  /* ================================================ */
  /* Ipad View */
  @media screen and (764px <= width <= 1023px) {
    padding-top: 3.5rem;
    .num {
      font-size: 2.4rem;
    }
    .title {
      font-size: 1.8rem;
    }
  }

  /* ================================================ */

  /* ================================================ */
  /* Desktop View */
  @media screen and (width >= 1024px) {
    padding: 5rem 0;
    .num {
      font-size: 2.6rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;
export default Exprience;
