if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(pos){
console.log("Duzina: " + pos.coords.longitude);
console.log("Sirina: " + pos.coords.latitude);
  });
} else {
  console.log("browser ne podržava geolokaciju");
}

