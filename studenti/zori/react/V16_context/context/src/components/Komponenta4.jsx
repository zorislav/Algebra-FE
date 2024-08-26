import { useContext } from "react";
import { Consumer } from "../context/Kontekst";
import Context from "../context/Kontekst";

function Komponenta4() {

  const context = useContext(Context);

  const { text, number, reset } = context;

  const editText = `${text} preko useContext funkcije - ${number}`

  //function clickHandler(){}

  return (
    <>
      <h2>Komponenta4</h2>
      <Consumer>
        { ctx => 
          <>
            <p>{ctx.text} - {ctx.number}</p>
            <button onClick={( () => ctx.reset(42))}>Reset</button>           
          </>
         }
      </Consumer>
      <p>{editText}</p>
      <button onClick={() => reset(41)}>Reset</button>    
    </>
  );
}

export default Komponenta4;