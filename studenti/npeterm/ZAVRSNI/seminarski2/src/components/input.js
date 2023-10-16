import React, { useState } from 'react';

 function Input({ onSendMessage }) {
  const [text, setText] = useState('');

  function onChange(e) {
    const text = e.target.value;
    setText(text);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (text.trim() !== '') {
      onSendMessage(text);
      setText('');
    }
  }

  return (
    <form className='inpbox'  onSubmit={onSubmit}>
      <input className='innerinpbox'
        type="text"
        value={text}
        onChange={onChange}
        placeholder="Type your message...and press ENTER"
      />
      <button className='send' type="submit">Send</button>
    </form>
  );
}

export default Input;