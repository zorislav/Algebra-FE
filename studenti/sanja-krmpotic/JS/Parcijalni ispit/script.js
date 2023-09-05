// Deklaracija varijabli za pristup elementima
const inputEl = document.getElementById('input');
const ulEl = document.getElementById('list');
const buttonEl = document.getElementById('button')
const spinner = document.getElementById('loading-spinner');

inputEl.addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  search(searchTerm);
});

async function search(term) {

  if (term === '') {
    showMessage('Search');
    return;
  }

  try {
    var data = await getData(term);

    if (data.resultCount === 0) {
      showMessage('No result');
    } else {
      displayResults(data.results);
    }
  } catch(error) {
    showMessage('Error');
  }
}

async function getData(term) {
  const response = await fetch(`https://itunes.apple.com/search?term=${term}&entity=song`);
  const data = await response.json();
  return data;
}

function displayResults(results) {
  results.array.forEach(result => {
    const liEl = document.createElement('li');
    const liElText = document.createElement('span');

    const songName = result.trackName;
    const artistName = result.artistName;

    liElText.textContent = `${songName} - ${artistName}`;

    liEl.appendChild(liElText);
});
}

