import React from "react";

class Child1 extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("Child1 will mount");
  }

  componentDidMount() {
    console.log("Child1 did mount");
  }

  componentWillMount() {
    console.log("Child1 will unmount");
  }

  componentDidUpdate() {
    console.log("Child1 did update");
  }

  shouldComponentUpdate() {
    //Logika...

    return true;
  }

  handleCounter = () => {
    const { uvecaj } = this.props;
    uvecaj();
  };

  render() {
    const { brojac } = this.props;

    return (
      <>
        <h3>Child1</h3>
        <p>{brojac}</p>
        <button onClick={this.handleCounter}>Increase Counter</button>
        <br />
      </>
    );
  }
}

export default Child1;
