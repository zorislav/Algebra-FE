// AJAX
// var request = new XMLHttpRequest();

// request.open("GET", "https://dummyjson.com/products/1", true)

// request.onload = function(result) {
//   console.log(result.currentTarget.responseText)
// }
// request.send()

// Fetch
function getData() {

  fetch("https://dummyjson.com/products/1")
  .then(response => console.log(response.json()))
  .then(responseData => console.log(JSON.stringify(responseData)))
  .catch(error => console.log(error))
}
getData();
// Asinkrona funkcija
async function getData2() {
  const response = await fetch("https://dummyjson.com/products/1")
  const responsedata = await response.json()
  console.log(JSON.stringify(responsedata))
}
getData2()

function nekiBroj() {
  const x = 1
  console.log(x)
}
nekiBroj()
// Na još jedan naćin
async function getData3() {
  try {
    const response = await fetch("https://dummyjson.com/products/1")
    const responsedata = await response.json()
    console.log(JSON.stringify(responsedata))
  } catch (error) {
  console.log(error);
  }
}
getData3();