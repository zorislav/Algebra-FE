import React, { useState, useEffect } from "react";

function FunctionComponent1({ korisnik, promijeniIme, boja }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (korisnik.ime) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [korisnik.ime]);

  return (
    <div className={`user-card ${boja} ${animate ? "animate" : ""}`}>
      <p>
        {korisnik.ime} ({korisnik.godine} godina)
      </p>
      <input
        type="text"
        value={korisnik.ime}
        onChange={(e) => promijeniIme(e.target.value)}
      />
    </div>
  );
}

export default FunctionComponent1;
