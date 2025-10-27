import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export const RepoList = ({ items }) => {
  if (!items || items.length === 0) return <p>Korisnik nema repozitorija.</p>;

  return (
    <>
      <h4>Repozitoriji ({items.length})</h4>
      <ListGroup>
        {items.map((repo) => (
          <ListGroup.Item key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

RepoList.propTypes = {
  items: PropTypes.array,
};
