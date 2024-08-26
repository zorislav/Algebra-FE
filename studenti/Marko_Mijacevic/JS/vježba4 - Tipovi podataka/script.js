var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
(q = false), (w = 1);

//1. y, z if(a === b) {...} (== testiranje vrijednosti; ===testiranje vrijednost i tip)

x += "3" + 1;
//x = x + "3" + 1

// 2. x? x = Lorem ipsum31
//console.log(x);
//console.log(typeof x);

var baaa = "b" + "a" + +"a" + "a";
// 3. baaa = baNaNa
console.log(baaa);
