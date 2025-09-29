import React from "react";

class UserClass extends React.Component {
  render() {
    const { ime, years } = this.props;

    return (
      <p>
        Pozdrav, moje ime je {ime} i imam {years} godina.
      </p>
    );
  }
}

export default UserClass;
