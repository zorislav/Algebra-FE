// 1. 

let li = document.querySelectorAll("li")
for (let i = 0; i < li.length; i++) {
    li[i].style.listStyleType = "decimal";
}

// 2.
let info = document.querySelector(".info")
info.classList.add("hide")

// 3.
var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

// 4. 
let marginNum = parseInt(marginLeft)
let reverse = false;

function frame() {
if(reverse) {
    marginNum--;
} else {
    marginNum++;
}
if (marginNum === 30) {
    reverse = true;
} 
if (marginNum === 0) {
    reverse = false;
}
body.style.margin = marginNum + "px";
}
let intId = setInterval(frame,1000)
clearInterval(intId)