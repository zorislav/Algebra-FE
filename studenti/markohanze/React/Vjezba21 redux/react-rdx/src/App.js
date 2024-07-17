import { useSelector } from 'react-redux';
import './App.css';




function App() {

const counter = useSelector(state => state.counter );

  return (
    <div className="App">
     <h1>React redux</h1>
     <button>+</button>
<span>{counter}</span>
<button>-</button>
<div>
<button>Reset</button>
</div>
    </div>
  );
}

export default App;
