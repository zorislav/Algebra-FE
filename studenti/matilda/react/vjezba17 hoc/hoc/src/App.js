import "./App.css";

function Button(props) {
  return <button {...props}></button>;
}

function withColor(Element) {
  return function ({ boja, ...otherProps }) {
    return <Element {...otherProps} style={{ backgroundColor: boja }} />;
  };
}

const ColoredButton = withColor(Button);
function clickHandler() {
  alert("Kliknuo");
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <button>Moj button</button>
      <ColoredButton boja="red">Bok, ja sam crveni</ColoredButton>
      <ColoredButton boja="yellow">Bok, ja sam žuti</ColoredButton>
      <ColoredButton boja="green" onClick={clickHandler}>
        Bok, ja sam zelen
      </ColoredButton>
    </div>
  );
}

export default App;
