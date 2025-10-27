import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  handleUserChange = (event) => {
    const userName = event.target.value;
    this.setState({ userName });
  };

  handleUserSelected = (event) => {
    event.preventDefault();

    const { setUser } = this.props;
    const { userName } = this.state;
    setUser(userName);
    this.setState({ userName: "" });
  };

  render() {
    const { userName } = this.state;

    return (
      <form onSubmit={this.handleUserSelected}>
        <div style={styles.container}>
          <label style={styles.label} htmlFor="name">
            Github username:{" "}
          </label>
          <br />
          <input
            style={styles.input}
            id="name"
            type="text"
            placeholder="e.g. facebook"
            value={userName}
            onChange={this.handleUserChange}
          />
          <button style={styles.button}>GO!</button>
        </div>
      </form>
    );
  }
}

export default UserForm;

const styles = {
  container: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    marginTop: 10,
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
};
