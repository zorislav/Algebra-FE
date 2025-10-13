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

const clickHandler = () => {
  alert("Kliknuo!");
};

function App() {
  return (
    <div className="App">
      <h1 style={styles.h1stil}>Hello</h1>
      <ColoredButton onClick={clickHandler} boja="red">
        Bok, ja sam crveni
      </ColoredButton>
      <ColoredButton boja="yellow">Bok, ja sam crveni</ColoredButton>
    </div>
  );
}

export default App;

const styles = {
  h1stil: {
    color: "blue",
    backgroundColor: "lightGray",
  },
};
