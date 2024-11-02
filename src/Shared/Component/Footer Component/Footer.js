import React from "react";
import git_logo from "../../../Assets/Contact_img/github_logo.png";
import fb_logo from "../../../Assets/Contact_img/facebook_logo.jpg";
import gmail_logo from "../../../Assets/Contact_img/gmail_logo.png";
import instagram_logo from "../../../Assets/Contact_img/instagram_logo.jpg";
import linkin_logo from "../../../Assets/Contact_img/linkin_logo.png";
import x_logo from "../../../Assets/Contact_img/x_logo.png";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div className="social_icons">
        <div className="address_image_container">
          <a
            href="https://github.com/Clifford-Joshua"
            className="github_link"
            rel="noreferrer"
            target="_blank"
          >
            <img src={git_logo} alt="git_logo" className="social_logo" />
          </a>
        </div>
        <div className="address_image_container">
          <a
            href="https://x.com/CliffordJo978"
            className="github_link"
            rel="noreferrer"
            target="_blank"
          >
            <img src={x_logo} alt="x_logo" className="social_logo" />
          </a>
        </div>
        <div className="address_image_container">
          <a
            href="https://web.facebook.com/joshua.clifford.315"
            className="github_link"
            rel="noreferrer"
            target="_blank"
          >
            <img src={fb_logo} alt="fb_logo" className="social_logo" />
          </a>
        </div>
        <div className="address_image_container">
          <a
            href="https://www.instagram.com/jos_clif/"
            className="github_link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={instagram_logo}
              alt="instagram_logo"
              className="social_logo"
            />
          </a>
        </div>
        <div className="address_image_container">
          <a
            href="https://www.linkedin.com/in/clifford-joshua-aaa89b30b/"
            className="github_link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkin_logo}
              alt="linkedin_logo"
              className="social_logo"
            />
          </a>
        </div>
        <div className="address_image_container">
          <a
            href="https://www.cliffordgb45@gmail.com"
            className="github_link"
            rel="noreferrer"
            target="_blank"
          >
            <img src={gmail_logo} alt="gmail_logo" className="social_logo" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ======================================= */
  /* Mobile View */
  padding: 1rem;
  background-color: var(--clr-bgColor);
  .social_icons {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  }
  .social_logo {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 10px;
  }
  .address_image_container {
    padding: 0.5rem;
    border-radius: 10px;
    border: 2px solid var(--clr-black-lightgray);
  }

  /* ======================================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .social_icons {
      grid-template-columns: repeat(auto-fit, minmax(5px, 1fr));
    }
    .social_logo {
      width: 40px;
      height: 40px;
    }
    .github_link {
      width: max-content;
    }
    .address_image_container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default Footer;
