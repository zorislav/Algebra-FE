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

export let myObj = {
    ime: "Đuro",
    prezime: "Đaković"
} 