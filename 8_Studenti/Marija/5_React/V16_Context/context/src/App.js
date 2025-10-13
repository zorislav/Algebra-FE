import { useState } from "react";
import "./App.css";
import Komponenta1 from "./components/Komponenta1";
import { Provider } from "./context/Kontekst";

function App() {
  const [number, setNumber] = useState(0);

  const changeHandler = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div className="App">
      <h1>App kompenta</h1>
      <Provider
        value={{
          text: "Komponenta 4 je najbolja!",
          number: number,
          reset: (br) => setNumber(br),
        }}
      >
        <label htmlFor="broj">Postavi u kontekst: </label>
        <input
          id="broj"
          type="number"
          value={number}
          onChange={changeHandler}
        />
        <Komponenta1 />
      </Provider>
    </div>
  );
}

export default App;
