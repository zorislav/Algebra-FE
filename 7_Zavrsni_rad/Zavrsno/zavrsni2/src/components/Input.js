import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Input extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onSendMessage } = this.props;
    const { text } = this.state;

    onSendMessage(text);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="input-container">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autoFocus
          />
          <button className="send-button">Send</button>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  onSendMessage: PropTypes.func
};
