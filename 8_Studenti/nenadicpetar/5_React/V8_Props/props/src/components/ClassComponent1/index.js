import React from "react";
import "./style.css";

class ClassComponent1 extends React.Component {
  render() {
    return (
      <p className="class-text">
        Ime: {this.props.ime}, Godine : {this.props.godine}
      </p>
    );
  }
}

export default ClassComponent1;
