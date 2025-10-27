var inpEl = document.getElementById("inp");
var btnEl = document.getElementById("btn");
var divEl = document.getElementById("div");

function onInputHandler(event) {
  console.log(event.target.value);
}

inpEl.addEventListener("input", onInputHandler);

btnEl.addEventListener("click", function (e) {
  console.log("btn click!");
  e.stopPropagation();
});

divEl.addEventListener("click", function () {
  console.log("div click!");
});
