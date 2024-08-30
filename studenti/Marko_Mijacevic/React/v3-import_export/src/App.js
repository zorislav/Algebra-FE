
import './App.css';
import Person from './Person.js';
import { suma } from './util';
import { broj1, broj2 } from './util';
import Osoba from './Person.js';
import { suma as zbroj } from './util';
import * as brojevi from './util';

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
