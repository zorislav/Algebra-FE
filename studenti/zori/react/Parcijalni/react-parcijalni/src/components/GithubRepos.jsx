function GithubRepos({ repos }) {
  return (
    <div>
      <p>
        <strong>REPOSITOIES: </strong>
      </p>
      <ul style={styles.ul}>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GithubRepos;

const styles = {
  ul: {
    listStyleType: "none",
  },
};
