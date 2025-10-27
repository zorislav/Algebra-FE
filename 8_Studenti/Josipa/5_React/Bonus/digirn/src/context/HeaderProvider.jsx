import React, { useState } from "react";

export const HeaderContext = React.createContext(null);

const HeaderProvider = ({ children }) => {
  const [menuLista, setMenuLista] = useState([]);

  const createMenu = (menuLista) => {
    setMenuLista(menuLista);
  };

  return (
    <HeaderContext value={{ menuLista, createMenu }}>{children}</HeaderContext>
  );
};

export default HeaderProvider;
