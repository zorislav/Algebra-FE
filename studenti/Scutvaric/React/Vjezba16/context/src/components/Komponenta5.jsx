import React from 'react';
import Context, { Consumer } from '../context/context'

class Komponenta5 extends React.Component {

    static contextType = Context;
    

    render (){

        const { text, number } = this.context;
        const editedText = `${text} preko funkcije a poslani broj je ${number}`;

        return (
        <>
        <h2>Komponenta 5</h2>
        <Consumer>
        { props => <p>{props.text}</p>}
        </Consumer>
        {editedText}
        </>
        );
    }
}

export default Komponenta5;