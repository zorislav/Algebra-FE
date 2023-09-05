function resolveResponse(response) {
  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    throw new Error('No such user!');
  }

  throw new Error('Ooops, Server error!');
}

function fetchUser(userName) {
  const url = `https://api.github.com/users/${userName}`;
  return fetch(url).then(response => resolveResponse(response));
}

function fetchUserRepos(userName) {
  const url = `https://api.github.com/users/${userName}/repos`;
  return fetch(url).then(response => resolveResponse(response));
}

const exportDefault = {
  fetchUser,
  fetchUserRepos,
};

export default exportDefault;
