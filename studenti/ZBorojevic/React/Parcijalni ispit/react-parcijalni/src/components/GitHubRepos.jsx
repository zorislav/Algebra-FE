function GitHubRepos({repos}) {
    return (
        <div className="github-repos">
            <p>
                Repositories:
            </p>
            <ul>
                {
                    repos.map((repo) => <li key={repo.id}>{repo.name}</li>)
                }
            </ul>
        </div>
    )
}

export default GitHubRepos