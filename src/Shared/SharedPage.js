import React from "react";
import Nav from "./Component/Nav Component/Nav";
import { Outlet } from "react-router-dom";
const SharedPage = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default SharedPage;
