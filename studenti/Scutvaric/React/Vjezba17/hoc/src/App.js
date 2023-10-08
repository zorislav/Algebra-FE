// import './App.css';

// function hocFunkcija (Komponenta) {
//   return function IzmjenjenaKomponenta({boja, ...props}) {
//     return <Komponenta {...props} style={{color: boja}} />;
//   }
// }

// const HocKomponenta = hocFunkcija(MojaKomponenta);


// function MojaKomponenta(props) {
//   return <p {...props}> Ovo je moja komponenta</p>
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>HOC</h1>
//       <MojaKomponenta/>
//       <HocKomponenta/>
//       <HocKomponenta boja={'blue'}/>
//       <HocKomponenta boja={'red'}/>
//       <HocKomponenta boja={'green'}/>
//     </div>
//   );
// }

// export default App;

import './App.css';

function hocFunkcija (Komponenta) {
  return function IzmjenjenaKomponenta({boja, ...props}) {
    return <Komponenta {...props} style={{color: boja}} />;
  }
}

const withColor = (Element) => ({color, ...otherProps}) => (
  <Element {...otherProps} style={{backgroundColor: color}}/>
);

const HocKomponenta = hocFunkcija(MojaKomponenta);


function MojaKomponenta(props) {
  return <p {...props}> Ovo je moja komponenta</p>
}

const Button = (props) => {
  return <button {...props}></button>;
}

const ColoredButton = withColor(Button);

function App() {
  return (
    <div className="App">
      <h1>HOC</h1>
      <MojaKomponenta/>
      <HocKomponenta/>
      <HocKomponenta boja={'blue'}/>
      <HocKomponenta boja={'red'}/>
      <HocKomponenta boja={'green'}/>
      <Button>Ja sam button</Button>
      <ColoredButton color="yellow">Ja sam button</ColoredButton>
      <ColoredButton color="green">Ja sam button</ColoredButton>
    </div>
  );
}

export default App;
