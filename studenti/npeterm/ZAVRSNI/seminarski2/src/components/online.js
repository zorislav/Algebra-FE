import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Member({ id, clientData, isMe }) {
  if (!clientData || !clientData.username) {
    return null;
  }

  const { username, color } = clientData;
  return (
    <div className='membi'>
      <div className='un' style={{ backgroundColor: color }} />
      {username} {isMe ? ' (you)' : ''}
    </div>
  );
}

function Members({ members, me }) {
  const uniqueMemberIds = new Set();

  const uniqueMembers = members.filter((member) => {
    if (uniqueMemberIds.has(member.id)) {
      return false; 
    }
    uniqueMemberIds.add(member.id);
    return true;
  });

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Online Members
        <div className='membcnt'>
        {members.length} user{members.length === 1 ? '' : 's'} online
      </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {uniqueMembers.map((m) => (
          <Dropdown.Item key={m.id}>
            <Member id={m.id} clientData={m.clientData} isMe={m.id === me.id} />
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Members;