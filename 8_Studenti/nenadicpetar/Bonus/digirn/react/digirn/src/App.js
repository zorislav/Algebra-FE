import { useEffect, use } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { HamburgermenuContext } from "./context/HamburgermenuProvider";

import "./App.css";

import Glavna from "./screens/glavna/Glavna";
import Lista from "./screens/lista/Lista";
import Prikaz from "./screens/prikaz/Prikaz";
import Unos from "./screens/unos/Unos";
import Izmjena from "./screens/izmjena/Izmjena";

function App() {
  const hamburger = use(HamburgermenuContext);

  const handleOutsideClick = () => {
    hamburger.closeHamburger();
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <div className="App" onClick={handleOutsideClick}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Glavna />} />
          <Route path="/nalozi" element={<Lista />} />
          <Route path="/nalog/:id" element={<Prikaz />} />
          <Route path="/nalog/:id/izmjena" element={<Izmjena />} />
          <Route path="/unos" element={<Unos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
