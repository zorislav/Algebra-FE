let lokacija = navigator.geolocation

if (lokacija) {
    lokacija.getCurrentPosition(function(pos){
        console.log("Dužina: " + pos.coords.longitude)
        console.log("Širina: " + pos.coords.latitude)
        console.log("Visina: " + pos.coords.altitude)
    })
} else {
    console.log("Browser ne podržava geolokaciju")
}