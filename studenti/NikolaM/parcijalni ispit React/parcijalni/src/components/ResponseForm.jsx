import React from 'react';
import PropTypes from 'prop-types';

class ResponseForm extends React.Component {
  render() {
    const { userData, userRepos, onResetForm } = this.props;
    return (
      <div>
        {userData && (
          <div className="user-info">
            <h2>{userData.name}</h2>
            <img src={userData.avatar_url} alt='avatar' />
            <p><strong>Location:</strong> {userData.location}</p>
            <p><strong>Bio:</strong> {userData.bio}</p>
          </div>
        )}

        <div className="repo-list">
          <h2>Repositories:</h2>
          <ul>
            {userRepos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>

        <button onClick={onResetForm} className='button2'>Reset</button>
      </div>
    );
  }
}

ResponseForm.propTypes = {
    userData: PropTypes.object, 
    userRepos: PropTypes.array, 
    onResetForm: PropTypes.func.isRequired, 
  };

export default ResponseForm;
