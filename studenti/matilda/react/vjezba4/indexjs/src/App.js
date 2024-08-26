//stara verzija

/* import Komponenta1 from "./components/Komponenta1";
import Komponenta2 from "./components/Komponenta2"; */
import {
  Komponenta1,
  Komponenta2,
  Komponenta3,
  Komponenta4,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Komponenta1 />
      <Komponenta2 />
      <Komponenta3 />
      <Komponenta4 />
    </div>
  );
}

export default App;
