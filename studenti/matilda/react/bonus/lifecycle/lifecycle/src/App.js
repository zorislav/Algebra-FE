import React from "react";
import "./App.css";

class ClassKomponenta extends React.Component {
  componentWillMount() {
    alert("ClassKomponenta will mount");
  }

  render() {
    return (
      <>
        <h2>ClassKomponenta</h2>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <ClassKomponenta />
    </div>
  );
}

export default App;
