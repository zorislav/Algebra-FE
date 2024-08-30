var btnEl = document.getElementById("btn");
var pEl = document.querySelector("p");
var inpEl = document.getElementById("inp");

//
function onClickHandler(){
    console.log("Kliknuo");
}

function onpClickHandler(){
    console.log("Kliknuo na p");
}

function onInputHandler(event){
    console.log(event.target.value);
}

btnEl.addEventListener("click", onClickHandler);

pEl.addEventListener("click", onpClickHandler);

inpEl.addEventListener("input", onInputHandler);