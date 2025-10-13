import { useSelector, useDispatch } from "react-redux";
import { RESET } from "../store/redux-store";

function MojaKomponenta1() {
  const brojac = useSelector((skl) => skl.counter);
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
