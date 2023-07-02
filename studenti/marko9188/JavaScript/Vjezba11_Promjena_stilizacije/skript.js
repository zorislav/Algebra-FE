// - umjesto circle buleta na elementima liste prikažu redne brojke
var li = document.querySelectorAll('li');
for (i=0; i < li.length; i++){
    li[i].style.listStyleType = 'decimal';
}

//- div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
var infoEl = document.querySelector('.info');
infoEl.classList.add('hide');

//- saznajte margin-left izračunati stil koji je primijenjen na body elementu
var bodyEl = document.querySelector('body');
var bodyStyles = window.getComputedStyle(bodyEl, null);
var ml = bodyStyles.getPropertyValue('margin-left');
console.log(ml);

//- animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji

var marginNum = parseInt(ml);
var reverse = false;

setInterval(frame, 200);

function frame (){
    if(reverse) {
        marginNum--;
    }else {
        marginNum++;
    }
    if(marginNum === 30) {
        reverse = true;
    }
    if (marginNum===0)
    {
        reverse = false;
    }
    bodyEl.style.margin = marginNum + 'px';
}