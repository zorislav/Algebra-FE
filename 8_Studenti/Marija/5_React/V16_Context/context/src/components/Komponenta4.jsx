import { use } from "react";

import Context, { Consumer } from "../context/Kontekst";

function Komponenta4() {
  const context = use(Context);
  const { text, number, reset } = context;
  const editText = `Preko useContext: ${text}, a broj je: ${number}`;
  const noviBroj = 99;

  return (
    <>
      <h2>Komponenta 4</h2>
      <Consumer>
        {(ctx) => (
          <p>
            Preko Consumer komponente: {ctx.text} - {ctx.number}
          </p>
        )}
      </Consumer>
      <p>{editText}</p>
      <button onClick={() => reset(noviBroj)}>Reset</button>
    </>
  );
}

export default Komponenta4;
