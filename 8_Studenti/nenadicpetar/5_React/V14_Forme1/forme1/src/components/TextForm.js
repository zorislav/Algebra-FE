import React, { useState } from "react";

function TextForm({ prikaziTekst }) {
  const [unos, setUnos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // sprječava refresh stranice
    prikaziTekst(unos);
    setUnos(""); // opcionalno: očisti input nakon slanja
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={unos}
        onChange={(e) => setUnos(e.target.value)}
        placeholder="Upiši tekst"
      />
      <button type="submit">Potvrdi</button>
    </form>
  );
}

export default TextForm;
