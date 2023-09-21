import randomstring from 'randomstring';

import logo from './logo.svg';
import './App.css';

const ime='Perica';
const prezime='Horvat';
function App() {
  return (
    <div className="App">
        <p> Moj randomstring: {randomstring.generate()}</p>
        <p>
          Moje ime je:  {ime +' '+ prezime}
        </p>
    </div>
  );
}

export default App;
