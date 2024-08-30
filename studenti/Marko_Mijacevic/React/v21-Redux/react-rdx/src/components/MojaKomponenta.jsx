import { useSelector } from "react-redux";


function MojaKomponenta(){

    const brojac =useSelector(skl => skl.counter);

    return(
        <>
            <h2>Moja Function Komponenta</h2>
            <p>I Moja Function Komponenta koristi redux store: {brojac}</p>
        </>
    );
}

export default MojaKomponenta;