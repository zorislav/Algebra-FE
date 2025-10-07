import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import ClassComponent from "./ClassComponent";

function Component4() {
  const value = useContext(MyContext);

  const velikaSlova = value.tekst.toUpperCase();
  const ponovljeno = `${value.tekst} - ${value.tekst}`;

  return (
    <div className="Component4">
      <h2>Component4</h2>
      <p>Primljeni tekst: {value.tekst}</p>
      <p>Primljeni broj: {value.broj}</p>

      <hr />
      <h3>Korištenje teksta kao varijable:</h3>
      <p>Velikim slovima: {velikaSlova}</p>
      <p>Ponovljeno: {ponovljeno}</p>

      <hr />
      {/* Poziv nove klasne komponente */}
      <ClassComponent />
    </div>
  );
}

export default Component4;
