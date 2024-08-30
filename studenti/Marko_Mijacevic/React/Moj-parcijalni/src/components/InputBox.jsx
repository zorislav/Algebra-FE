// InputBox.jsx
// src/components/InputBox.jsx
//@ts-check

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGitHubRepos, fetchGitHubUser } from "../services/FetchApi";
import { selectDarkMode, setRepos, setUser } from "../store/redux-store";
import { ButtonSearch } from "./index";

function InputBox() {
  const darkMode = useSelector(selectDarkMode);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const inputReference = useRef(null);
  const [error, setError] = useState(null);

  const inputFocusOn = () => {
    setIsFocused(true);
  };
  const inputFocusOff = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    if (inputReference.current) {
      inputReference.current.focus();
    }
  }, []);

  const searchButtonPressed = async (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      window.alert("Please enter a valid GitHub username");
      return;
    }

    try {
      const userData = await fetchGitHubUser(inputValue.trim());
      const reposData = await fetchGitHubRepos(inputValue.trim());

      if (userData) {
        dispatch(setUser(userData));
        dispatch(setRepos(reposData));
        setError(null);
      } else {
        window.alert("User not found");
      }
    } catch (error) {
      console.error("Error during fetching data:", error);
      window.alert("Error fetching data. Please try again.");
    }
  };

  return (
    <div style={darkMode ? styles.inputContainer : styles.inputContainerLight}>
      <div style={darkMode ? styles.inputBox : styles.inputBoxLight}>
        <form style={styles.form}>
          <label style={darkMode ? styles.label : styles.labelLight}>
            GitHub username:
          </label>
          <div
            style={
              isFocused
                ? { ...styles.inputBorder, ...styles.inputBorderFocus }
                : styles.inputBorder
            }
          >
            <input
              ref={inputReference}
              style={styles.input}
              type="text"
              placeholder="e.g. facebook"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onFocus={inputFocusOn}
              onBlur={inputFocusOff}
            />
          </div>
          <ButtonSearch text="SEARCH" onClick={searchButtonPressed} />
        </form>
      </div>
    </div>
  );
}

const styles = {
  inputContainer: {
    width: 550,
    height: 250,
    padding: 3,
    border: "2px solid rgba(137, 217, 209, 0.5)",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    boxShadow: `
      0 0 20px 5px rgba(137, 217, 209, 0.4),
      0 0 40px 10px rgba(137, 217, 209, 0.2),
      0 0 60px 15px rgba(137, 217, 209, 0.1)
    `,
  },
  inputContainerLight: {
    width: 550,
    height: 250,
    padding: 3,
    border: "2px solid rgba(65, 71, 86, 0.5)",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    boxShadow: `
      0 0 20px 5px rgba(65, 71, 86, 0.4),
      0 0 40px 10px rgba(65, 71, 86, 0.2),
      0 0 60px 15px rgba(65, 71, 86, 0.1)
    `,
  },
  inputBox: {
    width: "100%",
    height: "100%",
    margin: 0,
    backgroundColor: "rgba(137, 217, 209, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "2px solid rgba(137, 217, 209, 0.5)",
    borderRadius: 15,
    padding: 15,
  },
  inputBoxLight: {
    width: "100%",
    height: "100%",
    margin: 0,
    backgroundColor: "rgba(65, 71, 86, 0.4)",
    backgroundSize: "100% 50%",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "2px solid rgba(65, 71, 86, 0.5)",
    borderRadius: 15,
    padding: 15,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "",
    width: "100%",
    height: "100%",
  },
  label: {
    fontSize: 20,
    fontFamily: "Roboto Mono, monospace",
    color: "rgb(232, 232, 232)",
    textAlign: "left",
    width: "100%",
  },
  labelLight: {
    fontSize: 20,
    fontFamily: "Roboto Mono, monospace",
    color: "rgb(64, 71, 86)",
    textAlign: "left",
    width: "100%",
  },
  inputBorder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    marginTop: 10,
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 10,
    border: "1px solid rgba(64, 71, 86, 0.9)",
    boxShadow: "0 0 0px 0px rgba(64, 71, 86, 0.5)",
    transition: "box-shadow 0.2s ease",
  },
  inputBorderFocus: {
    boxShadow: "0 0 1px 5px rgba(64, 71, 86, 0.5)",
  },
  input: {
    width: "90%",
    height: "70%",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "Roboto Mono, monospace",
    color: "rgb(64, 71, 86)",
    textAlign: "left",
  },
};

export default InputBox;
