import React from 'react';


class Input extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { onSendMessage } = this.props;
    const { text } = this.state;

    // Poslati poruku
    onSendMessage(text);

    this.setState({ text: ''});
  }

  render(){

    const { text } = this.state;

    return (
      <div className='input-container'>
        <form onSubmit={this.handleSubmit}>
          <input id='message' type='text' placeholder='Enter your message' value={text} onChange={this.handleChange} autoFocus />
          <button className='send-button'>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;