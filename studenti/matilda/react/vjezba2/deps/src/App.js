import "./App.css";
import randomstring from "randomstring";

function App() {
  const rnd = randomstring.generate();
  return (
    <div className="App">
      <p>Moj random string: {rnd} </p>
    </div>
  );
}

export default App;
