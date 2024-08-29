// Results.jsx
// src/components/Results.jsx
//@ts-check

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  selectDarkMode,
  selectRepos,
  selectUser,
} from "../store/redux-store";
import { ButtonSearch, ResultsBio, ResultsRepositories } from "./index";

function Results() {
  const darkMode = useSelector(selectDarkMode);
  const user = useSelector(selectUser);
  const repos = useSelector(selectRepos);
  const dispatch = useDispatch();

  return (
    <div
      style={darkMode ? styles.resultsContainer : styles.resultsContainerLight}
    >
      <div style={darkMode ? styles.resultsBox : styles.resultsBoxLight}>
        <ResultsBio user={user} />
        <ResultsRepositories repos={repos} />
        <ButtonSearch text="BACK" onClick={() => dispatch(reset())} />
      </div>
    </div>
  );
}

const styles = {
  resultsContainer: {
    width: 550,
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
    marginBottom: 50,
  },
  resultsContainerLight: {
    width: 550,
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
    marginBottom: 50,
  },
  resultsBox: {
    width: "100%",
    height: "100%",
    margin: 0,
    backgroundColor: "rgba(137, 217, 209, 0.4)",
    backgroundSize: "100% 50%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "2px solid rgba(137, 217, 209, 0.5)",
    borderRadius: 15,
    padding: 15,
  },
  resultsBoxLight: {
    width: "100%",
    height: "100%",
    margin: 0,
    backgroundColor: "rgba(65, 71, 86, 0.4)",
    backgroundSize: "100% 50%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "2px solid rgba(65, 71, 86, 0.5)",
    borderRadius: 15,
    padding: 15,
  },
  bio: {},
  bioLight: {},
  repositories: {},
  repositoriesLight: {},
};

export default Results;
