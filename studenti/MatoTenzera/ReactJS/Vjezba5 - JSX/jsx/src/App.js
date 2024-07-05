
import './App.css';

function App() {


  const name = "ivan";
  const user = {
    firstName:"luka",
    lastName: "horvat"
  };

  const userOutput = `${user.firstName} - ${user.lastName}`;



  return (
    <div className="App">
      <p>hello world</p>
      <p>moje ime je: {name}</p>
      <p>moje ime je: {user.firstName} a prezime je:{user.lastName} </p>
      <p>moje ime i prezime je:{userOutput}</p>
    </div>
  );
}

export default App;
