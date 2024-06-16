document.getElementById('searchBar').addEventListener('input', traziPjesme);

async function traziPjesme() {
    const query = document.getElementById('searchBar').value;
    const resultsDiv = document.getElementById('results');
    const loadingKrug = document.getElementById('loading');

    resultsDiv.innerHTML = '';
    loadingKrug.style.display = 'block'; //css

          /* fetch */

    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=10`);
    const data = await response.json();
    loadingKrug.style.display = 'none'; //css
          
          /* ako nema rezultata */
    
    if (data.results.length === 0) {
        resultsDiv.innerHTML = '<p>Nema rezultata</p>';
        return;
    }

          /* kreiranje elemenata - song,art,link */

    data.results.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'song';

        const img = document.createElement('img');
        img.src = song.artworkUrl100;
        img.alt = `${song.trackName} artwork`;

        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = `<p><strong>${song.trackName}</strong> by ${song.artistName}</p>
                             <p>Album: ${song.collectionName}</p>
                             <p><a href="${song.trackViewUrl}" target="_blank">Slusajte na iTunes</a></p>`;

        songDiv.appendChild(img);
        songDiv.appendChild(infoDiv);

        resultsDiv.appendChild(songDiv);
    });
}