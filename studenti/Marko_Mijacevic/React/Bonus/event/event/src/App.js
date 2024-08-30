import { useState } from 'react';
import './App.css';

function Child({title, onBtnClick}){

  let msg = "Goodbay!";

  return(
    <>
      <h2>Child: {title}</h2>
      <button onClick={() => onBtnClick(msg)}>Promijeni Parent</button>
    </>
  )
}

function Parent(){

  const [message, setMessage] = useState("Hello World!");

  function btnClickHandler(newMessage){
    setMessage(newMessage);
  }

  return (
    <>
      <h2>Parent: {message}</h2>
      <Child title="Moje dijete" onBtnClick={btnClickHandler} />
    </>
  )
}

function App() {

  const [counter, setCounter] = useState(0);

  function buttonClickHandler(){
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
  }

  return (
    <div className="App">
      <p>Brojač: {counter}</p>
      <button onClick={buttonClickHandler}>Uvećaj brojač</button>
      <Parent/>
    </div>
  );
}

export default App;
