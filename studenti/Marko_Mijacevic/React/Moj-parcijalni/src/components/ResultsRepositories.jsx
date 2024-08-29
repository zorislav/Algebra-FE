//ResultsRepositories.jsx
//src/components/ResultsRepositories.jsx
//@ts-check

import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/redux-store";

function ResultsRepositories({ repos }) {
  const darkMode = useSelector(selectDarkMode);

  if (!repos || repos.length <= 0) {
    return null;
  }

  return (
    <div
      style={darkMode ? styles.resultsContainerLight : styles.resultsContainer}
    >
      <p style={styles.text}>
        <strong>REPOSITORIES: </strong>
      </p>
      <ul style={darkMode ? styles.reposContainer : styles.reposContainerLight}>
        {repos.map((repo) => (
          <li
            style={darkMode ? styles.repoItem : styles.repoItemLight}
            key={repo.id}
          >
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  resultsContainer: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto Mono, monospace",
    textAlign: "left",
    color: "rgb(64, 71, 86)",
    width: "100%",
  },
  resultsContainerLight: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto Mono, monospace",
    textAlign: "left",
    color: "rgb(232, 232, 232)",
    width: "100%",
  },
  text: {
    marginBottom: 20,
  },
  reposContainer: {
    width: "100%",
    border: "2px solid rgba(65, 71, 86, 0.6)",
    borderRadius: 10,
  },
  reposContainerLight: {
    width: "100%",
    borderRadius: 10,
    border: "2px solid rgba(232, 232, 232, 0.8)",
    padding: 0,
  },
  repoItem: {
    listStyleType: "none",
    marginTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    marginLeft: 5,
    marginRight: 5,
    borderBottom: "1px solid rgba(65, 71, 86, 0.5)",
  },
  repoItemLight: {
    listStyleType: "none",
    marginTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    marginLeft: 5,
    marginRight: 5,
    borderBottom: "1px solid rgba(232, 232, 232, 0.8)",
  },
};

ResultsRepositories.propTypes = {
  repos: PropTypes.array,
};

export default ResultsRepositories;
