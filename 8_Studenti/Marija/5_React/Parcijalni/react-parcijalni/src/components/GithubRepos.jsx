function GithubRepos({ repos }) {
  return (
    <div>
      <p>
        <strong>REPOSITORIES: </strong>
      </p>
      <ul style={{ listStyleType: "none" }}>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GithubRepos;
