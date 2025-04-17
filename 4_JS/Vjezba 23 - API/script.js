var request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products/1', true);

request.onload = function(result) {
	console.log(result.currentTarget.responseText);
};

request.send();

async function getData1() {

  try {

    const resp = await fetch('https://dummyjson.com/products/1');
    const jsonData = await resp.json();
    console.log(JSON.stringify(jsonData));

  } catch (error){

    console.log(error);

  }

}

getData1();

function getData2() {
  fetch('https://dummyjson.com/products/1', {
    method: 'GET'
  })
  .then(resp => resp.json())
  .then(jsonData => console.log(JSON.stringify(jsonData)))
  .catch(error => console.log(error));
}

getData2();

