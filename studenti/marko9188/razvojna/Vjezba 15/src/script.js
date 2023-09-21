 
$(document).ready(function(){
	
	// Niz u kojem spremamo info o pokemonima
	let pokemons = [];

	// Funkcija koja azurira zebra prikaz
	function addStripes() {
		// Ukloni striped klasu sa svih <tr> elemenata
		$('table tr').removeClass('striped');
		// Dodaj striped klasu svim parnim <tr> elementima
		$('table tr:nth-child(even)').addClass('striped');
	}

	// Funkcija koja azurira tablicu nakon prvog prikaza
	function afterRender(){
		// Aktiviraj popover()
  	$('[data-bs-toggle="popover"]').popover();
		// Dodaj boju <th> elementima tablice
		$('table th').css('color', 'darkBlue');
		
		// mouseenter event handler
		$('table tr').on('mouseenter', event => {
			// Postavi pozadinsku boju reda u zutu
			$(event.currentTarget).css('backgroundColor', 'yellow');
		});

		// mouseleave event handler
		$('table tr').on('mouseleave', event => {
			// Obrisi pozadinsku boju reda
			$(event.currentTarget).removeAttr('style');
		});

		// Pozovu funkciju addStripes
		addStripes();

		// Nakon dvije sekunde izvrsi
		setTimeout(function() {
			// Selektiraj sve <td> elemente koji sadrže p
			const hideElements = $("table td a:contains('p')").filter(function(){
				// U selekciji filtriraj sve elemente selekcije koji imaju 'p' na prvom mjestu 
				return this.innerHTML.indexOf('p') == 0;
			});
			// Od selektiranih <td> elemenata kreni prema gore, 
			// pronadji najblizi <tr> element i obrisi ga
			hideElements.closest('tr').remove();
			// Pozovu funkciju addStripes
			addStripes();
			// Kreiraj <div> element sa ispisom broja obrisanih redova
			$('<div></div>').insertAfter($('#hb-template')).text('Skriveno: ' + hideElements.length);
		}, 2000);
	}

	// Funkcija filllist
	function fillList(pokemons) {
		// Generiraj i prikazi Handlebars template
		const source   	= document.getElementById("hb-template").innerHTML;
		const template 	= Handlebars.compile(source);
		const context 	= { pokemon: pokemons.slice(0, 20), tableClass: 'table' };
		const html     	= template(context);
		document.getElementById('hb-result').innerHTML = html;

		// Pozovi funkciju afterRender
		afterRender();
	}

	// Ako se promjeni velicina prozora
	$(window).resize(() => {
		// Ispisi u konzolu sirinu prozora
		console.log($( window ).width());
	});

	// Funkcija getDetails
	function getDetails(pokemon) {		
		// Za svaki zuti pokemon procitaj njegove detalje
		return $.ajax(pokemon.url, {
			// U slucaju uspjesno izvrsenog zahtjeva
			success: function(data) {
				// Pripremi habitat i growth_rate podatke
				const hab = data.habitat ? data.habitat.name : "";
				const grow = data.growth_rate ? data.growth_rate.name : "";
			  // Kreiraj objekt koji ce biti dodan nizu pokemons
				const pokData = {
					name: pokemon.name, 
					url: pokemon.url, 
					habitat: hab, 
					growth_rate: grow
				};
				// Dodaj objekt nizu pokemons
				pokemons.push(pokData);
			}
		});
	}

	// Procitaj sve pokemone koji imaju zutu boju
	$.ajax("https://pokeapi.co/api/v2/pokemon-color/yellow", {
		
		// U slucaju uspjesno izvrsenog zahtjeva
		success: function(data, status, jqXHR ) {

  		// Za svaki element vracenog pokemon_species niza
			$.when.apply($, data.pokemon_species.map(function(pokemon){
				// Pozovi funkciju getDetails
				return getDetails(pokemon);
			})).done(function(){
				// Nakon sto se zavrse svi http zahtjevi (promises)
				// Pozovi funkciju fillList sa nizom pokemons kao parametrom
				fillList(pokemons);
			});

		},
		// U slucaju greske
		error: function(jqXHR, textStatus, errorThrown) {
			// Kreiraj <div> element sa ispisom greske
			$('<div></div>').insertAfter($('#hb-template')).text('Error: ' + textStatus);
		}
	})

});

