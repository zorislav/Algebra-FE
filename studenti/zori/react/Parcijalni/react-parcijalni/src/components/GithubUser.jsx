function GithubUser({ user }) {
  if (!user) {
    return null;
  }

  const { avatar_url, name, bio, location } = user;

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <img src={avatar_url} alt="logo" style={styles.image} />
        <span style={styles.name}>{name}</span>
      </div>
      <p>
        <strong>BIO: </strong>
        {bio}
      </p>
      <p>
        <strong>LOCATION: </strong>
        {location}
      </p>
    </div>
  );
}

export default GithubUser;

const styles = {
  container: {
    textAlign: "justify",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 64,
    marginLeft: 36,
  },
};
