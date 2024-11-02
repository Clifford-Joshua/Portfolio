import React from "react";
import styled from "styled-components";
import DataCalculation from "../../../Shared/Utilities/Functionality/DataCalculation";
const Bio = () => {
  const { days, years, seconds } = DataCalculation();
  return (
    <Wrapper>
      <article className="my_bio">
        <h2 className="title">about me</h2>
        <p className="greetings">hey!.........</p>
        <ul>
          <li>{""}</li>
          <p>this chukwudera joshua</p>
          <li>{""}</li>
          <p className="important_intro">
            I'm a creative and results-driven front-end developer with a strong
            focus on React.js. With proficiency in HTML, CSS, and JavaScript, I
            am skilled at creating seamless, responsive, and user-friendly
            interfaces. My ability to quickly learn new technologies and solve
            complex problems allows me to adapt to the fast-evolving tech
            landscape. I am open to opportunities and collaborations that aim to
            leverage technology to make a meaningful impact on the world.
          </p>
          <li>{""}</li>
          <p>
            i've been working with web technologies and studying for
            <span className="year"> {`${years} years `} </span>,
            <span className="days"> {` ${days} days`} </span>,
            <span className="sec"> {`${seconds} `} </span>
          </p>
          <li>{""}</li>
          <p>
            during those period i've gain hands-on experience with developing
            full-stack web applications
          </p>
        </ul>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ================================ */
  /* Mobile View */
  color: var(--clr-gray);
  .year {
    color: var(--clr-year-teal-gold);
  }
  .days {
    color: var(--clr-days-sky-blue-soft-yellow);
  }
  .sec {
    color: var(--clr-seconds-neon-reen-light-orange);
  }
  :is(.days, .year, .sec) {
    text-shadow: 2px 1px black;
  }
  font-family: "Roboto", serif;
  .my_bio {
    padding-block: 2rem;
    text-transform: capitalize;
  }
  .title {
    text-transform: uppercase;
    font-size: var(--clr-font-6);
    padding-left: var(--clr-rem-11);
  }
  .greetings {
    padding-left: var(--clr-rem-11);
  }
  .important_intro {
    color: var(--clr-text-black-white);
  }

  /* ================================ */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .my_bio {
      font-size: var(--clr-font-3);
    }
  }

  /* ================================ */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    .title {
      font-size: var(--clr-font-7);
    }
    .my_bio {
      font-size: var(--clr-font-4);
    }
  }
`;
export default Bio;
