import { useState } from "react";
import FunctionComponent1 from "./components/FunctionComponent1";
import FunctionComponent2 from "./components/FunctionComponent2";
import ClassComponent1 from "./components/ClassComponent1";
import "./App.css";

function App() {
  // State je sada objekt sa 2 vrijednosti: korisnici + tekst
  const [state] = useState({
    korisnici: [
      { ime: "Kata", godine: 36 },
      { ime: "Ana", godine: 73 },
      { ime: "Josip", godine: 68 },
    ],
    tekst: "Ovo je proizvoljna tekstualna vrijednost iz statea",
  });

  return (
    <div className="app-container">
      <h1>Popis korisnika</h1>
      <FunctionComponent1
        ime={state.korisnici[0].ime}
        godine={state.korisnici[0].godine}
      />
      <ClassComponent1
        ime={state.korisnici[1].ime}
        godine={state.korisnici[1].godine}
      />
      <FunctionComponent2
        ime={state.korisnici[2].ime}
        godine={state.korisnici[2].godine}
      >
        <p>{state.tekst}</p>
      </FunctionComponent2>
    </div>
  );
}

export default App;
