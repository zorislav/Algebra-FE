import { useSelector, useDispatch } from "react-redux";
import { RESET } from "../redux-store";

function MojaKomponenta1() {
  const brojac = useSelector((sk1) => sk1.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Moja Komponenta 1</h2>
      <p>I moja komponenta koristi Redux store: {brojac}</p>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </>
  );
}

export default MojaKomponenta1;
