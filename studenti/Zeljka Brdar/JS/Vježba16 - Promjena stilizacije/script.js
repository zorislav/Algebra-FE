// 1. nepobrojanu u pobrojanu listu

var li = document.querySelectorAll("li");

for(var i = 0; i<5; i++){
    li[i].style.listStyleType = "decimal";
}

//2. u div sa klasom info dodati klasu koja će ga sakriti

var info = document.querySelector(".info");
info.classList.add("hide");

//3. saznati margin-left i izračunati stil koji je primijenjen na body elementu

var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

//4. animirati veličinu margine body elementa od početne vrijednosti do 30px i natrag u ponavljajućoj petlji

var marginNum = parseInt(marginLeft);
var reverse = false;


function frame(){

    if (reverse){
        marginNum--;
    }else{
        marginNum++;
    }

    if(marginNum === 30){
        reverse = true;
    }

    if(marginNum === 0){
        reverse = false;
    }

    body.style.margin = marginNum + "px";
}

var intId = setInterval(frame, 1000);
clearInterval(intId);
