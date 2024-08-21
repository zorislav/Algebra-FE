var firstName = prompt('Input first name: ');
var lastName = prompt('Input last name: ');

var fullName = firstName + " " + lastName;

console.log(fullName);

//var x = z === 2? y : 5;

// var x;

// if(z === 2){
//     x = y;
// }else{
//     x = 5;
// }

//3. Napišite petlju koja će prolaziti 
//kroz brojeve od 1 do 20. Za svaku će 
//iteraciju provjeriti je li trenutni broj 
//paran ili neparan, i console.log-ati rezultat 
//(npr. "Broj 2 je paran").  

for(let i = 1; i<=20; i++){
    if(i % 2 == 0){
        console.log('Broj ' + i + ' je paran.');
    }else{
        console.log('Broj ' + i + ' je neparan.');
    }
}