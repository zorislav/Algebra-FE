
import './App.css';

function Button(props) {

  return <button {...props}></button>
}

function withColor(Element) {
  return function({boja, ...otherProps}) {
    return <Element {...otherProps} style={{ backgroundColor: boja}} />;
  }
}

const ColoredButton = withColor(Button);

function clickHandler()  {
  alert("Kliknuo");
}

function App() {
  return (
    <div className="App">
      <h1>helllllo</h1>
      <button>Moj button</button>
      <ColoredButton boja="red">bok ja sam crveni</ColoredButton>
      <ColoredButton boja="yellow">bok ja sam zuti</ColoredButton>
      <ColoredButton boja="green" onClick={clickHandler}>bok ja sam zelen</ColoredButton>
    </div>
  );
}

export default App;
