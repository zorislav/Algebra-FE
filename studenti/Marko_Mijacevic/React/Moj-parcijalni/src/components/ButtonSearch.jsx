// ButtonSearch.jsx
// src/components/Button.jsx
//@ts-check

import PropTypes from "prop-types";
import React, { useState } from "react";

//(*)
function ButtonSearch({
  text = "BUTTON",
  onClick = () => {
    console.log("Button Pressed");
  },
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.buttonContainer}>
      <button
        type="submit"
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

const styles = {
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 50,
  },
  button: {
    backgroundColor: "rgb(64, 71, 86)",
    width: "100%",
    height: 50,
    color: "rgb(232, 232, 232)",
    fontSize: 20,
    fontFamily: "Roboto Mono, monospace",
    border: "2px solid rgba(137, 217, 209, 0.9)",
    borderRadius: 10,
    padding: 0,
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "rgba(64, 71, 86, 0.8)",
    border: "2px solid rgba(137, 217, 209, 0.6)",
  },
};

ButtonSearch.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonSearch;

/* 
(*) Usage:

<ButtonSearch 
  text="BUTTON" 
  onClick={() => {}} 
/>

*/
