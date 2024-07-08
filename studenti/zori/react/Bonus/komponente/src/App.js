import React, { useState } from 'react';
import './App.css';

function FunkcijskaKomponenta({children, ime, starost, grad, onAppSt}){

  const [fnStanje, setFnStanje] = useState("Fn početno stanje");

  function btnClickHandler(event) {
    setFnStanje("Fn novo stanje");
  }

  return (
    <>
      <p>{fnStanje}</p>
      <h2>{children} komponenta</h2>
      <p>Ime: {ime}</p>
      <p>Starost: {starost}</p>
      <p>Grad: {grad}</p>
      <button onClick={btnClickHandler}>Promijeni lokalno stanje</button>
      <button onClick={() => onAppSt("App novo stanje iz funkcijske komponente")}>Promijeni App stanje</button>
    </>
  );
  
}

class ClassKomponenta extends React.Component {

  constructor(){
    super();

    this.state = {
      classStanje: "Class početno stanje"
    }
  }

  // btnClickHandler() {
  //   this.setState({ classStanje: "Class novo stanje"});
  // }

  btnClickHandler = () => {
    this.setState({ classStanje: "Class novo stanje"});
  }

  render() {

    const { classStanje } = this.state;
    const { children, ime, starost, grad, onAppSt } = this.props;

    return (
      <>
        <p>{classStanje}</p>
        <h2>{children} komponenta</h2>
        <p>Ime: {ime}</p>
        <p>Starost: {starost}</p>
        <p>Grad: {grad}</p>
        {/* <button onClick={this.btnClickHandler.bind(this)}>Promijeni lokalno stanje</button> */}
        <button onClick={this.btnClickHandler}>Promijeni lokalno stanje</button>
        <button onClick={() => onAppSt("App novo stanje iz class komponente")}>Promijeni App stanje</button>
      </>
    ); 
  }
}

function App() {

  const [appStanje, setAppStanje] = useState("App početno stanje");

  function appStanjeHandler(novoStanje) {
    setAppStanje(novoStanje);
  }

  return (
    <div className="App">
      { appStanje }
      <h1>App Komponenta</h1>
      <FunkcijskaKomponenta ime="Ivica" starost={25} grad="Osijek" onAppSt={appStanjeHandler}>Funkcijska</FunkcijskaKomponenta>
      <ClassKomponenta ime="Marica" starost={33} grad="Pula" onAppSt={appStanjeHandler}>Class</ClassKomponenta>
    </div>
  );
}

export default App;
