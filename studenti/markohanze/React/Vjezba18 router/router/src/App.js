import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Index() {

  return (
<>
  <h1>Velkom tu rauter</h1>
  <p>ovo je primjer koristenja routera</p>
  <p>Sad sam na početnoj stranici</p>
</>

  );

}

function Komponenta1() {

  return(
<>
<h1>welkam tu komponenta 1</h1>
<p>ovo je primjer koristenja routera</p>
<p>sad sam na komponenti 1</p>
</>

  );
};

function Komponenta2() {

  return (
<>
  <h1> welkam to komponenta2</h1>
  <p>ovo je primjer koristenja routera</p>
<p>sad sam na komponenti 2</p>
</>

  );
};

function NotFound( ) {

  return(
<>
  <h1>welcome to router</h1>
  <p>nije pronadeno</p>
</>

  )
}

function App() {
  return (
    <div className="App">
    <nav>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/k1" >Komponmenta 1</Link>
        </li>
        <li>
          <Link to="/k2" >Komponenta 2</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={ <Index /> } />
      <Route path="/k1" element={ <Komponenta1 /> }/>
      <Route path="/k2" element={ <Komponenta2 /> }/>
      <Route path="*" element={ <NotFound /> }/>
    </Routes>

    </div>
  );
}

export default App;
