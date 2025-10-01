import { useState, useEffect } from "react";
import "./style.css";

function FunctionComponent1(props) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Pokreni animaciju svaki put kad se promijene props.godine
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500); // trajanje efekta
    return () => clearTimeout(timer);
  }, [props.godine]);

  return (
    <div className="user-card-comp1">
      <p>Ime: {props.ime}</p>
      <p className={animate ? "animate" : ""}>Godine: {props.godine}</p>
      <input type="text" value={props.ime} onChange={props.promijeniIme} />
    </div>
  );
}

export default FunctionComponent1;
