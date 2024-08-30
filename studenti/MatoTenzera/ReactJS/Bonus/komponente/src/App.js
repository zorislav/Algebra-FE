import React,{useState} from 'react';
import './App.css';

function FunkcijskaKomp(){
  return <p>funkcijska komponenta</p>
}

class ClassKomp extends React.Component {
  render(){
    return <p>Class komponenta</p>
  }
}

function App() {

  const [appStanje,setAppStanje] = useState("app pocetno stanje");

  return (
    <div className="App">
      {appStanje}
      <FunkcijskaKomp />
      <ClassKomp />
    </div>
  );
}

export default App;
