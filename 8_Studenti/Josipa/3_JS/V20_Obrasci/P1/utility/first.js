export var exercise = (function () {
  // sa svim tim zagradama zove se function expresion
  var steps = 0;

  function increaseSteps() {
    // uzima var varijablu steps i funkcija ju povecava za 1
    steps++;
  }
  return {
    walk: function () {
      increaseSteps();
    },
    getTotalSteps: function () {
      return steps;
    },
  };
})();
