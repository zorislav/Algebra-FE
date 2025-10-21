import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Glavna from "./screens/glavna/Glavna";
import Lista from "./screens/lista/Lista";
import Prikaz from "./screens/prikaz/Prikaz";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Glavna />} />
          <Route path="/nalozi" element={<Lista />} />
          <Route path="/nalog/:id" element={<Prikaz />} />
          {/* <Route path='/nalog/:id/izmjena' element={}/>
      <Route path='/unos' element={}/>
      <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
