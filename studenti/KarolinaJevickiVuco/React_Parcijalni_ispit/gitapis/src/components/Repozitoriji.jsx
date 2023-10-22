import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

function Repozitoriji({repos}) {

  return(
    <>
      <p>REPOSITORIES: </p>
      <ListGroup>
      {repos.map(repo => (
      <ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
      ))}
      </ListGroup>
    </>
  );
}

export default Repozitoriji;

Repozitoriji.propTypes = {
  repos: PropTypes.array
};