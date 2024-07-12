import { useState } from 'react';
import './App.css';

function Child({title, onBtnClick}) {

let msg = "goodbye";

  return (
<>
<h2>Child: {title}</h2>
<button onClick={() => onBtnClick} >Promjeni parent</button>

</>

  )
}


function Parent() {

const [message, setMessage] = useState("hello world");

function btnClickHandler(newMessage) {
  setMessage(newMessage);
}

return (
<>
<h2>Parent: {message}</h2>
<Child title="mojedijete" onBtnClick={btnClickHandler}/>
</>

)


}


function App() {

const [counter, setCounter] = useState(0);

function buttonClickHandler() {
  setCounter((prethodnoStanje) => prethodnoStanje + 1);
  setCounter((prethodnoStanje) => prethodnoStanje + 1);
  setCounter((prethodnoStanje) => prethodnoStanje + 1);
  setCounter((prethodnoStanje) => prethodnoStanje + 1);

}

  return (
    <div className="App">
     <p>Brojac: {counter}</p>
     <button onClick={buttonClickHandler}>uvecaj brojac</button>
     <Parent />
    </div>
  );
}

export default App;
