import { use, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import Glavna from "./screens/glavna/Glavna";
import Lista from "./screens/lista/Lista";
import Prikaz from "./screens/prikaz/Prikaz";
import Izmjena from "./screens/izmjena/Izmjena";
import Unos from "./screens/unos/Unos";
import Nema from "./screens/nema/Nema";
import Header from "./components/header/Header";
import { HamburgermenuContext } from "./context/HamburgermenuProvider";

function App() {
  const hamburgerCtx = use(HamburgermenuContext);

  const handleOutsideClick = () => {
    hamburgerCtx.closeHamburger();
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="App" onClick={handleOutsideClick}>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Glavna />} />
            <Route path="/nalozi" element={<Lista />} />
            <Route path="/nalog/:id" element={<Prikaz />} />
            <Route path="/nalog/:id/izmjena" element={<Izmjena />} />
            <Route path="/unos" element={<Unos />} />
            <Route path="*" element={<Nema />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
