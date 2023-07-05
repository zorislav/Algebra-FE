//zadatak: click 'pošalji podatke' - pročitati upisane podatke i poslati ih + dohvatiti podatke iz baze


const inputEl = document.getElementById('input');
const posaljiButtonEl = document.getElementById('posalji');
const procitajButtonEl = document.getElementById('procitaj');
const ulEl = document.getElementById('lista'); //selektira listu


async function postData() {

  const inputText = inputEl.value.trim();    //čita upisano i uz trim uklanja razmake i slično
  const postObj = {                         //kreira objekt koji šaljemo Firebase
    poruka: inputText
  }

  try {

    await fetch('https://treci-try-default-rtdb.europe-west1.firebasedatabase.app/.json', {                           //na FIrebasu pod Realtime Database gore se nalazi adresa, a ispod je ime baze 'demodb + dodaje se json
    method: 'POST',
    body: JSON.stringify(postObj),          //šaljemo objekt u JSON notaciji
    headers: {
    'Content-type': 'application/jason'    //API zna kroz to da šaljemo JSON set podataka
  }

  });

  alert('Podaci poslani');      //ispisuje alert prozor s tom porukom
  inputEl.value = '';           //briše vrijednost input elementa nakon slanja i polje za upis ostaje prazno

  } catch (error) {
    console.log(error);
  }
}


//fetch vraća promise - pa ga pretvaramo u async

async function getData() {

  try {
    ulEl.innerHTML = '';    //briše prethodno pročitane podatke
  const response = await fetch('https://treci-try-default-rtdb.europe-west1.firebasedatabase.app/.json');                         
  const responseData = await response.json();

  for (let key in responseData) {    //key nam je index u response data polju koje se ispiše u konzoli
    let liEl = document.createElement('li');      //kreiramo list item element
    liEl.innerText = responseData[key].poruka;         //ciljamo na dio poruka koji se ispisuje u konzoli
    ulEl.appendChild(liEl);                     //listi dodajemo novokreirani element
  }

  }catch(error) {
    console.log(error);
  }
                 
}


posaljiButtonEl.addEventListener('click', postData);
procitajButtonEl.addEventListener('click', getData);   //ispisuje sve poruke koje inače vidimo ispisane u konzoli

//čekamo event click, i tad se izvršava funkc. postData