

const izvor = document.getElementById("handlebars-template").innerHTML;
const destination = document.getElementById("handlebars-results");
const template = Handlebars.compile(izvor);

async function getPokemons(){
    const response = await fetch("http://pokeapi.co/api/v2/pokemon-color/yellow");
    const data = await response.json();
    return data.pokemon_species.slice(0,20);
}

function fillList(pokemons){
    const context = {pokemon:pokemons};
    const html = template(context);
    destination.innerHTML = html;
}


getPokemons().then(pokem => fillList(pokem));

