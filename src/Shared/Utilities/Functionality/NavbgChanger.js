import { useEffect } from "react";

// Nav background changer functionality
const NavbgChanger = () => {
  useEffect(() => {
    const handleScroll = () => {
      const Height = window.scrollY;
      const nav = document.querySelector("nav");
      if (Height > 10) {
        nav.style.backgroundColor = "var( --clr-bgColor)";
      } else {
        nav.style.backgroundColor = "transparent";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return;
};

export default NavbgChanger;
