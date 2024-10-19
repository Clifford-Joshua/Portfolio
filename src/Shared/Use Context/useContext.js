import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  // =====================================
  // Nav
  const [openNav, setOpenNav] = useState(false);
  // =====================================

  // About Page
  const [dayprofile, setDayProfile] = useState("");

  return (
    <AppContext.Provider
      value={{ openNav, setOpenNav, setDayProfile, dayprofile }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContent = () => {
  return useContext(AppContext);
};
export default AppProvider;
