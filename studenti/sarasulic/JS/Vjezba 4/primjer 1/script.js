var x = "Lorem ipsum",
  y = 2345,
  z = "2345",
  q = false,
  w = 1;

// 1. y,z if (a === b) {...}

x += "3" + 1;
// x = x + "3" + 1;

// 2. x? x = Lorem ipsum31
//console.log(x);
//console.log(typeof x);

var baaa = "b" + "a" + +"a" + "a";

// 3. baaa? baaa = "baNaNa"
console.log(baaa);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var dodaniText = text + ",consectetur adipiscing elit";
console.log(dodaniText);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova
var velikiText = text.toUpperCase();
console.log(velikiText);

// 6. Maknite počenu prazninu u stringu
var bezPrazninaText = text.trim();
console.log(bezPrazninaText);

// 7. Nađite slovo na poziciji 12
var slovo = text.charAt(12);
console.log(slovo);
