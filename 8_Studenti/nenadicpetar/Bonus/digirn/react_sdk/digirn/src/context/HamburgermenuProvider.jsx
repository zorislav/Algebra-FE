import React, { useState } from "react";

export const HamburgermenuContext = React.createContext(null);

const HamburgermenuProvider = ({ children }) => {
  const toggleHamburger = () => {
    setHamburger((prevState) => ({
      hamburgerOpen: !prevState.hamburgerOpen,
    }));
  };

  const closeHamburger = () => {
    setHamburger(() => ({
      hamburgerOpen: false,
    }));
  };

  const [hamburger, setHamburger] = useState({ hamburgerOpen: false });

  return (
    <HamburgermenuContext
      value={{ hamburger, toggleHamburger, closeHamburger }}
    >
      {children}
    </HamburgermenuContext>
  );
};

export default HamburgermenuProvider;
