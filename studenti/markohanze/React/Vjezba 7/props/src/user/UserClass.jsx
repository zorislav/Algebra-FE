import React from 'react';

class UserClass extends React.Component {

render() {

  return <p>Pozz, moje ime je {this.props.ime} i imam {this.props.godine} godina.</p>
}

}

export default UserClass;