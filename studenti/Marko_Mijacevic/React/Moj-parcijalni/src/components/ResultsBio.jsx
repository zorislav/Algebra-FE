//ResultsBio.jsx
//src/components/ResultsBio.jsx
//@ts-check

import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/redux-store";

function ResultsBio({ user }) {
  const darkMode = useSelector(selectDarkMode);

  if (!user) {
    return null;
  }

  const { avatar_url, bio, name, location } = user;

  return (
    <div style={darkMode ? styles.bioContainerLight : styles.bioContainer}>
      <div style={styles.bioBox}>
        <img style={styles.avatarImage} src={avatar_url} alt="User Avatar" />
        <span style={styles.avatarName}>{name}</span>
      </div>
      <p style={styles.text}>
        <strong>BIO: </strong>
        {bio}
      </p>
      <p style={styles.text}>
        <strong>LOCATION: </strong>
        {location}
      </p>
    </div>
  );
}

const styles = {
  bioContainer: {
    display: "flex",
    flexDirection: "column",
    color: "rgb(64, 71, 86)",
    fontFamily: "Roboto Mono, monospace",
    textAlign: "left",
    width: "100%",
  },
  bioContainerLight: {
    display: "flex",
    flexDirection: "column",
    color: "rgb(232, 232, 232)",
    fontFamily: "Roboto Mono, monospace",
    textAlign: "left",
    width: "100%",
  },
  bioBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  avatarImage: {
    width: 100,
    height: 100,
  },
  avatarName: {
    fontSize: 60,
    marginLeft: 20,
  },
  text: {
    marginBottom: 20,
  },
};

ResultsBio.propTypes = {
  user: PropTypes.object,
};

export default ResultsBio;
