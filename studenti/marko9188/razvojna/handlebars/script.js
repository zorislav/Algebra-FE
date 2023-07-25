const source = document.getElementById('hb-template').innerHTML;
const destination = document.getElementById('hb-destination');

const template = Handlebars.compile(source);

const context = { naslov: 'Moj prvi post', tijelo: 'Ovo je sadržaj mog novog posta'};

const html = template(context);

destination.innerHTML = html;