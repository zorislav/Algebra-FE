import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    textAlign: 'justify',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 64,
    display: 'inline',
    marginLeft: 36,
  },
};

export default function GitHubUser({ user }) {
  if (!user) {
    return null;
  }

  const { avatar_url, bio, name, location } = user;

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <img src={avatar_url} alt="No logo" style={styles.image} />
        <span style={styles.name}>{name}</span>
      </div>
      <p><strong>BIO: </strong>{bio}</p>
      <p><strong>LOCATION: </strong>{location}</p>
    </div>
  );
}

GitHubUser.propTypes = {
  user: PropTypes.object,
};