// ButtonTheme.jsx
// src/components/ButtonTheme.jsx
//@ts-check

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "../store/redux-store";

function ButtonTheme() {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  const [isHovered, setIsHovered] = useState(false);

  const imgDark = require("../assets/Night.png");
  const imgLight = require("../assets/Day.png");

  const darkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div
      style={{
        ...styles.buttonContainer,
        ...(isHovered ? styles.buttonContainerHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button style={styles.button} onClick={darkModeToggle}>
        <img
          src={darkMode ? imgLight : imgDark}
          alt={darkMode ? "Dark mode" : "Light mode"}
          style={styles.image}
        />
      </button>
    </div>
  );
}
const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    margin: 0,
    padding: 0,
    borderRadius: "50%",
    transition: "background-color 0.3s ease",
  },
  buttonContainerHover: {
    backgroundColor: "rgba(137, 217, 209, 0.3)",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "90%",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  image: {
    width: "60%",
    height: "60%",
  },
};

export default ButtonTheme;
