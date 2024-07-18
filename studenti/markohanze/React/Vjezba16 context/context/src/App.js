import { useState } from 'react';
import { Provider } from './context/Kontekst';
import Komponenta1 from './components/Komponenta1';

function App() {

  const [number, setNumber] = useState(0);

  function textChangeHandler(event) {
    setNumber(event.target.value);
  }

  return (
    <div>
       <Provider value={{ text: 'Komponenta 4 je najbolja ', number }}>
       <h1>App</h1>
      <label>
        Postavi u context:
        <input type="number" value={number} onChange={textChangeHandler} />
      </label>
      <Komponenta1 />
    </Provider>
    </div>
   
  );
}

export default App;