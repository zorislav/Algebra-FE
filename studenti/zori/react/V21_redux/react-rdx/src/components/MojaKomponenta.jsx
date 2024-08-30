import { useSelector } from "react-redux";

function MojaKomponenta() {

  const brojac = useSelector(skl => skl.counter);

  return (
    <>
      <h2>Moja Komponenta</h2>
      <p>I moja komponenta koristi redux store: {brojac}</p>
    </>
  );
}

export default MojaKomponenta;