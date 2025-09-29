import { v4 as uuidv4 } from "uuid";
import randomstring from "randomstring";

import "./App.css";

function App() {
  const myId = uuidv4();
  const myId2 = randomstring.generate(8);

  return (
    <div className="App">
      <p>Moj random generirani ID: {myId}</p>
      <p>Moj drugi random generirani ID: {myId2}</p>
    </div>
  );
}

export default App;
