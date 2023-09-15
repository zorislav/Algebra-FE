const inputEl = document.getElementById('input');
const ulEl = document.getElementById('lista');
const posaljiButtonEl = document.getElementById('posalji');
const procitajButtonEl = document.getElementById('procitaj');

async function postData() {

  const text = inputEl.value.trim();

  const postObj = {
    poruka: text
  }

  try {

    const response = await fetch('https://console.firebase.google.com/u/0/project/new-project-dfd0c/database/new-project-dfd0c-default-rtdb/data/~2F.json', {
      method: 'POST',
      body: JSON.stringify(postObj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json(response);
  
    alert('Podaci poslani!');
    inputEl.value = '';

  } catch (error) {

    alert(error);

  }
  

}

async function getData() {

  ulEl.innerHTML = '';

  try {
    
    const response = await fetch('https://console.firebase.google.com/u/0/project/new-project-dfd0c/database/new-project-dfd0c-default-rtdb/data/~2F.json', {
      method: 'GET'
    });
  
    const data = await response.json(response);
  
    for (let key in data) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.innerText = data[key].poruka;
    }

  } catch (error) {

    alert(error);

  }

}


procitajButtonEl.addEventListener('click', getData);
posaljiButtonEl.addEventListener('click', postData);