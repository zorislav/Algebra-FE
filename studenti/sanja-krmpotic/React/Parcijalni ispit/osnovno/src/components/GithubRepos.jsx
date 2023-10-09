import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

function GithubRepos({repos}){

  return (
    <div>
      <p>REPOSITORIES:</p>
      <ListGroup>
        {repos.map(repo => (
        <ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>  
  );
}

export default GithubRepos;

GithubRepos.propType = {
  repos: PropTypes.array
};