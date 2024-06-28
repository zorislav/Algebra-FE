const source = document.getElementById("hb-template").innerHTML;
const destination = document.getElementById("hb-result");
const template = Handlebars.compile(source); 

async function getPokemons() {

  const response = await fetch("https://pokeapi.co/api/v2/pokemon-color/yellow");
  const data =  await response.json();

  return data.pokemon_species.slice(0,20);

}


function fillList(pokemons) {

  const context = { pokemon: pokemons };
  const html = template(context);
  destination.innerHTML = html;
}


getPokemons().then( pkmns => fillList(pkmns));

