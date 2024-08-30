//FetchApi.js
//src/services/FetchApi.js
//@ts-check

export async function fetchGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
}

export async function fetchGitHubRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (!response.ok) {
      throw new Error("Repositories not found");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return [];
  }
}
