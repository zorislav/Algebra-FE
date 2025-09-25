document.addEventListener("DOMContentLoaded", main);

function main() {
  // Dohvati id naloga
  const urlParams = new URLSearchParams(window.location.search);
  const odabraniNalogId = urlParams.get("id");

  // Ucitaj naloge iz localStorage
  const nalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

  let okButtonEl = document.getElementById("ok");
  let cancelButtonEl = document.getElementById("cancel");
  let brojNalogaEl = document.getElementById("broj_naloga");
  let brojNarudzbeEl = document.getElementById("narudzbenica");
  let datumNalogaEl = document.getElementById("datum_naloga");
  let naruciteljEl = document.getElementById("narucitelj");
  let izvrsiteljEl = document.getElementById("izvrsitelj");
  let mjestoTroskaEl = document.getElementById("mjesto_troska");
  let nositeljTroskaEl = document.getElementById("nositelj_troska");
  let datumPocetkaEl = document.getElementById("datum_pocetka");
  let vrijemePocetkaEl = document.getElementById("vrijeme_pocetka");
  let datumZavrsetkaEl = document.getElementById("datum_zavrsetka");
  let vrijemeZavrsetkaEl = document.getElementById("vrijeme_zavrsetka");
  let naslovEl = document.getElementById("naslov");
  let opisEl = document.getElementById("opis");

  okButtonEl.addEventListener("click", handleOkClick);
  cancelButtonEl.addEventListener("click", () =>
    handleCancelClick(odabraniNalogId)
  );

  // U nizu naloga pronmadji odabrani
  const odabraniNalog = nalozi.find((nalog) => nalog.id === odabraniNalogId);

  // Popuni elemente odabranim nalogom
  brojNalogaEl.value = odabraniNalog.brojNaloga;
  brojNarudzbeEl.value = odabraniNalog.brojNarudzbe;
  datumNalogaEl.value = odabraniNalog.datumNaloga;
  naruciteljEl.value = odabraniNalog.narucitelj;
  izvrsiteljEl.value = odabraniNalog.izvrsitelj;
  mjestoTroskaEl.value = odabraniNalog.mjestoTroska;
  nositeljTroskaEl.value = odabraniNalog.nositeljTroska;
  datumPocetkaEl.value = odabraniNalog.datumPocetka;
  vrijemePocetkaEl.value = odabraniNalog.vrijemePocetka;
  datumZavrsetkaEl.value = odabraniNalog.datumZavrsetka;
  vrijemeZavrsetkaEl.value = odabraniNalog.vrijemeZavrsetka;
  naslovEl.value = odabraniNalog.naslov;
  opisEl.value = odabraniNalog.opis;

  // Poziva se pri odabiru brisanja naloga
  function handleOkClick() {
    const answer = confirm("Spremi izmjene?");
    if (answer) {
      // Popuni nalog novim vrijednostima
      odabraniNalog.brojNaloga = brojNalogaEl;
      odabraniNalog.brojNarudzbe = brojNarudzbeEl.value;
      odabraniNalog.datumNaloga = datumNalogaEl.value;
      odabraniNalog.narucitelj = naruciteljEl.value;
      odabraniNalog.izvrsitelj = izvrsiteljEl.value;
      odabraniNalog.mjestoTroska = mjestoTroskaEl.value;
      odabraniNalog.nositeljTroska = nositeljTroskaEl.value;
      odabraniNalog.datumPocetka = datumPocetkaEl.value;
      odabraniNalog.vrijemePocetka = vrijemePocetkaEl.value;
      odabraniNalog.datumZavrsetka = datumZavrsetkaEl.value;
      odabraniNalog.vrijemeZavrsetka = vrijemeZavrsetkaEl.value;
      odabraniNalog.naslov = naslovEl.value;
      odabraniNalog.opis = opisEl.value;

      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
      window.open("lista.html", "_self");
    }
  }

  function handleCancelClick(id) {
    window.open(`prikaz.html?id=${id}`, "_self");
  }
}
