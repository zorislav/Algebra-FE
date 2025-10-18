import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset, toggleTheme } from "./redux/actions";
import "./App.css";

function App({
  counter,
  theme,
  darkMode,
  increment,
  decrement,
  reset,
  toggleTheme,
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (counter !== 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 200);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <h1>Redux Counter</h1>
      <h2 className={`counter ${animate ? "bump" : ""}`}>
        Vrijednost: {counter}
      </h2>

      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        Promijeni temu
      </button>
      <br />
      <br />
      <br />
      <div>
        <p>Pritisni + da povećaš broj</p>
        <p>Pritisni - da smanjiš broj</p>
        <p>Pritisni Reset da vratiš brojač na 0</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  darkMode: state.darkMode,
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
