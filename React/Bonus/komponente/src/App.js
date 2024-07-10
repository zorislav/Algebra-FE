import React, { useState } from 'react';
import './App.css';

class ClassKomponenta extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      classStanje: "Class pocetno stanje"
    };

  }

  btnClickHandler(){
    this.setState({ classStanje: "Class novo stanje"});
  }
  // btnClickHandler = () => {
  //   this.setState({ classStanje: "Class novo stanje"});
  // }

  render(){

    const { classStanje } = this.state;
    const { ime, starost, grad, children, onAppSt } = this.props;

    return(
      <div style={classStyle}>
        {classStanje}
        <h2>{children} Komponenta</h2>
        <p>Ime: {ime}</p>
        <p>Starost: {starost}</p>
        <p>Grad: {grad}</p>
        <button onClick={this.btnClickHandler.bind(this)}>Promijeni lokalno stanje</button>
        <button onClick={() => onAppSt("App novo stanje iz class komponente")}>Promijeni App stanje</button>
      </div>
    );
  }
}

function FunkcijskaKomponenta({ ime, starost, grad, children, onAppSt }){

  const [fnStanje, setFnStanje] = useState("Fn pocetno stanje");

  function btnClickHandler(){
    setFnStanje("Fn novo stanje");
  }
  
   return (
    <div style={fnStyle}>
      {fnStanje}
      <h2>{children} Komponenta</h2>
      <p>Ime: {ime}</p>
      <p>Starost: {starost}</p>
      <p>Grad: {grad}</p>
      <button onClick={btnClickHandler}>Promijeni lokalno stanje</button>
      <button onClick={() => onAppSt("App novo stanje iz funkcijske komponente")}>Promijeni App stanje</button>
    </div>
  );
}


function App() {

  const [appStanje, setAppStanje] = useState("App pocetno stanje");

  function appStanjeHandler(novoStanje){
    setAppStanje(novoStanje);
  }

  return (
    <div className="App" style={appStyle}>
      {appStanje}
      <h1>App komponenta</h1>
      <FunkcijskaKomponenta ime="Ivica" starost={25} grad="Osijek" onAppSt={appStanjeHandler}>Funkcijska</FunkcijskaKomponenta> 
      <ClassKomponenta ime="Marica" starost={33} grad="Pula" onAppSt={appStanjeHandler}>Class</ClassKomponenta>
    </div>
  );
}

export default App;

const appStyle = {
  backgroundColor: 'lightgray',
  border: '1px solid black',
  padding: 10
};

const fnStyle = {
  backgroundColor: 'lightblue',
  border: '1px solid black',
  padding: 10
};

const classStyle = {
  backgroundColor: 'lightgreen',
  border: '1px solid black',
  padding: 10
};

