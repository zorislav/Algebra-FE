
import './App.css';

import { WelcomeFunction } from './Komponente';
import {WelcomeClass} from './Komponente';

//ili krace:
//import { WelcomeFunction,WelcomeClass } from './Komponente';




function App() {
  return (
    <div className="App">

    <WelcomeFunction />
    <WelcomeClass />

    </div>
  );
}

export default App;
