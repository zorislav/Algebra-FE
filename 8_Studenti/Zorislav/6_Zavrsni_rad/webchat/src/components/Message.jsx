export default function Message({ message, currentMemberId}){

  const { member, text, id } = message;
  const isMyMessage =  id === currentMemberId;

  const className = isMyMessage ? 'message current' : 'message';

  return (
    <li className={className}>
      <span className='avatar' style={{ backgroundColor: member.color }}></span>
      <div className='message-content'>
        <div className='username'>{member.username}</div>
        <div className='text'>{text}</div>
      </div>
    </li>
  );
}