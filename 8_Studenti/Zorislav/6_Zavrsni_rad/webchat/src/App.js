import React from 'react';
import './App.css';
import { Input, Message } from './components';
import { Scaledrone, MemberGenerator } from './services';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      messages: [],
      currentMemberId: null
    }
  }

  componentWillMount(){

    const config = {
      member: MemberGenerator.get(),
      onInit: this.onInit,
      onMessageReceived: this.onMessageReceived
    } 

    this.drone = new Scaledrone(config);
  }

  onInit = (currentMemberId) => {
    this.setState({ currentMemberId })
  }

  onMessageReceived = (newMessage) => {
    const { messages } = this.state;
    this.setState({
      messages: [...messages, newMessage]
    });
  }
  
  render(){

    const { messages, currentMemberId } = this.state;

    return (
      <div className="app">
        <div className='header'>
          <h1>My Chat App</h1>
        </div>
        <ul className='message-list'>
          {
            messages.map((message, index) => (<Message key={index} message={message} currentMemberId={currentMemberId} />))
          }
        </ul>
        <Input onSendMessage={this.drone.sendMessage} />
      </div>
    );
  }
}

export default App;
