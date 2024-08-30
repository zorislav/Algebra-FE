import { useSelector, useDispatch } from "react-redux";
import { ADD_COUNT, RESET, SUBTRACT_COUNT } from "./store/redux-store";
import "./App.css";
import MojaKomponenta from "./components/MojaKomponenta";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function addOne() {
    dispatch({ type: ADD_COUNT, payload: 1 });
  }

  function substractOne() {
    dispatch({ type: SUBTRACT_COUNT, payload: 1 });
  }

  function reset() {
    dispatch({ type: RESET });
  }

  return (
    <div className="App">
      <h1>React Redux</h1>
      <button onClick={addOne}>+</button>
      <span>{counter}</span>

      <button onClick={substractOne}>-</button>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <MojaKomponenta />
    </div>
  );
}

export default App;
