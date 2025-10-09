import React, { useState } from "react";

function AddUserForm({ dodajKorisnika }) {
  const [ime, setIme] = useState("");
  const [godine, setGodine] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ime || !godine) return;

    dodajKorisnika({ ime, godine: parseInt(godine), id: Date.now() });
    setIme("");
    setGodine("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ime}
        onChange={(e) => setIme(e.target.value)}
        placeholder="Ime korisnika"
      />
      <input
        type="text"
        value={godine}
        onChange={(e) => setGodine(e.target.value)}
        placeholder="Godine"
      />
      <button type="submit">Dodaj korisnika</button>
    </form>
  );
}

export default AddUserForm;
