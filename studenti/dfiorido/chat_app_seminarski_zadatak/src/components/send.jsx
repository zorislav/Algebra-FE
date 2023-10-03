import React, { useState } from "react";
import "/VSCODE_DEVELOPING/React/my_chat_app/src/css/send.css";



export default function Send({ onSendMessage }) {
    const initialState = {
      text: ""
    };
  
    const [state, setState] = useState(initialState);
  
    function onChange(e) {
      setState({ text: e.target.value });
    }
  
    function onSubmit(e) {
      e.preventDefault();
      const input = document.getElementsByClassName("msg-form-input")[0];
      if (state.text === "") {
        input.placeholder = "Polje ne može biti prazno...";
      } else {
        onSendMessage(state.text);
        setState({ text: "" });
        input.placeholder = "Upiši poruku...";
        input.focus();
      }
    }
  
    return (
      <div className="chat-input">
        <form className="msg-form" onSubmit={(e) => onSubmit(e)}>
          <input
            className="msg-form-input"
            onChange={(e) => onChange(e)}
            value={state.text}
            type="text"
            placeholder="Upiši poruku..."
            autoFocus={true}
          />
          <button className="msg-form-btn">Pošalji poruku</button>
        </form>
      </div>
    );
  }