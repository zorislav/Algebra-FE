import React from "react";
import { convertUnixTimestamp } from "./timestamp";
import "/VSCODE_DEVELOPING/React/my_chat_app/src/css/msg.css";

export default function Msg({ messages, thisMember }) {
  function renderMessage(message, index) {
    const { member, data, timestamp, id } = message;
    const thisMemberMsg = member.id === thisMember.id;
    const classNameLi = thisMemberMsg
      ? "msg-list-msg msg-list-msg--thisMember"
      : "msg-list-msg";

    const classNameMemberData = thisMemberMsg
      ? "msg-list-member-data msg-list-member-data--thisMember"
      : "msg-list-member-data";

    return document.getElementsByClassName("msg-list")[0].children[index - 1] &&
      document.getElementsByClassName("msg-list")[0].children[index - 1].dataset
        .id === member.id ? (
      <li className={classNameLi} key={id} data-id={member.id}>
        <div className="msg-list-text" title={convertUnixTimestamp(timestamp)}>
          {data}
        </div>
      </li>
    ) : (
      <li className={classNameLi} key={id} data-id={member.id}>
        <div className="msg-list-msg-container">
          <div className={classNameMemberData}>
            <span className="msg-list-username">
              {member.clientData.username}
            </span>
          </div>
          <div
            className="msg-list-text"
            title={convertUnixTimestamp(timestamp)}
          >
            {data}
          </div>
        </div>
      </li>
    );
  }

  return (
    <ul className="msg-list">
      {messages.map((m, index) => renderMessage(m, index))}
    </ul>
  );
}
