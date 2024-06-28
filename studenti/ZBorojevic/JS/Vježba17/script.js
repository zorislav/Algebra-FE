let btnEl = document.getElementById("btn")
let pEl = document.querySelector("p");
let inpEl = document.getElementById("inp");
//
function onClickHandler() {
    console.log("Kliknut sam")
}
function onInputHandler(event) {
    console.log(event.target.value)
}

btnEl.addEventListener("click", onClickHandler)

inpEl.addEventListener("input", onInputHandler)
