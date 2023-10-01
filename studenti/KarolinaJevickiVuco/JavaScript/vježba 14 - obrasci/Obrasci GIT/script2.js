import {Exercise} from './script1.js';  //mišem preko exercise - pokazuje funckije koje su javne

console.log(Exercise.getTotalSteps());   
//poziva funkciju koja pokazuje ukupan broj koraka - ispis: 0 (jer nismo hodali još) 

Exercise.walk(); 
Exercise.walk(); 
console.log(Exercise.getTotalSteps());   
//ispis: 2 - jer je funkcija walk pozvala internu funckiju increase steps koja povećava iznos varijable za jedan sa svakim pozivanjem