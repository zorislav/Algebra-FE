import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Login from "./components/login";
import Msg from "./components/msg";
import Send from "./components/send";
import "/VSCODE_DEVELOPING/React/my_chat_app/src/css/app.css";


function App() {

  const initialChatState = {
    member: { username: "" },
    messages: []
  };
  const [chat, setChat] = useState(initialChatState);
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    if (chat.member.username !== "") {
      const drone = new window.Scaledrone("wCaetDPRBOlpPA0Q", {
        data: chat.member
      });
      setDrone(drone);
    }
  }, [chat.member]);

  useEffect(() => {
    if (chat.messages.length) {
      const scrollElement = document.getElementsByClassName("msg-list")[0];
      scrollElement.scrollTop = scrollElement.scrollHeight;
    }
  }, [chat.messages.length]);

  if (drone) {
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      chat.member.id = drone.clientId;
      setChat({ ...chat }, chat.member);

      const room = drone.subscribe("observable-room");

      room.on("message", (message) => {
        const { data, member, timestamp, id } = message;
        chat.messages.push({ member, data, timestamp, id });
        setChat({ ...chat }, chat.messages);
        /* console.log(chat); */
      });
    });
  }

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message
    });
  };

    
  const loginFormSubmit = (username) => {
    chat.member = {
      username: username
    };
    setChat({ ...chat }, chat.member);
  }
  
  
  return chat.member.username === "" ? (
      <Login loginFormSubmit={loginFormSubmit} />
        ) : (
          <div className="chat">
            <Header />
            <Msg messages={chat.messages} thisMember={chat.member} />
            <Send onSendMessage={onSendMessage} />      
          </div>
        );
}

export default App;
