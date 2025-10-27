function GithubUser({ user }) {
  const { avatar_url, bio, name, location } = user;

  if (!user) {
    return null;
  }

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <img style={styles.image} src={avatar_url} alt="logo" />
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
    display: "inline",
  },
};
