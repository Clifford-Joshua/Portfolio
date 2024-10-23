import React from "react";
import styled from "styled-components";
import Day_Img from "../../../Assets/About_Img/Day_Profile_Picture.jpg";
import Night_Img from "../../../Assets/About_Img/Night_Profile_Picture.jpg";
import { useGlobalContent } from "../../../Shared/Use Context/useContext";
import { GiPolarStar } from "react-icons/gi";
const Profile = () => {
  const { dayprofile } = useGlobalContent();
  console.log(dayprofile);

  return (
    <Wrapper>
      <GiPolarStar className="star_icon" />
      <img
        src={`${dayprofile ? Day_Img : Night_Img}`}
        alt=""
        className="profile_picture"
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ============================= */
  /* Mobile View */
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  .star_icon {
    top: -10%;
    left: -10%;
    position: absolute;
    font-size: var(--clr-rem-20);
    color: var(--clr-text-ash-steel);
  }
  .profile_picture {
    z-index: 2;
    width: 350px;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    object-position: center 55%;
  }

  /* ============================= */
  /* Ipad View */
  @media screen and (width >= 764px) {
    .star_icon {
      top: -6%;
      left: -15%;
      font-size: var(--clr-rem-24);
    }
    .profile_picture {
      height: 100%;
    }
  }
`;
export default Profile;
