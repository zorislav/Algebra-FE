document.addEventListener("DOMContentLoaded", function(){
    document.getElementsByTagName("button")[0].addEventListener("click",function(){
        document.querySelector("p").style.display="none";
        document.querySelector("button").style.display="none";
    });
});