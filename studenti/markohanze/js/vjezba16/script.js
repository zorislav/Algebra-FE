//1

var li = document. querySelectorAll("li");

for (var i=0; i<5; i++) {
 li[i].style.listStyleType = "decimal";
}

//2

var info = document.querySelector(".info");
info.classList.add("hide");

//3

var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

//4

var marginNum = parseInt(marginLeft);
var reverse = false;

function frame() {

  if (reverse) {
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

setInterval(frame,200);