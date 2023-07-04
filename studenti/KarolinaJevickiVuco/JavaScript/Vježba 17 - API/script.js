//1. Odite na stranicu https://any-api.com/ 

//https://dummyjson.com/ --> dopušta kreiranje requesta
//https://dummyjson.com/products --> pokazuje set produkata
//https://dummyjson.com/products/1 --> dummy podaci vezani samo uz product 1 - za vježbu zadavanja requesta


//2. Napišite JS kod koji se priključuje na taj API (po uzoru na primjer iz prijašnje lekcije).

//3. Izaberite jedan endpoint u APIju nad kojim možete napraviti GET request. 
//Ispišite rezultat u konzolu.


var request = new XMLHttpRequest();      //kreiramo novi request

request.open('GET', 'https://dummyjson.com/products/1', true);
//funkc. open otvaramo komunikaciju s udaljenim servisom
//ubacujemo metodu, adresu produkta 1, i akciju true - asinkrono

request.onload = function(result) {
  console.log(result.currentTarget.responseText);
}

//funk. dobiva parametar koji je rezultat koji dolazi s udaljenog servisa- ime je proizvoljno

request.send();

//šaljemo upit s funkcijom send;

//rezultat u konzoli:
//ProgressEvent

// currentTarget: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}

//response: "{\"id\":1,\"title\":\"iPhone 9\",\"description\":\"An apple mobile which is nothing like apple\",\"price\":549,\"discountPercentage\":12.96,\"rating\":4.69,\"stock\":94,\"brand\":\"Apple\",\"category\":\"smartphones\",\"thumbnail\":\"https://i.dummyjson.com/data/products/1/thumbnail.jpg\",\"images\":[\"https://i.dummyjson.com/data/products/1/1.jpg\",\"https://i.dummyjson.com/data/products/1/2.jpg\",\"https://i.dummyjson.com/data/products/1/3.jpg\",\"https://i.dummyjson.com/data/products/1/4.jpg\",\"https://i.dummyjson.com/data/products/1/thumbnail.jpg\"]}"
//responseText: "{\"id\":1,\"title\":\"iPhone 9\",\"description\":\"An apple mobile which is nothing like apple\",\"price\":549,\"discountPercentage\":12.96,\"rating\":4.69,\"stock\":94,\"brand\":\"Apple\",\"category\":\"smartphones\",\"thumbnail\":\"https://i.dummyjson.com/data/products/1/thumbnail.jpg\",\"images\":[\"https://i.dummyjson.com/data/products/1/1.jpg\",\"https://i.dummyjson.com/data/products/1/2.jpg\",\"https://i.dummyjson.com/data/products/1/3.jpg\",\"https://i.dummyjson.com/data/products/1/4.jpg\",\"https://i.dummyjson.com/data/products/1/thumbnail.jpg\"]}"
//kad se doda u request.onload currentTarget i responseText dobije se ispis našeg objekta koji smo našli na stranici



function getData(){
  fetch('https://dummyjson.com/products/1', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(responseData => console.log(JSON.stringify(responseData)))
  .catch(error => console.log(error));
}

getData();


//fetch funkcija dohvaća podatke i vraća promise - cijeli HTTP body
//then - na dobiveni response primjenjujemo json funkciju koja izvlači response body i isto vraća promise
//drugi then ispisuje dobiveni json promise, odnosno dohvaćeni podatak,  u JSON notaciji
//ako se stavi samo console.log(responseData) - ispisuje se dobiveni objekt, ali ne u JSON notaciji
//catch funkcija- izvršava se ako se dogodi greška - ispisuje se objekt error, tj. poruka o grešci

async function getData2(){

  try {
    const response  = fetch('https://dummyjson.com/products/1', {
    method: 'GET'
  });
  const responseData = await response.json();     //izvlači podatke iz responsa, vraća promise koji čekamo
  console.log(JSON.stringify(responseData));
  } catch(error) {
    console.log(error);               //ispisuje error objekt u slučaju greške
  }
}

getData2();

//u const response spremamo odgovor koji dobijemo iz funkcije fetch, čekamo da se promise resolva 
//i zato pretvaramo funckiju u asinkronu funkciju s async i await
//JSON.stringify(responseData - pretvara response u JSON notaciju



//request.send();
//getData();
//getData2();   
//sa sve te tri funkcije smo poslali request; 
