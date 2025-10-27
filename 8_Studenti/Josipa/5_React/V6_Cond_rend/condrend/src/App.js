import "./App.css";

function ConditionalRendering() {
  const broj = 2;
  const isLoading = true;

  const tekst = broj === 1 ? <p>Broj je jedan</p> : <p>Broj nije jedan</p>;
  const ls = <p>Loading spinner...</p>;

  return (
    <>
      <h2>Number?</h2>
      {tekst}
      {
        //makni ls i odkomentiraj paragraf
        isLoading && ls
        //<p>Loading spinner...</p>
      }
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ConditionalRendering />
    </div>
  );
}

export default App;
