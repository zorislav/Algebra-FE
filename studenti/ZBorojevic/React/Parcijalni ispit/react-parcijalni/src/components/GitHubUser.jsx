function GitHubUser({ user }) {

    if(!user) {
        return null
    }

    const { avatar_url, name, bio, location } = user

    return (
        <div className="github-user">
            <div className="github-user-info">
                <img src={avatar_url} alt="profile-image" width={100}/>
                <span>
                    { name }
                </span>
            </div>
                <div className="github-user-details">
                    <p>
                        Bio: { bio }
                    </p>
                    <p>
                        Location: { location }
                    </p>
                </div>
            </div>
    ) 
}

export default GitHubUser