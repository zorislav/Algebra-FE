$(document).ready(function () {
  let pokemons = [];

  function addStripes() {
    $("table tr").removeClass("striped");

    $("table tr:nth-child(even)").addClass("striped");
  }

  function afterRender() {
    $('[data-bs-toggle="popover"]').popover();

    $("table th").css("color", "darkBlue");

    $("table tr").on("mouseenter", (event) => {
      $(event.currentTarget).css("backgroundColor", "yellow");
    });

    $("table tr").on("mouseleave", (event) => {
      $(event.currentTarget).removeAttr("style");
    });

    addStripes();

    setTimeout(function () {
      const hideElements = $("table td a:contains('p')").filter(function () {
        return this.innerHTML.indexOf("p") == 0;
      });

      hideElements.closest("tr").remove();

      addStripes();

      $("<div></div>")
        .insertAfter($("#hb-template"))
        .text("Skriveno: " + hideElements.length);
    }, 2000);
  }

  function fillList(pokemons) {
    const source = document.getElementById("hb-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = { pokemon: pokemons.slice(0, 20), tableClass: "table" };
    const html = template(context);
    document.getElementById("hb-result").innerHTML = html;

    afterRender();
  }

  $(window).resize(() => {
    console.log($(window).width());
  });

  function getDetails(pokemon) {
    return $.ajax(pokemon.url, {
      success: function (data) {
        const hab = data.habitat ? data.habitat.name : "";
        const grow = data.growth_rate ? data.growth_rate.name : "";

        const pokData = {
          name: pokemon.name,
          url: pokemon.url,
          habitat: hab,
          growth_rate: grow,
        };

        pokemons.push(pokData);
      },
    });
  }

  $.ajax("https://pokeapi.co/api/v2/pokemon-color/yellow", {
    success: function (data, status, jqXHR) {
      $.when
        .apply(
          $,
          data.pokemon_species.map(function (pokemon) {
            return getDetails(pokemon);
          })
        )
        .done(function () {
          fillList(pokemons);
        });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $("<div></div>")
        .insertAfter($("#hb-template"))
        .text("Error: " + textStatus);
    },
  });
});
