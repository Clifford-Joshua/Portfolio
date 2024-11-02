import React from "react";
import styled from "styled-components";
import { LocalData } from "../../../Shared/Utilities/LocalData";
const Technologies = () => {
  const { Tech_Img } = LocalData;

  return (
    <Wrapper>
      <div className="tech_images_container">
        <h2 className="title">Technology</h2>
        <div className="image_container">
          {Tech_Img.map((items) => {
            return (
              <div className="tech_image">
                <img src={items} alt="test" />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ==================================================== *
/* Mobile View/ */
  .title {
    height: 100px;
    display: flex;
    font-size: 1.6rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: "Roboto Slab", serif;
    color: var(--clr-text-black-white);
  }
  .image_container {
    gap: 1rem;
    display: grid;
    padding: 1rem;
    animation: animate 30s linear 5s infinite;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    background: linear-gradient(to left, #ff5f6d, #ff512f, #dd2476, #ffc371);
  }
  .tech_image {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    justify-content: center;
    border: 2px solid white;
    background: linear-gradient(to left, #009245, #662d8c, #ed1e79, #fcee21);
  }

  img {
    width: 85%;
    height: 80%;
    object-fit: cover;
  }

  @keyframes animate {
    0% {
      background-position: 0px 0px;
    }
    10% {
      background-position: -36px 0px;
    }
    20% {
      background-position: -72px 0px;
    }
    30% {
      background-position: -108px 0px;
    }
    40% {
      background-position: -144px 0px;
    }
    50% {
      background-position: -180px 0px;
    }
    60% {
      background-position: -216px 0px;
    }
    70% {
      background-position: -252px 0px;
    }
    80% {
      background-position: -288px 0px;
    }
    90% {
      background-position: -324px 0px;
    }
    100% {
      background-position: -350px 0px;
    }
  }

  /* ==================================================== *
/* Ipad View/ */
  @media screen and (width >=764px) {
    .image_container {
      gap: 3rem;
    }

    @keyframes animate {
      0% {
        background-position: 0px 0px;
      }
      10% {
        background-position: -72px 0px;
      }
      20% {
        background-position: -144px 0px;
      }
      30% {
        background-position: -216px 0px;
      }
      40% {
        background-position: -288px 0px;
      }
      50% {
        background-position: -360px 0px;
      }
      60% {
        background-position: -432px 0px;
      }
      70% {
        background-position: -504px 0px;
      }
      80% {
        background-position: -576px 0px;
      }
      90% {
        background-position: -648px 0px;
      }
      100% {
        background-position: -720px 0px;
      }
    }
  }

  /* ==================================================== *
/* desktop View/ */
  @media screen and (width >= 1023px) {
    width: 80%;
    margin: auto;
    .title {
      height: 120px;
      font-size: 1.8rem;
    }
    .tech_image {
      width: 80px;
      height: 80px;
    }
    @keyframes animate {
      0% {
        background-position: 0px 0px;
      }
      10% {
        background-position: -92px 0px;
      }
      20% {
        background-position: -184px 0px;
      }
      30% {
        background-position: -276px 0px;
      }
      40% {
        background-position: -368px 0px;
      }
      50% {
        background-position: -460px 0px;
      }
      60% {
        background-position: -552px 0px;
      }
      70% {
        background-position: -644px 0px;
      }
      80% {
        background-position: -736px 0px;
      }
      90% {
        background-position: -828px 0px;
      }
      100% {
        background-position: -940px 0px;
      }
    }
  }
`;
export default Technologies;
