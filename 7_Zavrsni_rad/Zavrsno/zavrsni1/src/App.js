import React, { Component } from 'react';
import { Input, Message } from './components';
import { MemberGenerator } from './services';
import './App.css';

export default class App extends Component {
  state = {
    messages: [],
    currentMember: MemberGenerator.get(),
  };

  handleSendMessage = newMessage => {
    const { messages } = this.state;
    this.setState({
      messages: [...messages, newMessage],
    });
  };

  render() {
    const { messages, currentMember } = this.state;

    return (
      <div className="app">
        <div className="header">
          <h1>My Chat App</h1>
        </div>
        <ul className="message-list">
          {messages.map(message => (
            <Message message={message} member={currentMember}/>
          ))}
        </ul>
        <Input onSendMessage={this.handleSendMessage} />
      </div>
    );
  }
}
