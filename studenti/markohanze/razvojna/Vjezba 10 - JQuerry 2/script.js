$(document).ready(function() {
    const source = document.getElementById("hb-template").innerHTML;
    const destination = document.getElementById("hb-result");
    const template = Handlebars.compile(source);
    let xkr = new XMLHttpRequest();
    xkr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/purple", true);

    function addStripes() {
        $("table tr").removeClass("striped")
        $("table tr:nth-child(even)").addClass("striped");
    }

    function afterRender() {
        $("table th").css("color", "darkBlue");
        addStripes();

$("table tr").on("mouseenter", event => {
    $(event.currentTarget).css("backgroundColor","yellow")
});

$("table tr").on("mouseleave", event => {
    $(event.currentTarget).removeAttr("style");
});

        setTimeout(() => {
            const hideElements = $("table td a:contains('s')").filter(function() {
                return this.innerHTML.indexOf("s") === 0;
            });
            hideElements.closest("tr").remove();
            addStripes()
            console.log(`Maknuo sam ${hideElements.length} redova`)
            $(`<div></div>`).insertAfter($("#hb-template")).text("Skriveno " + hideElements.length)
        }, 2000);
    }

    function fillList() {
        const data = JSON.parse(xkr.response);
        const context = { pokemon: data.pokemon_species.slice(0, 20), tableClass: "table" };
        const html = template(context);
        destination.innerHTML = html;
        $('[data-toggle="popover"]').popover();
        afterRender();
    }

    xkr.onload = function() {
        fillList();
    };

$(window).resize(() => {
    console.log($(window).width());
});

    xkr.send();
});
