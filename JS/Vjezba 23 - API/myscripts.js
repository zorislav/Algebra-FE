var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users/2', true);

request.onload = function(result) {
	console.log(result.currentTarget.responseText);
};

request.send();

async function getData() {
  const resp = await fetch('https://reqres.in/api/users/2');
  const jsonData = await resp.json();
  console.log(JSON.stringify(jsonData));
}

getData();