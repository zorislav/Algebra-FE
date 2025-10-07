import React, { useEffect, useState } from "react";
import TextForm from "./components/TextForm";
import "./App.css";

function App() {
  const [tekst, setTekst] = useState("");
  const [animate, setAnimate] = useState(false);

  const prikaziTekst = (vrijednost) => {
    setTekst(vrijednost);
  };

  const resetTekst = () => {
    setTekst("");
  };

  // Kad se tekst promijeni, aktiviraj animaciju
  useEffect(() => {
    if (tekst != "") {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [tekst]);

  return (
    <div className="app-container">
      <h1>Forma za unos teksta</h1>
      <TextForm prikaziTekst={prikaziTekst} />
      <p className={animate ? "fade-in" : ""}>Uneseni tekst: {tekst}</p>
      <button id="resetButton" onClick={resetTekst}>
        Početno stanje
      </button>
    </div>
  );
}

export default App;
