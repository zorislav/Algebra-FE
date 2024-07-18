import { useSelector } from "react-redux";

function MojaKomponenta() {
  const brojac = useSelector((skl) => skl.counter);
  return (
    <>
      <h2>Moja Komponenta</h2>
      <p>Moja komponenta koristi redux store: {brojac}</p>
    </>
  );
}

export default MojaKomponenta;
