
// 1. Pratite kod u scripts.js.

// 2. Nadite prototip objekta "character" (naputak: koristite metode globalnog Object objekta). Nadite prototip tog prototipa. Ispisite ih.

// 3. Dodajte prototipu objekta "character" funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes".


var character = {
    name: 'Eleven',
    show: 'Stranger Things',
    portrayedBy: 'Millie Bobby Brown'
  }
  
  const quotes = [
      'I\'m going to my friends. I\'m going home.', 
      'Pure fuel! PURE FUEL! WOO!', 
      'See? Zoomer.', 
      'Bitchin.'
  ];
  
  // 2.
  var proto1 = Object.getPrototypeOf(character);
  var proto2 = Object.getPrototypeOf(proto1);
  
  console.log(proto1);
  console.log(proto2);
  
  // 3.
  character.vratiCitat = function() {
        console.log('funkcija vratiCitat');
      return quotes[Math.floor(Math.random()*quotes.length)]; //math random ...izbacuje cijeli broj između 1 i 0 ali nije cijeli broj
  }
  
  console.log(proto1);
  console.log(character.vratiCitat());