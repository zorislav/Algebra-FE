import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

function GithubRepos({ repos }) {
  if (!repos || repos.length <= 0) {
    return null;
  }

  return (
    <div>
      <p><strong>REPOSITORIES: </strong></p>
      <ListGroup>
        {repos.map(repo => (
          <ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default GithubRepos;

GithubRepos.propTypes = {
  repos: PropTypes.array,
};
