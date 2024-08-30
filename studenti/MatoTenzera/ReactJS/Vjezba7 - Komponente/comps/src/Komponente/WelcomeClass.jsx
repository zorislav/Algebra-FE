
import React from 'react'; // ovo je potrebno zbog definiranja classom 
//definiranje klasom

class WelcomeClass extends React.Component { //kompon welcomeclass mora naslijedjivati ovu react.comp komponentu odnosno klasu!

    render () {
      return <h2>Komponenta definirana klasom.</h2>
    };
  
  }

  export default WelcomeClass;