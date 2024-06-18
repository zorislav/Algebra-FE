// 1. Dimenzije prozora

console.log("Širina prozora " + window.innerWidth)
console.log("Visina prozora " + window.innerHeight)

// Dimenzije ekrana

console.log("Širina ekrana " + window.screen.width)
console.log("Visina ekrana " + window.screen.height)

// 2. Adresa
console.log("Adresa " + window.location.hostname)
// window.location.replace("http://www.google.com")

// 3. 
var odgovor = window.confirm("Prihvaćate li cookies?")
console.log("Cookies: " + odgovor)

function kasnije() {
    console.log("Windows je učitao stranicu negdje")
}

window.setTimeout(kasnije, 5000)