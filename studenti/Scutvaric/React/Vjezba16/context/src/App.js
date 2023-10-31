import { useState } from 'react';
import { Provider } from './context/context';

import Komponenta1 from './components/Komponenta1';


import './App.css';

function App() {

  const [number, setNumber] = useState(0);

  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  }

  return (
    <div className="App">
      <Provider value={{text: 'Komponenta 4 je najbolja', number}}>
        <label>
          <input type="number" value={number} onChange={numberChangeHandler}/>
        </label>
        <Komponenta1/>

      </Provider>
    </div>
  );
}

export default App;
