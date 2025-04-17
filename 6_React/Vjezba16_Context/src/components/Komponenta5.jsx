import React from 'react';
import Context, { Consumer } from '../context/Kontekst';

class Komponenta5 extends React.Component {

  static contextType = Context;

  render() {

    const { text, number } = this.context;
    const editText = `${text} preko funkcije, a poslani broj je: ${number}`;

    return (
      <>
        <h2>Komponenta 5</h2>
        <Consumer>{props => <p>Komponenta 5 ispisuje: {props.text}</p>}</Consumer>
        {editText}
      </>
    );
  }

}

export default Komponenta5;