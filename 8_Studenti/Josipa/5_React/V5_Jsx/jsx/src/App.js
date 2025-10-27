import React from "react";
import "./App.css";

function App() {
  const name = "Ivan";
  const user = {
    firstName: "Luka",
    lastName: "Horvat",
  };

  const userOutput = `${user.firstName} ${user.lastName}`;

  // return (
  //   <div className="App">
  //     <p>Hello World</p>
  //     <p>Moje ime je: {name}</p>
  //     <p>
  //       Moje ime je: {user.firstName} a prezime je: {user.lastName}
  //     </p>
  //     <p> Moje ime i prezime je: {userOutput}</p>
  //   </div>
  // );

  return (
    <React.Fragment>
      <p>Hello World</p>
      <p>Moje ime je: {name}</p>
      <p>
        Moje ime je: {user.firstName} a prezime je: {user.lastName}
      </p>
      <p> Moje ime i prezime je: {userOutput}</p>
    </React.Fragment>
  );

  //skračena verzija korištenja React.Fragment
  // import React from "react"; - se gore briše i aplikacija nam normalno radi
  // return (
  //   <>
  //     <p>Hello World</p>
  //     <p>Moje ime je: {name}</p>
  //     <p>
  //       Moje ime je: {user.firstName} a prezime je: {user.lastName}
  //     </p>
  //     <p> Moje ime i prezime je: {userOutput}</p>
  //   </>
  // );
}

export default App;
