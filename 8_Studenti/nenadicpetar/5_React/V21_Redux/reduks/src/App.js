import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ADD_COUNT, RESET, SUBTRACT_COUNT } from "./store/redux-store";
import MojaKomponenta1 from "./components/MojaKomponenta1";
import MojaKomponenta2 from "./components/MojaKomponenta2";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  function addOne() {
    dispatch({ type: ADD_COUNT, payload: 1 });
  }

  function subtractOne() {
    dispatch({ type: SUBTRACT_COUNT, payload: 1 });
  }

  function reset() {
    dispatch({ type: RESET });
  }

  return (
    <div className="App">
      <h1>React Redux</h1>
      <button onClick={subtractOne}>-</button>
      <span>{counter}</span>
      <button onClick={addOne}>+</button>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <MojaKomponenta1 />
      <MojaKomponenta2 />
    </div>
  );
}

export default App;
