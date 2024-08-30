import { useSelector, useDispatch } from 'react-redux';
import { ADD_COUNT, SUBTRACT_COUNT, RESET } from './store/redux-store';

import MojaKomponenta from './components/MojaKomponenta';
import MojaKomponenta2 from './components/MojaKomponenta2';
import './App.css';

function App() {

  const counter = useSelector(state => state.counter);
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
      <button onClick={addOne}>+</button>
      <span>{counter}</span>
      <button onClick={subtractOne}>-</button>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <MojaKomponenta />
      <MojaKomponenta2 />
    </div>
  );
}

export default App;
