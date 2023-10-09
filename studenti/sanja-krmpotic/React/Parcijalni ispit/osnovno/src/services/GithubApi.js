

function resolveResponse(response){
  if(response.status === 200){
    return response.json();
  }
  if(response.status === 400){
    return new Error('No such user!');
  }
    return new Error('Something went wrong');
}

function fetchUser(userName){
  const url = `https://api.github.com/users/${userName}`;
  return fetch(url).then(response => resolveResponse(response));

  //fetch(url)
  //  .then(response => response.json())
  //  .then(responseData => console.log(responseData))
  //  .catch(error => alert(error));
}

function fetchRepos(userName){
  const url = `https://api.github.com/users/${userName}/repos`;
  return fetch(url).then(response => resolveResponse(response));
}

const exportDefault = {
  fetchUser,
  fetchRepos
}

export default exportDefault;