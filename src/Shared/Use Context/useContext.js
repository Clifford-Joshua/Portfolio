import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  // =====================================
  // Nav
  const [openNav, setOpenNav] = useState(false);
  // =====================================
  return (
    <AppContext.Provider value={{ openNav, setOpenNav }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContent = () => {
  return useContext(AppContext);
};
export default AppProvider;
