import Person from "./Person";
import { suma,broj1,broj2 } from "./util";

function App() {
  return (
    <div className="App">
        <p>{Person.name}</p>
        <p>
          {suma(5,3)}
        </p>
        <p>{suma(broj1,broj2)}</p>
    </div>
  );
}

export default App;
