import React from "react";
import Context, { Consumer } from "../context/Kontekst";

class Komponenta5 extends React.Component {
  static contextType = Context;

  render() {
    const { text, number } = this.context;
    const editText = `${text}, a broj je ${number}`;

    return (
      <>
        <h2>Komponenta 5</h2>
        <Consumer>
          {(ctx) => (
            <p>
              {" "}
              {ctx.text} - {ctx.number}
            </p>
          )}
        </Consumer>
        <p>{editText}</p>
      </>
    );
  }
}

export default Komponenta5;
