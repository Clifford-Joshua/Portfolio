import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { links } from "../../../Utilities/NavData";
import { NavLink } from "react-router-dom";
import { useGlobalContent } from "../../../Use Context/useContext";
const NavLinks = () => {
  const { setOpenNav, openNav } = useGlobalContent();
  return (
    <Wrapper>
      <div className={`close_nav_bar ${openNav && "open_nav_bar"}`}>
        <ul>
          {links.map(({ name, icon, link }, index) => {
            return (
              <li className="link_container" key={index}>
                <span className="link_icon"> {icon} </span>
                <NavLink to={link} className="links">
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <p className="Closed_Nav_Container">
          <IoClose
            className="Close_Nav_Btn"
            onClick={() => setOpenNav(false)}
          />
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ===================================== */
  /* Mobile View */
  .close_nav_bar {
    right: 0;
    top: 0;
    width: 80%;
    z-index: 22;
    height: 99vh;
    padding: 30px;
    position: absolute;
    transition: 1s all linear;
    transform: translate(120%);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: -2px 2px lightslategrey;
    background-color: var(--clr-nav-modal-bg);
  }
  .open_nav_bar {
    transform: translate(0%);
  }
  ul {
    all: unset;
    list-style-type: none;
  }
  .link_container {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .link_icon {
    font-size: 1.2rem;
    color: var(--clr-link-icon);
  }
  .links {
    text-decoration: none;
    color: var(--clr-mobile-link-color);
  }
  .links:hover {
    color: var(--clr-mobile-link-hover);
  }
  .Close_Nav_Btn {
    top: 2%;
    left: 90%;
    font-size: 1.6rem;
    position: absolute;
    color: var(--clr-mobile-close-btn);
  }
  /* ===================================== */
  /* Ipad View */
  @media screen and (width>=764px) {
    .link_container {
      font-size: 1.5rem;
    }
    .link_icon {
      font-size: 1.7rem;
    }
    .Close_Nav_Btn {
      font-size: 2rem;
    }
    /* ===================================== */
    /* Desktop View */
    @media screen and (width>= 1023px) {
      height: 50px;
      .close_nav_bar {
        all: unset;
      }
      ul {
        display: flex;
      }
      .link_container {
        margin-left: 1.5rem;
      }
      .links {
        color: var(--clr-link-color);
      }
      .links:hover {
        color: var(--clr-link-hover);
      }
      .Closed_Nav_Container {
        display: none;
      }
      .Close_Nav_Btn {
        color: var(--clr-close-btn);
      }
    }
  }
`;
export default NavLinks;
