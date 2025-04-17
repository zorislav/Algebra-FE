import React from 'react';
import PropTypes from 'prop-types';

export default function Message({ message, currentMemberId }) {
  const { member, text, id } = message;
  const isMyMessage = id === currentMemberId;

  const className = isMyMessage ? 'message current' : 'message';

  return (
    <li className={className}>
      <span className="avatar" style={{ backgroundColor: member.color }} />
      <div className="message-content">
        <div className="username">{member.username}</div>
        <div className="text">{text}</div>
      </div>
    </li>
  );
}

Message.propTypes = {
  currentMemberId: PropTypes.string,
  message: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    member: PropTypes.shape({
      username: PropTypes.string,
      color: PropTypes.string,
    }),
  }),
};
