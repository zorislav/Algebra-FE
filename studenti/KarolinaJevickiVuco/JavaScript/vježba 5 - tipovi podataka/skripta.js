//KOje su varijable iste po vrijednosti?
// === operator uspoređivanja i po vrijednosti  i po tipu
// = operator uspoređivanja po vrijednosti ??
// == operator uspoređivanja po tipu ???

var x = "Lorem ipsum",
    y = 2345,
    z = "2345"
	  q = false,
	  w;                                      //output: undefined

x += '3' + 1;                             //isto kao x = x + '3' + 1;  --> Output: Lorem ipsum31
var baaa = "b" + "a" + +"a" + "a";        // ouput: baNaNa  = b+a + Not a Number + a


if (y===z){                               //output: Ne
  console.log('Da'); 
}else {
  console.log('Ne');
}

//paziti na implicitne transformacije tipova podataka  npr. + koji konvertira broj u string ili - string u broj