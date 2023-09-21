import { useState, useEffect } from 'react';
import './App.css';

function App() {

const initialCount = Number (localStorage.getItem('count') || 0);  
const [count, setCount] = useState(initialCount);

const decrease = () => setCount(count-1);
const increase = () => setCount(count+1);
const reset = () => setCount(0);

useEffect(()=>{
  alert('App loaded!')
}, []);

useEffect(()=>{
  localStorage.setItem('count', count);
  console.log(`Current counter value is: ${count}`);
}, [count]);

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
      <button onClick={reset}>Reset</button>

    </div>
  );
}

export default App;
