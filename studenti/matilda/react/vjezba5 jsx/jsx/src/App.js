import React from "react";
import "./App.css";

function App() {
  const name = "Ivan";

  const user = {
    firstName: "Luka",
    lastName: "Horvat",
  };

  const userOutput = `${user.firstName} - ${user.lastName}`;
  return (
    //<div className="App">
    <>
      {" "}
      {/* ili umjesto praznih zagrada upisati <React.Fragment> */}
      <p>Hello World!</p>
      <p>Moje ime je: {name}</p>
      <p>
        Moje ime je: {user.firstName} a prezime je {user.lastName}
        <p>Moje ime i prezime je: {userOutput}</p>
      </p>
      {/*    /*  </> </div> }  
 
 na kraju </React.Fragment> ako se koristi ovo, bez div-a */}
    </>
  );
}

export default App;
