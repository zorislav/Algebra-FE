function App() {
  const name = "Petar";

  const user = {
    firstName: "Petar",
    lastName: "Nenadić",
  };

  const userOutput = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <p>Hello World!</p>
      <p>Moje ime je: {name}</p>
      <p>
        Moje ime i prezime je: {user.firstName} {user.lastName}
      </p>
      <p>Moje ime i prezime je: {userOutput}</p>
    </>
  );
}

export default App;
