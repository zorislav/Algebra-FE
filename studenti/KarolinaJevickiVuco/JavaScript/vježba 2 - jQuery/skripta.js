/*dva događaja - 1. se dokument učita, 2. sve spremno za izvršavanje
document - predstavlja java skript dokument*/ 
document.addEventListener("DOMContentLoaded", function(){
   document.getElementsByTagName("button")[0].addEventListener("click", function(){
      document.querySelector("p").style.display = "none";
   });
});  


/* DOMContent Loaded =event se događa kad browser dovrši učitavanje dokumenta
function = anonimna funkcija*/
/* metoda - getELementsBY TagNAme = dohvaća elemente imena 'button' - dohvaća više elemenata, u našem primjeru samo jedan jer imamo samo jedan button
u uglatoj zagradi određujemo koji po redu element dohvaćamo - 0 je prvi element u nizu*/
/*addEventListener("click") - želimo dohvatiti događaj kad netko klikne i dodajemo funkciju koja se u tom slučaju izvršava*/
/*querySelector("p") - selektira jedan element
querySelector0("p") - selektira više elemenata;*/