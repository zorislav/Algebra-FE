import React from "react";
import "./style.css";

class ClassComponent1 extends React.Component {
  render() {
    return (
      <p className="user-card-classcomp">
        <p>Ime: {this.props.ime}</p>
        <p>Godine : {this.props.godine}</p>
      </p>
    );
  }
}

export default ClassComponent1;
