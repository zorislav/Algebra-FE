function handleResponse(res) {
  if (res.status === 200) return res.json();
  if (res.status === 404) throw new Error("Korisnik nije pronađen!");
  throw new Error("Greška na serveru!");
}

function getUser(username) {
  console.log(`[API] Fetching user: ${username}`);
  return fetch(`https://api.github.com/users/${username}`)
    .then(handleResponse)
    .then((data) => {
      console.log("[API] User data:", data);
      return data;
    });
}

function getRepos(username) {
  console.log(`[API] Fetching repos for: ${username}`);
  return fetch(`https://api.github.com/users/${username}/repos`).then(
    handleResponse
  );
}

export const GithubService = { getUser, getRepos };
