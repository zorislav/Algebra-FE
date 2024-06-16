document.addEventListener('DOMContentLoaded', function(){
    var switchButton = document.getElementById('switch');
    var switchImage = document.getElementById('switch-img');
    var logoImage = document.getElementById('logoImage');
    var searchIcon = document.getElementById('searchIcon');
    var searchButton = document.getElementById('searchButton');
    var searchTerm = document.getElementById('searchTerm');
    var songsList = document.getElementById('songsList');
    var noSongsFound = document.getElementById('noSongsFound');
    var spinnerBall = document.getElementById('spinnerBall');

    // Function to unhide elements like noSongsFound, spinnerBall
    function showElement(element){
        element.style.display = 'block';
    }

    // Function to hide elements like noSongsFound, spinnerBall
    function hideElement(element){
        element.style.display = 'none';
    }

    // Function to switch dark mode
    function switchDarkMode(){
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')){
            switchImage.src = 'img/Switch_D.png'; 
            switchImage.alt = 'dark';
            logoImage.src = 'img/AppleLogoW.png';
            logoImage.alt = 'logo-apple-white';
            searchIcon.src = 'img/SearchIconW.png';
            searchIcon.alt = 'Search-dark';
        } else{
            switchImage.src = 'img/Switch_L.png';
            switchImage.alt = 'light';
            logoImage.src = 'img/AppleLogoB.png';
            logoImage.alt = 'logo-apple-black';
            searchIcon.src = 'img/SearchIconB.png';
            searchIcon.alt = 'Search-light';
        }
    }

    // Show noSongsFound message at the start and hide spinner
    showElement(noSongsFound);
    hideElement(spinnerBall);

    // Event listener for switch button
    switchButton.addEventListener('click', switchDarkMode);

    // Function for performing search of the iTunes API
    function performSearch(){
        var term = searchTerm.value.trim();
        if (term === "") return;
        const limitSearchResults = 20; // Variable to limit the number of results(li)

        // Show spinner for loading
        showElement(spinnerBall);
        // Hide noSongsFound message
        hideElement(noSongsFound);
        songsList.innerHTML = '';

        // Perform search of the iTunes API
        fetch('https://itunes.apple.com/search?term=' + encodeURIComponent(term) + '&media=music&entity=musicTrack&limit=' + limitSearchResults)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                hideElement(spinnerBall);
                if (data.results.length > 0){
                    data.results.forEach(function(song){
                        var li = document.createElement('li');
                        li.innerHTML = `
                            <img src="${song.artworkUrl100}" alt="songImage" width="60" height="60">
                            <p>${song.trackName} - ${song.artistName}</p>
                            <audio controls src="${song.previewUrl}" class="audio-player"></audio>
                        `;
                        songsList.appendChild(li);
                    });
                } else{
                    showElement(noSongsFound);
                }
            })
            .catch(function(error){
                console.error('Error fetching data:', error);
                hideElement(spinnerBall);
                showElement(noSongsFound);
            });
    }

    // Event listener for search button
    searchButton.addEventListener('click', performSearch);
    
    // Event listener for enter key
    searchTerm.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});
