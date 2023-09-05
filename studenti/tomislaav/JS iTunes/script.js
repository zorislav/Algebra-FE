const songSearch = document.getElementById('song-search');
const resultsTable = document.getElementById('results-table');
const text = document.getElementById('text');
const load = document.getElementById('load');

async function fetchData(term) {
  const url = `https://itunes.apple.com/search?term=${term}&entity=song`;
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function displayResults(results) {
  results.forEach(result => {
    let lists = document.createElement('tr');
    let songCell = document.createElement('td');
    let singerCell = document.createElement('td');
    songCell.textContent = result.trackName;
    singerCell.textContent = result.artistName;

    lists.appendChild(songCell);
    lists.appendChild(singerCell);
    resultsTable.appendChild(lists);
  });
}

songSearch.addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  search(searchTerm);
});

function showLoad() {
  resultsTable.innerHTML = '';
  text.textContent = '';
  load.style.display = 'block';
}

function hideLoad() {
  load.style.display = 'none';
}

function showMessage(msg) {
  text.textContent = msg;
}



async function search(term) {
    showLoad();

    try { 

      var data = await fetchData(term);
      hideLoad();
      if (data.resultCount === 0) {
        return;
      } else {
        displayResults(data.results);
      }
    } catch (error) {
      hideLoad();
    }
  }
