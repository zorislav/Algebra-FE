// 1.
var h1El = document.querySelector("h1");
h1El.textContent = "Karlovac";

// 2.
var spanEl = document.querySelector(".description span");
var h3El = document.createElement("h3");
h3El.textContent = "5 rijeka";
spanEl.parentNode.replaceChild(h3El, spanEl);

// 3.
var infoDiv = document.querySelector(".info");
infoDiv.textContent = "Peta rijeka je piva.";

// 4.
var footerList = document.querySelectorAll("#footer li");
var rijeke = ["Mrežnica", "Kupa", "Korana", "Dobra", "Karlovačko"];
for (var i = 0; i < footerList.length; i++) {
  footerList[i].textContent = rijeke[i];
}

