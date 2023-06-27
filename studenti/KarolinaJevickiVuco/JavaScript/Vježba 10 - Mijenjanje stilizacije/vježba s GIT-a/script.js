//1) umjesto circle buleta na elementima liste prikažu redne brojke

var li = document.querySelectorAll('li');  //imamo samo jednu listu, pa onda selektiranje funkcionira i ovako;

for (var i = 0; i < li.length; i++ ){
  li[i].style.listStyleType = 'decimal'; 
}

//2) div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)

var infoEl = document.querySelector('.info');

infoEl.classList.add('hide'); //dodaje klasu hide na infoEl

//3) saznajte margin-left izračunati stil koji je primijenjen na body elementu

var bodyEl = document.querySelector('body');
var bodyStyles = window.getComputedStyle(bodyEl, null);  //treba izračunati stil na elementu bodyEl

var marginLeft = bodyStyles.getPropertyValue('margin-left');  //pronalazi koliko je value od margin-left
console.log(marginLeft);   //ispisuje u konzoli koliki je margin-left - 8px


//4) animirajte veličinu margin body elementa od pocetne do 30px i natrag u ponavljajućoj petlji

var marginNum = parseInt(marginLeft);  
//parseInt koristimo da dobijemo broj od gore koji možemo povećavati i smanjivati
var reverse = false;  // pomoćna varijabla - definira smjer promjene- povećavanje ili smanjivanje
setInterval(frame, 200);

//poziva funkciju frame i postavlja na 200 milisekundi

function frame() {
  if(reverse) {
    marginNum--;   //ako je margin true, onda smanjujemo za 1
  }else{
    marginNum++;   //ako je marginNUm false, onda povećavamo za 1;
  }
  if(marginNum === 30) {   //ako je margina 30, smanjujemo
    reverse = true;
  }
  if(marginNum === 0) {  //ako je margina 0, povećavamo
    reverse = false;  
  }

  bodyEl.style.marginLeft = marginNum + 'px';
}

//povećavamo marginu od trenutne (8px) do 30px i natrag

//rezultat - margina se pomiče desno-lijevo svake dvije sekunde - odnosno mijenja se lijeva margina



mojElement.addEventListener('click', handler_fn, true)

//parametar 1 - event koji osluškujemo: click
//parametar 2 - funkcija koja se onda izvršava: handler_fn
//parametar use Capture - ako stoji na true, koristi se Event Capturing i Bubbling, ako stoji false, onda vrijedi Event Bubbling


//EventListener - obično se definira na jednom elementu, 
//ali ako je slučajno na nekom elementu koji je viši u hijerarhiji za isti event definiran još jedan EventListener on će se isto izvršiti ukoliko ne koristimo stopPropagation 