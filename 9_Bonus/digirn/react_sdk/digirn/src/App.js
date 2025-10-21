import { useEffect, use } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { HamburgermenuContext} from './context/HamburgermenuProvider';

import './App.css';

import Glavna from './screens/glavna/Glavna';
import Header from './components/header/Header';
import Lista from './screens/lista/Lista';
import Prikaz from './screens/prikaz/Prikaz';
import Unos from './screens/unos/Unos';
import Izmjena from './screens/Izmjena/Izmjena';
import Nema from './screens/nema/Nema';

function App() {

  const hamburger = use(HamburgermenuContext);

  const handleOutsideClick = () => {
    hamburger.closeHamburger();  
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <div className="App" onClick={handleOutsideClick}>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
            <Routes>
              <Route path='/' element={<Glavna />}/>
              <Route path='/nalozi' element={<Lista />}/>
              <Route path='/nalog/:id' element={<Prikaz />}/>
              <Route path='/nalog/:id/izmjena' element={<Izmjena />}/>
              <Route path='/unos' element={<Unos />}/>
              <Route path='*' element={<Nema />}/>
            </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
