import Osoba from './Osoba';
import './App.css';
import {suma} from './Util';
import { broj1,broj2 } from './Util';
import Osoba1 from './Osoba';
import {suma as zbroj} from './Util';
import * as brojevi from './Util';

function App() {
  return (
    <div className="App">

      <p>{Osoba.name}</p>

      <p>{suma(5,3)}</p>

      <p>{suma(broj1,broj2)}</p>

      <p>{Osoba1.name}</p>

      <p>{zbroj(5,3)}</p>

      <p>{suma(brojevi.broj1,brojevi.broj2)}</p>

    </div>
  );
}

export default App;
