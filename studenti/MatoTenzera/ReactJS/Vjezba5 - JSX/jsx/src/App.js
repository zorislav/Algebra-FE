import React from 'react'; //za react fragment
import './App.css';

function App() {

  const name = "ivan"
  const user = {
    firstName: "luka",
    lastName: "horvat"
  };

  const userOutput = ` ${user.firstName} - ${user.lastName}`;

  return (

  <React.Fragment>

    <p>hello world</p>
    <p>moje ime je : {name}</p>
    <p>moje ime je : {user.lastName} a prezime je : {user.lastName}</p>
    <p>moje ime i prezime je : {userOutput}</p>

  </React.Fragment>

  );

}

export default App;

// alternativa <React.Fragment></React.Fragment> je prazne zagrade <> </> sto cemo cesto vidjati


