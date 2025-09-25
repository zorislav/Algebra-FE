$(document).ready(() => {
  let pokemons = [];

  function addStripes() {
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  function afterRender() {
    $("table th").css("color", "darkBlue");
    addStripes();

    $("table tr").on("mouseenter", (event) => {
      $(event.currentTarget).css("backgroundColor", "yellow");
    });

    $("table tr").on("mouseleave", (event) => {
      $(event.currentTarget).removeAttr("style");
    });

    setTimeout(function () {
      const hideElements = $("table a:contains('p')").filter(function () {
        return this.innerHTML.indexOf("p") == 0;
      });

      hideElements.closest("tr").remove();
      addStripes();

      $("<div></div>")
        .insertAfter($("#hb-template"))
        .text("Skriveno: " + hideElements.length);
    }, 2000);
  }

  function fillList() {
    const source = document.getElementById("hb-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = {
      pokemon: pokemons.slice(0, 20),
      tableClass: "table",
    };
    const html = template(context);
    document.getElementById("hb-result").innerHTML = html;
    $('[data-bs-toggle="popover"]').popover();

    afterRender();
  }

  //  $(window).resize(() => {
  //    console.log($(window).width());
  //  });

  function getDetails(pokemon) {
    return $.ajax(pokemon.url, {
      method: "GET",
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

  $.ajax("https://pokeapi.co/api/v2/pokemon-color/yellow/", {
    method: "GET",
    success: function (data) {
      $.when
        .apply(
          $,
          data.pokemon_species.map(function (pokemon) {
            return getDetails(pokemon);
          })
        )
        .done(function () {
          fillList();
        });

      fillList(data);
    },
    error: function (jqXHR) {
      console.log(
        `${jqXHR.status} - ${jqXHR.statusText} - ${jqXHR.responseText}`
      );
    },
  });
});
