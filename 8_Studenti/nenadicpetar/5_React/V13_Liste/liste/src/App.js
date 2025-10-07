import React, { useState } from "react";
import FunctionComponent1 from "./components/FunctionComponent1";
import ClassComponent1 from "./components/ClassComponent1";
import FunctionComponent2 from "./components/FunctionComponent2";
import "./App.css";

function App() {
  const [korisnici, setKorisnici] = useState([
    { id: 1, ime: "Kata", godine: 36 },
    { id: 2, ime: "Ana", godine: 73 },
    { id: 3, ime: "Josip", godine: 68 },
  ]);

  const promijeniIme = (novoIme) => {
    setKorisnici(
      korisnici.map((k) => ({
        ...k,
        ime: novoIme,
      }))
    );
  };

  return (
    <div className="app-container">
      <h1>Lista korisnika</h1>
      {korisnici.map((korisnik, idx) => {
        if (idx === 0)
          return (
            <FunctionComponent1
              key={korisnik.id}
              korisnik={korisnik}
              promijeniIme={promijeniIme}
              boja="func1"
            />
          );
        if (idx === 1)
          return (
            <ClassComponent1
              key={korisnik.id}
              korisnik={korisnik}
              promijeniIme={promijeniIme}
              boja="class1"
            />
          );
        return (
          <FunctionComponent2
            key={korisnik.id}
            korisnik={korisnik}
            promijeniIme={promijeniIme}
            boja="func2"
          />
        );
      })}
    </div>
  );
}

export default App;
