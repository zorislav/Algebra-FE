//1. Napišite modul za brojanje broja koraka. Modul će se brinuti o povećanju broja koraka, a izvana će se moći pristupiti dvjema metodama modula: walk() i getTotalSteps().

//2. Exportajte modul iz datoteke.

export var Exercise = (function() {
  var steps = 0;

  function increaseSteps() {
    steps++;            //povećava korake za 1
  }
  return {
    getTotalSteps: function() {
      return steps;      //dostupna izvana - javna
    },
    walk: function() {
      increaseSteps();  //javni dio - poziva privatnu funkciju koja povećava korake
    }
  
  }
})();