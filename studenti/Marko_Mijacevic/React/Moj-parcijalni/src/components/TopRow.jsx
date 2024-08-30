import React, { Component } from "react";
import { connect } from "react-redux";
import { selectDarkMode } from "../store/redux-store";
import { ButtonTheme } from "./index";

class TopRow extends Component {
  render() {
    const { darkMode } = this.props;

    return (
      <div style={darkMode ? styles.navContainer : styles.navContainerLight}>
        <div style={styles.topRows}>
          <h2
            style={{
              ...styles.textLight,
              ...(darkMode ? styles.text : {}),
            }}
          >
            PARCIJALNI ISPIT - REACT
          </h2>
          <ButtonTheme />
        </div>
      </div>
    );
  }
}

const styles = {
  navContainer: {
    display: "flex",
    flexDirection: "column",
    width: "98%",
    height: "6vh",
    margin: 0,
    borderBottom: "1px solid rgba(137, 217, 209, 0.5)",
  },
  navContainerLight: {
    display: "flex",
    flexDirection: "column",
    width: "98%",
    height: "6vh",
    margin: 0,
    borderBottom: "1px solid rgba(64, 71, 86, 0.5)",
  },
  topRows: {
    margin: 0,
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "rgb(137, 217, 209)",
    fontFamily: "Roboto Mono, monospace",
    fontSize: 25,
    margin: 0,
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: 10,
  },
  textLight: {
    color: "rgb(64, 71, 86)",
    fontFamily: "Roboto Mono, monospace",
    fontSize: 25,
    margin: 0,
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: 10,
  },
};

const mapStateToProps = (state) => ({
  darkMode: selectDarkMode(state),
});

export default connect(mapStateToProps)(TopRow);
