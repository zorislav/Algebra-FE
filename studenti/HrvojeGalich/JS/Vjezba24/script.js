// AJAX

var request = new XMLHttpRequest();

request.open("GET", "https://dummyjson.com/products/1", true);

request.onload = function (result) {
  console.log(result.currentTarget.responseText);
};

request.send();

//opcija Fetch()
function getData() {
  fetch("https://dummyjson.com/products/2")
    .then((response) => response.json())
    .then((responseData) => console.log(JSON.stringify(responseData)))
    .catch((error) => console.log(error));
}

getData();

async function getData2() {
  try {
    const reponse = await fetch("https://dummyjson.com/products/3a");
    const reponseData = await reponse.json();
    console.log(JSON.stringify(reponseData));
  } catch (error) {
    console.log(error);
  }
}

getData2();
