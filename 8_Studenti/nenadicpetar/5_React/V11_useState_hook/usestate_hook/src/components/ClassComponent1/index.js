import React, { Component } from "react";
import "./style.css";

class ClassComponent1 extends Component {
  constructor(props) {
    super(props);
    this.state = { animate: false };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.godine !== this.props.godine) {
      this.setState({ animate: true });
      setTimeout(() => this.setState({ animate: false }), 500);
    }
  }

  render() {
    return (
      <div className="user-card-classcomp">
        <p>Ime: {this.props.ime}</p>
        <p className={this.state.animate ? "animate" : ""}>
          Godine: {this.props.godine}
        </p>
      </div>
    );
  }
}

export default ClassComponent1;
