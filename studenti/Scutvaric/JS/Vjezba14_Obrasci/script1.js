// export var modul1 = {
//     x: 1,
//     y: function() {
//         console.log('Bok');
//     }
// }

// export var modul3 = {
//     x: 1
// }

// var modul1 = {
//     x: 1,
//     y: function() {
//         console.log('Bok');
//     }
// }

// export default modul1

export var Exercise = (function() {
    var steps = 0;

    function increaseSteps(){
        steps++;
    }
    return {
        getTotalSteps: function() {
            return steps;
        },
        walk: function() {
            increaseSteps();
        }
    }
})();