$(document).ready(function() {
    const source = document.getElementById("hb-template").innerHTML
    const destination = document.getElementById("hb-result")
    const template = Handlebars.compile(source)
    let xkr = new XMLHttpRequest();
    xkr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/purple", true)
    function fillList() {
        const data = JSON.parse(xkr.response)
        const context = { pokemon: data.pokemon_species.slice(0, 10), tableClass: "table"}
        const html = template(context)
        destination.innerHTML = html
        $(`[data-toggle="popover"]`).popover()
    }
    xkr.onload = function() {
        fillList()
    }
    xkr.send()
})

