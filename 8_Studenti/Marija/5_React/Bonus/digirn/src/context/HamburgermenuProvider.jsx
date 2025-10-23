import React, { useState } from "react";

export const HamburgermenuContext = React.createContext(null);

const HamburgermenuProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState({ hamburgerOpen: false });

  const closeHamburger = () => {
    setHamburger({ hamburgerOpen: false });
  };

  const toggleHamburger = () => {
    setHamburger((prevState) => ({ hamburgerOpen: !prevState.hamburgerOpen }));
  };

  return (
    <HamburgermenuContext
      value={{ hamburger, toggleHamburger, closeHamburger }}
    >
      {children}
    </HamburgermenuContext>
  );
};

export default HamburgermenuProvider;
