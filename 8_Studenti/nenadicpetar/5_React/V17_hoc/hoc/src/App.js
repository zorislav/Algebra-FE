import React from "react";
import ColoredButton from "./ColoredButton";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Primjer HOC withColor 🎨</h1>

      <ColoredButton color="red">Crveni gumb</ColoredButton>
      <ColoredButton color="green">Zeleni gumb</ColoredButton>
      <ColoredButton color="blue">Plavi gumb</ColoredButton>
      <ColoredButton color="purple">Ljubičasti gumb</ColoredButton>
      <ColoredButton color="orange">Narančasti gumb</ColoredButton>
    </div>
  );
}

export default App;
