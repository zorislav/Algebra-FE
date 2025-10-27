function resolveResponse(response) {
  if (response.status === 200) return response.json();
  if (response.status === 404) throw new Error("No such user!");
  throw new Error("Ooops, Server error!");
}

function fetchUser(userName) {
  return fetch(`https://api.github.com/users/${userName}`).then(
    resolveResponse
  );
}

function fetchUserRepos(userName) {
  return fetch(`https://api.github.com/users/${userName}/repos`).then(
    resolveResponse
  );
}

export default {
  fetchUser,
  fetchUserRepos,
};
