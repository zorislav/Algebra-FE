import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

export const UserCard = ({ data }) => {
  const { avatar_url, name, login, bio, location } = data;

  return (
    <Card className="mb-4">
      <Card.Body className="d-flex align-items-center">
        <img
          src={avatar_url}
          alt={login}
          className="me-3"
          style={{ width: 90, height: 90, borderRadius: "50%" }}
        />
        <div>
          <Card.Title>{name || login}</Card.Title>
          {location && <Card.Subtitle>{location}</Card.Subtitle>}
          {bio && <Card.Text className="mt-2">{bio}</Card.Text>}
        </div>
      </Card.Body>
    </Card>
  );
};

UserCard.propTypes = {
  data: PropTypes.object.isRequired,
};
