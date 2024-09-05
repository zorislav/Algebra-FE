function resolveResponse(response) {
    if(response.status === 200) {
        return response.json()
    }
    if(response.status === 404) {
        throw new Error('Nema takvog korisnioka')
    }
    throw new Error ("Nemamo pojima koja je greška")
}

function fetchUser(userName) {
    const url = `https://api.github.com/users/${userName}`
    return fetch(url).then(response => resolveResponse(response))
}

function fetchUserRepos(userName) {
    const url = `https://api.github.com/users/${userName}/repos`
    return fetch(url).then(response => resolveResponse(response))
}

const exportDefault = {
    fetchUser, fetchUserRepos
}

export default exportDefault