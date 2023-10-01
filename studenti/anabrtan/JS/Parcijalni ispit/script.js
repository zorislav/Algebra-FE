const spinner = document.getElementById("spinner");
const list = document.getElementById('results');
const container = document.getElementById('container');

document.getElementById('search').addEventListener('input', function(e) {
    results.innerHTML = '';
    let inputValue = (e.target.value);
    spinner.classList.remove('hidden');

    async function getSongs(){
        const response = await fetch(`https://itunes.apple.com/search?term=${inputValue}&entity=song`).catch(error => {throw(error)});
        spinner.classList.add('hidden');
        const songResponse = await response.json();
        let songs = songResponse.results;
        console.log(songs);

        songs.forEach(song => {
            let li = document.createElement('li');
            li.innerHTML = song.artistName + ' - ' + song.trackName;
            list.appendChild(li);
        });

        if (songs.length == 0){
            container.innerHTML = "No results found.";
        };

        }
        getSongs();
});


