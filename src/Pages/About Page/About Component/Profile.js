import React from "react";
import styled from "styled-components";
import Day_Img from "../../../Assets/About_Img/Day_Profile_Picture.jpg";
import Night_Img from "../../../Assets/About_Img/Night_Profile_Picture.jpg";
import { useGlobalContent } from "../../../Shared/Use Context/useContext";
const Profile = () => {
  const { dayprofile } = useGlobalContent();
  console.log(dayprofile);

  return (
    <Wrapper>
      <div>
        <img src={`${Day_Img}`} alt="" />
        <img src={`${Night_Img}`} alt="" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Profile;
