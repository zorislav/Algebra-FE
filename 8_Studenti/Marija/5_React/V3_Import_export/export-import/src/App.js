import Person from "./person.js";
import Osoba from "./person.js";
import { suma } from "./util.js";
import { broj1, broj2 } from "./util.js";
import { suma as zbroj } from "./util.js";
import * as brojevi from "./util.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p>{Person.name}</p>
      <p>{Osoba.name}</p>
      <p>{suma(5, 2)}</p>
      <p>{suma(broj1, broj2)}</p>
      <p>{zbroj(10, 40)}</p>
      <p>{suma(brojevi.broj1, brojevi.broj2)}</p>
    </div>
  );
}

export default App;
