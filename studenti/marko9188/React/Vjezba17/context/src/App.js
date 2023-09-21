
import './App.css';

function hocFunkcija (Komponenta){
  return function IzmjenjenaKomponenta({boja, ...props}) {
    return <Komponenta {...props} style={{color:boja}}/>;
  }
}

const withColor = (Element) => ({color, ...otherProps}) =>(
  <Element {...otherProps} style={{backgroundColor: color}} />
)

const HocKomponenta = hocFunkcija(MojaKomponenta);

const Button = (props) => {
  return <button {...props}></button>;
}

const ColoredButton = withColor(Button);

function MojaKomponenta(props) {
  return <p {...props}>Ovo je moja Komponenta</p>;
}



function App() {
  return (
    <div className="App">
        <h>HOC</h>
        <MojaKomponenta />
        <HocKomponenta />
        <HocKomponenta boja={'blue'}/>
        <HocKomponenta boja={'green'}/>
        <HocKomponenta boja={'red'}/>
        <Button> Ja sam button</Button>
        <ColoredButton color='yellow'> Ja sam button</ColoredButton>
        <ColoredButton color='green'> Ja sam button</ColoredButton>
    </div>
  );
}

export default App;
