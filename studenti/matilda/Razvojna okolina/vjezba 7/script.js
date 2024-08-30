let xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

function fillList() {
  const data = JSON.parse(xhr.response);
  const source = document.getElementById("hb-template").innerHTML;
  const template = Handlebars.compile(source);
  const context = { pokemon: data.pokemon_species.slice(0, 20) };
  const html = template(context);

  document.getElementById("hb-result").innerHTML = html;
}

xhr.onload = function () {
  fillList();
};

xhr.send();
