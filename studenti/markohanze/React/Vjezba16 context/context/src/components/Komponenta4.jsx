import { useContext } from "react";

import Context, { Consumer } from '../context/Kontekst';

function Komponenta4() {

  const ctx = useContext(Context);

  const { text, number } = ctx;

  const editText = `${text} preko funkcije broj je: ${number}`;

  return (
    <>
      <h2>Komponenta 4</h2>
      <Consumer>{props => <p>{props.text}</p>}</Consumer>
      <p>{editText}</p>
    </>
  );
}

export default Komponenta4;