import React from "react";
import Nav from "./Component/Nav Component/Nav";
import Footer from "./Component/Footer Component/Footer";
import { Outlet } from "react-router-dom";
const SharedPage = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedPage;
