import React, { useState } from "react";

export const HeaderContext = React.createContext(null);

const HeaderProvider = ({children}) =>{

  const createMenu = (menuLista) => {
      setMenuLista(menuLista);
  }

  const [ menuLista, setMenuLista] = useState([]);
 
  return (
    <HeaderContext value={{menuLista, createMenu}}>{children}</HeaderContext>
  );

  
}

export default HeaderProvider;