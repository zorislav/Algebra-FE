import React from 'react';

import './App.css';

function App() {

  const name = "Ivan";

  const user = {
    firstName: 'Ivan',
    lastName: 'Horvat'
  };
  
  const userOutput = `${user.firstName} ${user.lastName}`;

  return (
    <div className='App'>
       <>
        <p>Hello World!</p>
        <p>Moje ime je: {name}</p>
        <p>Moje ime i prezime je {user.firstName} {user.lastName}</p>
        <p>Moje ime i prezime je: {userOutput}</p>
        </>
    </div>
  );
}

export default App;
