// import Komponenta5 from "./Komponenta5";

import { useContext } from "react";

import Context, { Consumer } from "../context/context";

const Komponenta4 = () => {

    const ctx = useContext(Context);
    const { text, number } = ctx;
    const editedText = `${text} preko funkcije a poslani broj je ${number}`;

    return (
        <>
        <h2>Komponenta4</h2>
        <Consumer>
            { props => <p>{props.text}</p>}
        </Consumer>
        <p>{editedText}</p>
        </>
    );
}

export default Komponenta4;