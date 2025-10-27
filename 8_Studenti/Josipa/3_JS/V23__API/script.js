// 1. Odite na stranicu https://any-api.com/
// https://dummyjson.com/

// 2. Izaberite jedan public API sa liste koji podržava REST standard, pruža podatke u JSON obliku i ima upute za dohvaćanje sa XMLHttpRequest objektom (nativni JavaScript jezik).

// 3. Napišite JS kod koji se priključuje na taj API (po uzoru na primjer iz prijašnje lekcije).

// 4. Izaberite jedan endpoint u APIju nad kojim možete napraviti GET request.
// Ispišite rezultat u konzolu.

function getData1() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://dummyjson.com/products/2", true);

  request.onload = function () {
    console.log(`Status: ${request.status}`);
    console.log(request.responseText);
  };
  request.send();
}

getData1();

function getData2() {
  fetch("https://dummyjson.com/products/2")
    .then((response) => response.json())
    .then((responseData) => console.log(responseData))
    .catch((error) => console.log(error));
}

// getData2();
// makni slova na url products - prodts/2 i vidi kaj se ispiše, dodaj na url 2a ili 2aa
async function getData3() {
  try {
    const response = await fetch("https://dummyjson.com/products/2");
    console.log(`Status: ${response.status}`);
    if (response.status === 200) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      console.log("Greška!");
    }
  } catch (error) {
    console.log(error);
  }
}

getData3();
