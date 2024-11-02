import React from "react";
import styled from "styled-components";
import Day_Img from "../../../Assets/Service_Img/day.jpg";
import Night_Img from "../../../Assets/Service_Img/night.jpg";
import { useGlobalContent } from "../../../Shared/Use Context/useContext";
const Image = () => {
  const { dayprofile } = useGlobalContent();

  return (
    <Wrapper>
      <div className="image_container">
        <img
          src={`${dayprofile ? Night_Img : Day_Img}`}
          alt="day-or-night-picture"
          className="img"
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ============================================ */
  /* Mobile View */
  .image_container {
    height: 350px;
    overflow: hidden;
    border-radius: 15px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ============================================ */
  /* Ipad View */
  @media screen and (width >= 764px) {
    img {
      object-position: 0px 25%;
    }
  }

  /* ============================================ */
  /* Desktop View */
  @media screen and (width >= 1023px) {
    width: 45%;
    .image_container {
      height: 100%;
    }
    img {
      object-position: 50% 0%;
    }
  }
`;
export default Image;
