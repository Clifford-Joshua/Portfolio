import React, { useEffect, useState } from "react";
import { LuCloudSun } from "react-icons/lu";
import { RiMoonClearFill } from "react-icons/ri";
import styled from "styled-components";

// ==========================
// Stored Theme
const StorageTheme = () => {
  let theme = "night";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Theme = () => {
  const [Theme, setTheme] = useState(StorageTheme());

  useEffect(() => {
    document.documentElement.className = Theme;
    localStorage.setItem("theme", Theme);
  }, [Theme]);

  const toggleTheme = () => {
    const ThemeBtn = document.querySelector(".Theme");

    if (Theme === "night") {
      setTheme("day");
      ThemeBtn.classList.add("Theme_animation");
    } else {
      setTheme("night");
      ThemeBtn.classList.remove("Theme_animation");
    }
  };

  if (Theme === "day") {
    return (
      <Wrapper>
        <h5 className="Theme" onClick={toggleTheme}>
          day
          <span className="Theme_icon">
            <LuCloudSun />
          </span>
        </h5>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h5 className="Theme" onClick={toggleTheme}>
          night
          <span className="Theme_icon">
            <RiMoonClearFill />
          </span>
        </h5>
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  /* ================================= */
  /* Mobile View */

  .Theme {
    cursor: pointer;
    padding: 5px 10px;
    font-size: 1.2rem;
    color: var(--clr-theme);
    transition: 2s all linear;
    text-transform: capitalize;
    background-color: var(--clr-black-white);
  }
  .Theme_animation {
    color: black;
    background-color: white;
    transform: rotateY(360deg);
  }
  .Theme_color {
    color: black;
    background-color: white;
  }
  .Theme_icon {
    font-size: 1.3rem;
  }
  /* ================================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .Theme_icon {
      font-size: 1.7rem;
    }
  }
`;
export default Theme;
