function fetchUser(userName) {
  const url = `https://api.github.com/users/${userName}`;
  return fetch(url).then((response) => resolveResponse(response));
}

function fetchUserRepos(userName) {
  const url = `https://api.github.com/users/${userName}/repos`;
  return fetch(url).then((response) => resolveResponse(response));
}

function resolveResponse(response) {
  if (response.status === 200) {
    return response.json();
  }
  if (response.status === 400) {
    throw new Error("No such user!");
  }
  throw new Error("Server error!");
}

const exportDefault = {
  fetchUser,
  fetchUserRepos,
};

const obj = {
  fetchUser: fetchUser,
};

export default exportDefault;
