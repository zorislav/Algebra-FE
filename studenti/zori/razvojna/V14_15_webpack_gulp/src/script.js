
$(document).ready(function() {

  const source = document.getElementById("hb-template").innerHTML;
  const destination = document.getElementById("hb-result");
  const template = Handlebars.compile(source); 
  
  //let xhr = new XMLHttpRequest();
  var pokemons = [];

  function addStripes() {
    
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  
  }

  function afterRender() {

    $("table th").css("color", "darkBlue");

    addStripes();


    $("table tr").on("mouseenter", event => {
      $(event.currentTarget).css("backgroundColor", "yellow");
    });

    $("table tr").on("mouseleave", event => {
      $(event.currentTarget).removeAttr("style");
    });

    setTimeout(function(){

      const hideElements = $("table td a:contains('p')").filter(function(){
        return this.innerHTML.indexOf('p') == 0;
      })

      hideElements.closest('tr').remove();

      addStripes();

      $("<div></div>").insertAfter($("#hb-template")).text("Skriveno: " + hideElements.length);

    }, 2000);

  }
  
  function fillList(){
    const context = { pokemon: pokemons.slice(0,20), tableClass: "table" };
    const html = template(context);
    document.getElementById("hb-result").innerHTML = html;
    $('[data-bs-toggle="popover"]').popover();

    afterRender();
  
  }

  $(window).resize(() => {
    console.log($(window).width());
  });

  function getDetails(pokemon) {

    return $.ajax(pokemon.url, {
      success: function(data) {

        const hab =  data.habitat ? data.habitat.name : "";
        const grow = data.growth_rate ? data.growth_rate.name : "";

        const pokData = {
          name: pokemon.name,
          url: pokemon.url,
          habitat: hab,
          growth_rate: grow 
        }

        pokemons.push(pokData);

      }
    });


  }

  //  {name, url}  --->> {name, url, habitat, growth_rate}
  //  {name, url}
  //  
  //
  //
  


  $.ajax("https://pokeapi.co/api/v2/pokemon-color/yellow", {
    success: function(data, status, jqXHR) {

      $.when.apply($, data.pokemon_species.map(function(pokemon){
        return getDetails(pokemon);
      })).done(function(){
        fillList();
      });

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(`${jqXHR.status} - ${jqXHR.statusText} - ${jqXHR.responseText}`);
    }

  });

});








