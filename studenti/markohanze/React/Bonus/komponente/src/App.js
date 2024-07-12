import React, { useState } from 'react';
import './App.css';

function FunkcijskaKomponenta({children, ime, starost, grad}){

  const [fnStanje, setFnStanje] = useState("Fn početno stanje");

function btnCLickHandler(event) {
 setFnStanje("Fn novo stanje");
}

  return (
  <>
    {fnStanje}
      <h2>{children} komponenta</h2>
      <p>Ime: {ime}</p>
      <p>Starost: {starost}</p>
      <p>grad: {grad}</p>
      <button onClick={btnCLickHandler}>Promjeni lokalno stanje</button>
      <button onClick={null}>promjeni app stanje</button>
  </>
  );

}

class ClassKomponenta extends React.Component {

  render() {

    const { children } = this.props;

    return <h2>{children} kompnenta</h2>;
  }

}

function App() {

 const [appStanje, setAppStanje] = useState("app pocetno stanje");

  return (
    <div className="App">
    { appStanje }
    <h1>app komponenta</h1>
     <FunkcijskaKomponenta ime="ivica" starost={25} grad="osijek">Funkcijska</FunkcijskaKomponenta>
     <ClassKomponenta>Class</ClassKomponenta>
    </div>
  );
}

export default App;
