import React from "react";
import Component1 from "./components/Component1";
import MyContext from "./context/MyContext";
import "./App.css";

function App() {
  const vrijednosti = {
    tekst: "Pozdrav iz Context-a 🚀",
    broj: 42,
  };

  return (
    <MyContext.Provider value={vrijednosti}>
      <div>
        <h1>App komponenta</h1>
        <Component1 />
      </div>
    </MyContext.Provider>
  );
}

export default App;
