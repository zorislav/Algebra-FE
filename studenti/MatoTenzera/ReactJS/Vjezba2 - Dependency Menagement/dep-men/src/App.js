import nekakavstring from 'randomstring';
import './App.css';

function App() {

  //const rnd = nekakavstring.generate(); video 43 01:53

  return (
    <div className="App">
      <p>Moi random string: {nekakavstring.generate()}</p>
    </div>
  );
}

export default App;
