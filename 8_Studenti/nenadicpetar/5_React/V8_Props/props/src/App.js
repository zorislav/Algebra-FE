import FunctionComponent1 from "./components/FunctionComponent1";
import FunctionComponent2 from "./components/FunctionComponent2";
import ClassComponent1 from "./components/ClassComponent1";
import "./App.css";

function App() {
  const korisnici = [
    { ime: "Kata", godine: 36 },
    { ime: "Ana", godine: 73 },
    { ime: "Josip", godine: 68 },
  ];

  return (
    <div className="app-container">
      <h1>Popis korisnika</h1>
      <FunctionComponent1 ime={korisnici[0].ime} godine={korisnici[0].godine} />
      <ClassComponent1 ime={korisnici[1].ime} godine={korisnici[1].godine} />
      <FunctionComponent2 ime={korisnici[2].ime} godine={korisnici[2].godine}>
        <p>
          Ovo je children sadržaj koji se prikazuje unutar funkcijeske
          komponente 2.
        </p>
      </FunctionComponent2>
    </div>
  );
}

export default App;
