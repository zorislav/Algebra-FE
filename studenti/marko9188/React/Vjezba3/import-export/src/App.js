import Person from "./Person";
import { suma,broj1,broj2 } from "./util";

import Osoba from './Person.js';
import {suma as zbroj} from './util.js';
import * as brojevi from './util.js';

import Auto from './components/Auto';

function App() {
  return (
    <div className="App">
        <p>{Person.name}</p>
        <p>
          {suma(5,3)}
        </p>
        <p>{suma(broj1,broj2)}</p>
        <p>{Osoba.name}</p>
        <p>{zbroj(3,4)}</p>
        <p>{brojevi.broj1}</p>
        <img alt='slika' />
        <Auto />
    </div>
  );
}

export default App;