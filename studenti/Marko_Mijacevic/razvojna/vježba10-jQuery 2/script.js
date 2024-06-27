$(document).ready(function(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

	function addStripes() {
		$('table tr').removeClass('striped');
		$('table tr:nth-child(even)').addClass('striped');
	}

	function afterRender(){

		$('[data-toggle="popover"]').popover();
			$('table th').css('color', 'darkBlue');

		addStripes();

		$("table tr").on("mouseenter", event => {
			$(event.currentTarget).css("backgroundColor", "yellow");
		});

		$("table tr").on("mouseleave", event => {
			$(event.currentTarget).removeAttr("style");
		});

		setTimeout(function() {
			const hideElements = $("table td a:contains('p')").filter(function(){
				return this.innerHTML.indexOf('p') == 0;
			});
			hideElements.closest('tr').remove();
			addStripes();
			$('<div></div>').insertAfter($('#hb-template')).text('Skriveno: ' + hideElements.length);
		}, 2000);
	}

	function fillList() {
		const data 		= JSON.parse(xhr.response);
		const source   	= document.getElementById("hb-template").innerHTML;
		const template 	= Handlebars.compile(source);
		const context 	= { pokemon: data.pokemon_species.slice(0, 20), tableClass: 'table' };
		const html     	= template(context);
	
		document.getElementById('hb-result').innerHTML = html;

		afterRender();
	}

	xhr.onload = function() {
		fillList();
	};

	$(window).resize(() => {
		console.log("Window width: " +$(window).width());
	})

	xhr.send();
});