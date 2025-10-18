import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

function RepoList({ repos }) {
  const [filter, setFilter] = useState("");

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="card p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">📂 Repozitoriji ({filteredRepos.length})</h5>
        <Form.Control
          type="text"
          placeholder="Pretraži repozitorije..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ width: "200px" }}
        />
      </div>

      <ul className="list-group list-group-flush">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((r) => (
            <li key={r.id} className="list-group-item">
              <a
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                className="fw-bold text-decoration-none"
              >
                {r.name}
              </a>
              {r.description && (
                <p className="mb-0 text-muted small">{r.description}</p>
              )}
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">
            Nema pronađenih repozitorija
          </li>
        )}
      </ul>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
