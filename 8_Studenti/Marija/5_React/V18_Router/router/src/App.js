import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

function Index() {
  return (
    <>
      <h1>Welcome to Router!</h1>
      <p>Ovo je primjer korištenja Routera</p>
      <p>Sad smo na početnoj stranici.</p>
    </>
  );
}

function Komponenta1() {
  return (
    <>
      <h1>Welcome to Komponenta1!</h1>
      <p>Ovo je primjer korištenja Routera</p>
      <p>Sad smo na Komponenti 1.</p>
    </>
  );
}

function Komponenta2() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Welcome to Komponenta2!</h1>
      <p>Ovo je primjer korištenja Routera</p>
      <p>Sad smo na Komponenti 2.</p>
      <button onClick={clickHandler}>Home</button>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/komponenta1">Komponenta 1</Link>
          </li>
          <li>
            <Link to="/komponenta2">Komponenta 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/komponenta1" element={<Komponenta1 />} />
        <Route path="/komponenta2" element={<Komponenta2 />} />
      </Routes>
    </div>
  );
}

export default App;
