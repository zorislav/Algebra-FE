// Main.jsx
// src/components/Main.jsx
// Description: WebApp for GitHub User Search
//@ts-check

/* TODO:  -Problem when entering niki!!!
          -Saving Theame choice
*/

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, selectUser } from "../store/redux-store";
import { InputBox, Results, TopRow } from "./index";

export default function Main() {
  const user = useSelector(selectUser);
  const darkMode = useSelector(selectDarkMode);

  return (
    <div
      style={{
        ...styles.containerLight,
        ...(darkMode ? styles.containerDark : {}),
      }}
    >
      <TopRow />
      {!user ? <InputBox /> : <Results />}
    </div>
  );
}

const styles = {
  containerDark: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgb(64, 71, 86)",
    width: "100%",
    height: "100vh",
    overflowY: "auto", //Da tema prekrije cijeli ekran
  },
  containerLight: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgb(240, 240, 240)",
    width: "100%",
    height: "100vh",
    overflowY: "auto", //Da tema prekrije cijeli ekran
  },
};
