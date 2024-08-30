import React from "react";

class UserClass extends React.Component {
  render() {
    /* const {ime,godine} = this.props; umjesto ovog doli */

    return (
      <p>
        Pozdrav, moje ime je {this.props.ime} i imam {this.props.godine} godina.
      </p>
    );
  }
}

export default UserClass;
