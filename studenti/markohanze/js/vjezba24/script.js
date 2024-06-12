//AJAX

// var request = new XMLHttpRequest();

// request.open("GET", "https://dummyjson.com/products/1", "true");

// request.onload = function(result) {
//   console.log(result.currentTarget.responseText);
// }

// request.send();

//fetch

function getData() {

  fetch("https://dummyjson.com/products/2")
  .then(response => response.json())
  .then(responseData => console.log(JSON.stringify(responseData)))
  .catch(error => console.log(error));


}

getData();

async function getData2() {


  const response = await fetch("https://dummyjson.com/products/1");
const responseData = await response.json();

console.log(JSON.stringify(responseData));
}

getData2();

///3
// async function getData3() {
//   try {
//     const response = await fetch(“https://dummyjson.com/products/1”);
//     const responsedata = await response.json()
//     console.log(JSON.stringify(responsedata))
//   } catch (error) {
//   console.log(error);
//   }
// }
// getData3();