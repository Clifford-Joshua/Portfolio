import { FaHome } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { SiLinuxserver } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { FaHeadphonesAlt } from "react-icons/fa";

const links = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About", link: "/about", icon: <FaAddressBook /> },
  { name: "Service", link: "/service", icon: <SiLinuxserver /> },
  { name: "Work", link: "/work", icon: <DiHtml5 /> },
  { name: "contact", link: "/contact", icon: <FaHeadphonesAlt/> },
];
export { links };
