export var Exercise = (function(){
    var steps = 0;
    function increseSteps() {
        steps++;
    }
    return {
        getTotalSteps: function(){
            return steps;
        },
        walk: function() {
            increseSteps();
        }
    };
})();

export const mojObj = {
    ime: "Perica",
    prezime: "Mali",
};