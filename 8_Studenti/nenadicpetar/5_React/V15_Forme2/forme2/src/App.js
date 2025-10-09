import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [korisnici, setKorisnici] = useState([
    { id: 1, ime: "Petar", godine: 25 },
    { id: 2, ime: "Ana", godine: 30 },
  ]);

  const [flashIds, setFlashIds] = useState([]);
  const [tooltips, setTooltips] = useState({});

  const dodajKorisnika = (noviKorisnik) => {
    setKorisnici([...korisnici, noviKorisnik]);
    triggerFlash(noviKorisnik.id, "Korisnik dodan!");
  };

  const promijeniIme = (id, novoIme) => {
    setKorisnici(
      korisnici.map((k) => (k.id === id ? { ...k, ime: novoIme } : k))
    );
    triggerFlash(id, "Ime promijenjeno!");
  };

  const povecajGodine = (id) => {
    setKorisnici(
      korisnici.map((k) => (k.id === id ? { ...k, godine: k.godine + 1 } : k))
    );
    triggerFlash(id, "Godine povećane!");
  };

  const triggerFlash = (id, poruka) => {
    setFlashIds((prev) => [...prev, id]);
    setTooltips((prev) => ({ ...prev, [id]: poruka }));
    setTimeout(() => {
      setFlashIds((prev) => prev.filter((fid) => fid !== id));
      setTooltips((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }, 1000);
  };

  return (
    <div className="app-container">
      <h1>Lista korisnika</h1>
      <AddUserForm dodajKorisnika={dodajKorisnika} />
      {korisnici.map((k) => {
        let flashClass = "";
        if (flashIds.includes(k.id)) {
          if (tooltips[k.id] === "Korisnik dodan!") flashClass = "added";
          if (tooltips[k.id] === "Ime promijenjeno!")
            flashClass = "name-changed";
          if (tooltips[k.id] === "Godine povećane!") flashClass = "age-changed";
        }

        return (
          <UserCard
            key={k.id}
            korisnik={k}
            promijeniIme={promijeniIme}
            povecajGodine={povecajGodine}
            flashClass={flashClass}
            tooltip={tooltips[k.id]}
          />
        );
      })}
    </div>
  );
}

export default App;
