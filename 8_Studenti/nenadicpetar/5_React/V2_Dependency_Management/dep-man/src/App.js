import randomstring from "randomstring";
import "./App.css";

function App() {
  return (
    <div>
      <p id="par1">Moj random string: {randomstring.generate()}</p>
      <p id="par2">Moj random string 2: {randomstring.generate()}</p>
    </div>
  );
}

export default App;
