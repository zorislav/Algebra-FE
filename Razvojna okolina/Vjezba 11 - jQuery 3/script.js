 
$(document).ready(function(){
	
	let pokemons = [];

	function addStripes() {
		$('table tr').removeClass('striped');
		$('table tr:nth-child(even)').addClass('striped');
	}

	function afterRender(){
  	$('[data-toggle="popover"]').popover();
		$('table th').css('color', 'darkBlue');
		
		$('table tr').on('mouseenter', event => {
			$(event.currentTarget).css('backgroundColor', 'yellow');
		});

		$('table tr').on('mouseleave', event => {
			$(event.currentTarget).removeAttr('style');
		});

		addStripes();

		setTimeout(function() {
			// selektiraj sve table td a elemente koji sadrže p
			const hideElements = $("table td a:contains('p')").filter(function(){
				// selekciji filtriraj sve elemente selekcije koji imaju 'p' na prvom mjestu 
				return this.innerHTML.indexOf('p') == 0;
			});
			// kreni prema gore, pronađi najbliži element koji odgovara zadanom css selektoru
			// i obriši ga
			hideElements.closest('tr').remove();
			addStripes();
			$('<div></div>').insertAfter($('#hb-template')).text('Skriveno: ' + hideElements.length);
		}, 2000);
	}

	function fillList() {
		const source   	= document.getElementById("hb-template").innerHTML;
		const template 	= Handlebars.compile(source);
		const context 	= { pokemon: pokemons.slice(0, 20), tableClass: 'table' };
		const html     	= template(context);
	
		document.getElementById('hb-result').innerHTML = html;

		afterRender();
	}


	$(window).resize(() => {
		console.log($( window ).width());
	});

	function getDetails(pokemon) {		
		return $.ajax(pokemon.url, {
			success: function(data) {
				pokemons.push(data);
			}
		});
	}

	function getAllDetails(data){
		const getArray = [];

		// Visestruki ajax zahtjevi
		$.when.apply($, data.pokemon_species.map(function(pokemon) {
			return getDetails(pokemon);
		})).done(function(result) {
			console.log(pokemons);
			fillList();
		});
	}

	$.ajax("https://pokeapi.co/api/v2/pokemon-color/yellow", {
		success: function(data, textStatus, jqXHR ) {
			getAllDetails(data);
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$('<div></div>').insertAfter($('#hb-template')).text('Error: ' + textStatus);
		}
	})

});

