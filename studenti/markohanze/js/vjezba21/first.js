// export var Exercise = (function(){
//   var steps = 0;
//   function increaseSteps( {
//     steps++;
//   })
//   return {
//     getTotalSteps: function() {
//       return steps;
//     },

//     walk: function() { 
//       increaseSteps();

//     }
//   }
// })();

export let Exercise = (function() {
  let steps = 0
  function increaseSteps() {
      steps++
  }
  return {
      getTotalSteps: function() {
          return steps
      },
      walk: function() {
          increaseSteps()
      }
  }
})()