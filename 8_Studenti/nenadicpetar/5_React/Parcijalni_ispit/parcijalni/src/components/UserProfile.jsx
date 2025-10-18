import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function UserProfile({ user }) {
  return (
    <div className="card shadow-sm p-4 mb-4">
      <div className="d-flex align-items-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-circle me-4"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div>
          <h3 className="fw-bold">{user.name || user.login}</h3>
          <p className="mb-1 text-muted">{user.location || "Nepoznato"}</p>
          <p>{user.bio || "Nema biografije"}</p>

          <div className="d-flex gap-3 mb-2">
            <span>👥 Followers: {user.followers}</span>
            <span>🔁 Following: {user.following}</span>
            <span>📂 Repos: {user.public_repos}</span>
          </div>

          <Button
            variant="dark"
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            Otvori GitHub profil
          </Button>
        </div>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserProfile;
