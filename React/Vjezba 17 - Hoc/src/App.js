const withColor = (Element) => ({color, ...otherProps}) => (
  <Element {...otherProps} style={{backgroundColor: color}} />
);

const Button = (props) => {
  return <button {...props}></button>;
}

const ColoredButton = withColor(Button);

function App() {
  return (
    <>
      <h1>Hello</h1>
      <ColoredButton color="red">Ja sam crven</ColoredButton>
      <ColoredButton color="yellow">Ja sam zut</ColoredButton>
    </>
  );
}

export default App;
