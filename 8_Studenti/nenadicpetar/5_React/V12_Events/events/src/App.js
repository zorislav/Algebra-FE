import { useState } from "react";
import FunctionComponent1 from "./components/FunctionComponent1";
import FunctionComponent2 from "./components/FunctionComponent2";
import ClassComponent1 from "./components/ClassComponent1";
import ButtonComponent from "./components/ButtonComponent";
import "./App.css";

function App() {
  const [state, setState] = useState({
    korisnici: [
      { ime: "Kata", godine: 36 },
      { ime: "Ana", godine: 73 },
      { ime: "Josip", godine: 68 },
    ],
    tekst: "Ovo je proizvoljna tekstualna vrijednost iz statea",
  });

  const promijeniIme = (event) => {
    const novoIme = event.target.value;

    // kopija korisnika
    const noviKorisnici = [...state.korisnici];

    // mijenjamo ime SAMO prvog korisnika
    noviKorisnici[0] = {
      ...noviKorisnici[0],
      ime: novoIme,
    };

    setState({ ...state, korisnici: noviKorisnici });
  };

  const promijeniGodine = () => {
    const noviKorisnici = state.korisnici.map((k) => ({
      ...k,
      godine: k.godine + 1,
    }));
    setState({ ...state, korisnici: noviKorisnici });
  };

  return (
    <div className="app-container">
      <h1>Popis korisnika</h1>
      <FunctionComponent1
        ime={state.korisnici[0].ime}
        godine={state.korisnici[0].godine}
        promijeniIme={promijeniIme}
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
      <ButtonComponent promijeniGodine={promijeniGodine} />
    </div>
  );
}

export default App;
