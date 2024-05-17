//1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.
/* 
var i = 2;

while (i < 20) {
    
    i = i + 1;

    if (i % 9 === 0) {

        continue;    
    }
    
    console.log(i);
} */

var i = 3;

while (i < 20) {

    if (i % 9 !== 0) {

        console.log(i);
    }
    i++;
}

// 2.dio varOne = ?

var varOne = 0;

for (var i = 0; i < 4; i++){
    for (var j = 0; j < 4; j++){
        varOne++;
        console.log('i: ' + i + ' j: ' + j + ' varOne: ' + varOne);
    }
}
console.log(varOne);