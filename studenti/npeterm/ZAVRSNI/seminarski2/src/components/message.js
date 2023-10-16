import {useEffect, useRef} from 'react';
import React from 'react';


function Msgs({ messages, me }) {
    //testiranje
    console.log('me:', me);
    //----------------------
    //scroll
    const bottomRef = useRef(null);
    
    useEffect(() => {
      if (bottomRef && bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages]); 
  
    
    if (!messages || messages.length === 0) {
      return null; 
    }
  
    return (
      <ul className='ML'>
        {messages.map((m) => <Msg key={m.id} message={m} me={me} />)}
        <div ref={bottomRef}></div>
      </ul>
    );
  
function Msg({ message, me }) {
  //testiranje
  console.log('message:', message);
  console.log('me:', me);
  //--------------------------------
  // eslint-disable-next-line
  const { member, data, id } = message;
  const username = member && member.clientData ? member.clientData.username : me.username;
  const backgroundColor = member && member.clientData ? member.clientData.color : me.color;

  const isMe = member && member.id === me.id;
  const messageClass = isMe ? 'sent-message' : 'received-message';

  return (
    <li className={messageClass} >
      
      <div>
        <div className='un'>{username}</div>
        <span className='msg' style={{ backgroundColor: backgroundColor }}>{data}</span>
      </div>
    </li>
  );
}

}
  export default Msgs;