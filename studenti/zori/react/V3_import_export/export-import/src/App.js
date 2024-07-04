import './App.css';
import Person from './Person.js';
import { suma } from './util.js';
import { broj1, broj2 } from './util.js';
import Osoba from './Person.js';
import { suma as zbroj } from './util.js';
import * as brojevi from './util.js';

function App() {
  return (
    <div className="App">
      <p>{Person.name}</p>
      <p>{suma(5,3)}</p>
      <p>{suma(broj1,broj2)}</p>
      <p>{Osoba.name}</p>
      <p>{zbroj(5,3)}</p>
      <p>{suma(brojevi.broj1, brojevi.broj2)}</p>
    </div>
  );
}

export default App;
