import React, { Component } from "react";
import { Input, Message } from "./components";
import { MemberGenerator, Scaledrone } from "./services";
import "./App.css";

export default class App extends Component {
  state = {
    messages: [],
    currentMemberId: null
  };

  constructor(props) {
    super(props);

    const config = {
      member: MemberGenerator.get(),
      onInit: this.onInit,
      onMessageReceived: this.onMessageReceived
    };

    this.drone = new Scaledrone(config);
  }

  onInit = currentMemberId => this.setState({ currentMemberId });

  onMessageReceived = newMessage => {
    const { messages } = this.state;
    this.setState({
      messages: [...messages, newMessage]
    });
  };

  render() {
    const { messages, currentMemberId } = this.state;

    return (
      <div className="app">
        <div className="header">
          <h1>My Chat App</h1>
        </div>
        <ul className="message-list">
          {messages.map(message => (
            <Message message={message} currentMemberId={currentMemberId} />
          ))}
        </ul>
        <Input onSendMessage={this.drone.sendMessage} />
      </div>
    );
  }
}
