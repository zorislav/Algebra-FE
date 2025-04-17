import React from 'react';
import PropTypes from 'prop-types';

export default function Message({ message, member }) {
  const { color, username } = member;

  return (
    <li className="message current">
      <span className="avatar" style={{ backgroundColor: color }} />
      <div className="message-content">
        <div className="username">{username}</div>
        <div className="text">{message}</div>
      </div>
    </li>
  );
}

Message.propTypes = {
  member: PropTypes.shape({
    color: PropTypes.string,
    username: PropTypes.string,
  }),
  message: PropTypes.string,
};
