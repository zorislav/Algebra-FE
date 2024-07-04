import React from 'react';
import './App.css';

function App() {

  const name = "Ivan";
  
  const user = {
    firstName: "Luka",
    lastName: "Horvat"
  };

  const userOutput = `${user.firstName} - ${user.lastName}`;

  return (
    <>
      <p>Hello World!</p>
      <p>Moje ime je: {name}</p>
      <p>Moje ime je: {user.firstName} a prezime je: {user.lastName}</p>
      <p>Moje ime i prezime je: {userOutput}</p>
    </>
  );
}

export default App;
