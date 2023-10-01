const input = document.querySelector("input");
const loader = document.getElementById("loader");
loader.innerHTML = '';
const table = document.getElementById("results_table");

input.addEventListener("input", onInputValueChanged);

var loaderStack = 0;
function showLoader() {
    clearResultsTable();
    loader.textContent = "Loading results ...";
    ++loaderStack;
    console.log(loaderStack);
}

function hideLoader() {
    if (--loaderStack <= 0) {
        loader.innerHTML = '';
        loaderStack = 0;
    }
}

function clearResultsTable()
{
    table.innerHTML = '';
}

function createResultRow(artist, collection, song) {

    let row = table.insertRow(1);
    let artist_cell = row.insertCell(0);
    let collection_cell = row.insertCell(1);
    let song_cell = row.insertCell(2);

    artist_cell.innerHTML = artist;
    collection_cell.innerHTML = collection;
    song_cell.innerHTML = song;
}

function createResultsTable(results) {
    clearResultsTable();

    if(results.resultCount < 1)
    {
        loader.textContent = "Error";
        return;
    }

    let header = table.createTHead(0);
    let row = header.insertRow(0);
    let artist_cell = row.insertCell(0);
    let collection_cell = row.insertCell(1);
    let song_cell = row.insertCell(2);

    artist_cell.innerHTML = "Artist";
    collection_cell.innerHTML = "Collection"
    song_cell.innerHTML = "Song name";

    for (let i = 0; i < results.resultCount; ++i)
    {
        createResultRow(
            results.results[i].artistName,
            results.results[i].collectionName,
            results.results[i].trackName
        );
    }
}

function onInputValueChanged(e) {
    showLoader();
    
    var http = new XMLHttpRequest();
    http.open("GET", "https://itunes.apple.com/search?term=" + e.target.value + "&entity=song");
    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            let result = JSON.parse(http.response);
            hideLoader();
            createResultsTable(result);
        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
            console.log(http.status);
            hideLoader();
            clearResultsTable();
            loader.textContent = "Error";
        }
    }
    http.send();
}