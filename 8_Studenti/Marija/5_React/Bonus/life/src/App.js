import { useState } from "react";
import { Child1, Child2 } from "./components";

import "./App.css";

function App() {
  const [showChild1, setShowChild1] = useState(true);
  const [showChild2, setShowChild2] = useState(true);
  const [counter, setCounter] = useState(0);

  const handleShowChild1 = () => {
    setShowChild1((show) => !show);
  };

  const handleShowChild2 = () => {
    setShowChild2((show) => !show);
  };

  const handleCounter = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <h1>Glavna aplikacija</h1>
      {showChild1 && <Child1 brojac={counter} uvecaj={handleCounter} />}
      <button type="" onClick={handleShowChild1}>
        Show/Hide Child1
      </button>
      {showChild2 && <Child2 />}
      <button type="" onClick={handleShowChild2}>
        Show/Hide Child2
      </button>
    </div>
  );
}

export default App;
