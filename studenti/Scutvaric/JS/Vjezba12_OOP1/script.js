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
  character.prototype = function() {
      return quotes[Math.floor(Math.random()*quotes.length)]
  }
  
  proto1.vratiCitat = function() {
    return quotes[Math.floor(Math.random()*quotes.length)]
  }

  console.log(proto1);
  console.log(character.vratiCitat());