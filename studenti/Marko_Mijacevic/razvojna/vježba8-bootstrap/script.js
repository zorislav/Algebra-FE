$(document).ready(function() {
    const source = document.getElementById("hb-template").innerHTML;
    const destination = document.getElementById("hb-result");
    const template = Handlebars.compile(source);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);


    function fillList(){
        const data = JSON.parse(xhr.response);
        const context = {pokemon: data.pokemon_species.slice(0, 20), tableClass: "table"};
        const html = template(context);
        destination.innerHTML = html;
        $('[data-toggle="popover"]').popover();
    }

    xhr.onload = function() {
        fillList();
    }

    xhr.send();
});








