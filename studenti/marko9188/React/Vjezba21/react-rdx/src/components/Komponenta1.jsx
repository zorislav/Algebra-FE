import { useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { ADD_NESTO } from "../store/redux-store";

const Komponenta1 = () => {
    const [broj,setBroj] = useState(0);
    const brojac = useSelector (state => state.counter);
    const dispatch = useDispatch();

    const buttonClickHandler = () => {
        dispatch({type: ADD_NESTO, payload: +broj})
    }
    const inputChangeHandler = (event) =>{
        setBroj(event.target.value)
    }
    return(
        <>
        <p>Opet prikazujem stanje:{brojac}</p>
        <input type="number" onChange={inputChangeHandler} value={broj} />
        <button onClick={buttonClickHandler}>Povecaj</button>
        </>
        
    )
}

export default Komponenta1;