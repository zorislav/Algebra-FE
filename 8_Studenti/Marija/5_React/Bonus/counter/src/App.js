import { useState } from "react";
import "./App.css";

function Child({ title, onBtnClick }) {
  let msg = "Goodbye!";

  return (
    <>
      <h2>Child Msg: {title}</h2>
      <button onClick={() => onBtnClick(msg)}>Change</button>
    </>
  );
}

function Parent() {
  const [message, setMessage] = useState("Hello World!");

  function btnClickHandler(newMessage) {
    // setMessage("Bok!");
    setMessage(newMessage);
  }

  return (
    <>
      <h2>Parent Msg: {message}</h2>
      <Child title={"Moje dijete"} onBtnClick={btnClickHandler} />
    </>
  );
}

function App() {
  const [state, setState] = useState(0);

  function onClickHandler() {
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 1);
    //  setState(state + 1);
    //  setState(state + 1);
    //  setState(state + 1);
  }

  return (
    <div className="App">
      <p>Counter: {state}</p>
      <button type="" onClick={onClickHandler}>
        Increment counter
      </button>
      <Parent />
    </div>
  );
}

export default App;
