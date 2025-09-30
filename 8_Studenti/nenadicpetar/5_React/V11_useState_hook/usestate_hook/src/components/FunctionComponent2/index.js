import { useState, useEffect } from "react";
import "./style.css";

function FunctionComponent2(props) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [props.godine]);

  return (
    <div className="user-card-comp2">
      <p>Ime: {props.ime}</p>
      <p className={animate ? "animate" : ""}>Godine: {props.godine}</p>
      <div className="children-text">{props.children}</div>
    </div>
  );
}

export default FunctionComponent2;
