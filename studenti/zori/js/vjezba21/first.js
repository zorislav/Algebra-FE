export var Exercise = (function(){
  var steps = 0;
  function increaseSteps() {
    steps++;
  }
  return {
    getTotalSteps: function() {
      return steps;
    },
    walk: function() {
      increaseSteps();
    }
  };
})();

export const myObj = {
  ime: "Perica",
  prezime: "Mali"
};