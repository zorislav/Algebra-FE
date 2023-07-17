const searchInput = document.getElementById("search");
const resultDiv = document.getElementById("result");

// console.log(searchInput);
// console.log(resultDiv);

// Slusaj "input" event na <input> elementu
searchInput.addEventListener("input", function (event) {
  // console.log(event.target.value);

  resultDiv.innerHTML = "Searching...";

  const inputValue = event.target.value;

  fetch("https://jsonplaceholder.typicode.com/users?website=" + inputValue)
    .then(function (response) {
      return response.json();
    })
    .then(function (foundUsers) {
      const foundUser = foundUsers[0];

      if (!foundUser) {
        resultDiv.innerHTML = "Not found!";
      } else {
        resultDiv.innerHTML =
          "Name: " +
          foundUser.name +
          "<br />" +
          "Website: " +
          foundUser.website +
          "<br />" +
          "Email: " +
          foundUser.email;
      }
    });
});