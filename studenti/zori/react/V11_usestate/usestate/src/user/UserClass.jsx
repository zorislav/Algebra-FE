import React from 'react';

class UserClass extends React.Component {

  render() {

    const {ime, godine} = this.props;

    return <p>Pozdrav, moje ime je  {ime} i imam {godine} godina.</p>
  }
}

export default UserClass;