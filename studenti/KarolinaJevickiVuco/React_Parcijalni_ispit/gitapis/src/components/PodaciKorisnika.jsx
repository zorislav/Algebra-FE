import PropTypes from 'prop-types';

const styles = {
  container: {
    textAlign: 'justify',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    height: 150,
    width: 150
  },
  name: {
    fontSize: 60,
    display: 'inline',
    marginLeft: 30
  }
}



function PodaciKorisnika ({user}) {

  const { avatar_url, bio, name, location } = user;

  if(!user){
    return null;
  }

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <img style={styles.image} src={avatar_url} alt="profilna slika"/>
        <span style={styles.name}>{name}</span>
      </div>
      <p><strong>BIO: </strong>{bio}</p>
    < p><strong>LOCATION: </strong>{location}</p>
    </div>
  );
}

export default PodaciKorisnika;

PodaciKorisnika.propTypes = {
  user: PropTypes.object
}