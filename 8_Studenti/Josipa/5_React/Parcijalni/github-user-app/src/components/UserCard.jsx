import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

export default function UserCard({ user }) {
  if (!user) return null;

  return (
    <Card className="mb-3 text-center">
      <Card.Body>
        <Card.Img
          variant="top"
          src={user.avatar_url}
          style={{ width: 100, height: 100, borderRadius: "50%" }}
        />
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <strong>BIO:</strong> {user.bio}
        </Card.Text>
        <Card.Text>
          <strong>LOCATION:</strong> {user.location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};
