// 1.

let character = {
    name: 'Eleven',
    show: 'Stranger Things',
    portrayedBy: 'Millie Bobby Brown'
}
  
let quotes = [
    'I\'m going to my friends. I\'m going home.', 
    'Pure fuel! PURE FUEL! WOO!', 
    'See? Zoomer.', 
    'Bitchin.'
];
//   console.log(character)
//   console.log(quotes)

// 2.
let proto1 = Object.getPrototypeOf(character);
let proto2 = Object.getPrototypeOf(proto1);

console.log(proto1);
console.log(proto2);

  // 3a.
proto1.getQuote = function() {
    return quotes[Math.floor(Math.random()*quotes.length)]
}
console.log(character.getQuote())

  