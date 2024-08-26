import React, { useState } from "react";
import "./App.css";

function FunkcijskaKomponenta({ children, ime, starost, grad, onAppSt }) {
  const [fnStanje, setFnStanje] = useState("Fn početno stanje");

  function btnClickHandler(event) {
    setFnStanje("Fn novo stanje");
  }

  return (
    <>
      {fnStanje}
      <h2>{children}komponenta</h2>
      <p>Ime: {ime}</p>
      <p>starost: {starost}</p>
      <p>Grad: {grad}</p>
      <button onClick={btnClickHandler}>Promijeni lokalno stanje</button>
      <button onClick={null}>Promijeni App stanje</button>
    </>
  );

  return <h2>{children}komponenta</h2>;
}

class ClassKomponenta extends React.Component {
  render() {
    const { children } = this.props;
    return <h2>{children}Komponenta</h2>;
  }
}

function App() {
  const [appStanje, setAppStanje] = useState("App početno stanje");

  function appStanjeHandler(novoStanje) {
    setAppStanje("novo stanje");
  }

  return (
    <div className="App">
      {appStanje}
      <FunkcijskaKomponenta
        ime="Ivica"
        starost={25}
        grad="Osijek"
        onAppSt={appStanjeHandler}
      >
        Funkcijska{" "}
      </FunkcijskaKomponenta>
      <ClassKomponenta> Class </ClassKomponenta>
    </div>
  );
}

export default App;
