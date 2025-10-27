//import React from "react";
import "./App.css";

import WelcomeFunction from "./components/WelcomeFunction";
import WelcomeClass from "./components/Welcome Class";

// function WelcomeFunction() {
//   // Kod koji se izvršava prilikom svakog renderiranja

//   return <h2>Welcome! Komponenta definirana funkcijom.</h2>;
// }

// class WelcomeClass extends React.Component {
//   // constructor() {
//   //   super();

//   //   //inicijalizacija
//   // }

//   render() {
//     // Kod koji se izvršava prilikom svakog renderiranja

//     return <h2>Welcome! Komponenta definirana klasom.</h2>;
//   }
// }

function App() {
  return (
    <div className="App">
      <WelcomeFunction />
      <WelcomeClass />
    </div>
  );
}

export default App;
