import { useState } from 'react';
import { Provider } from './context/Kontekst';
import Komponenta1 from './components/Komponenta1';

function App() {

  const [number, setNumber] = useState(0);

  function textChangeHandler(event) {
    setNumber(event.target.value);
  }

  return (
    <Provider value={{ text: 'Komponenta 4 je najbolja ', number }}>
      <label>
        Postavi u context:
        <input type="number" value={number} onChange={textChangeHandler} />
      </label>
      <Komponenta1 />
    </Provider>
  );
}

export default App;
