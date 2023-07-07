function findMax(numbers) {
  var i;
  var max = -Infinity;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

module.exports = findMax;

//1.terminal: npm init -y
//2.npm install --save-dev jest - skidaju se moduli, pričekati - zna potrajati duže
//3. kreirati folder __tests__ i unutar njega datoteka script.test.js - ikonica kao posudica za testiranje u kemiji
//4. naša datoteka ima funk. findMAx koja prihvaća parametar i definira lokalne var i i max koja označava minus beskonačno
// - imamo for petlju u kojoj ispitujemo je li tekući element veći od max --- > na kraju bi funk trebala vratiti najveću vrijednost niza
//exportiramo tu max funckiju
//5. u script.test.js upisujemo:
 constmaxNumber = require('../script'); //navodimo put do datoteka
 const testArray = [1,2,4,89,43,2,-1];    //definiramo testno polje s ovim vrijednostima

 test('Get max number', () => {              //ovim se definira test - ime testa, funkcija
  expect(maxNumber(testArray)).toBe(89);    //ovdje kao max vrijednost očekujemo broj 89
 });

 test('Get number', () => {              //ovim se definira test - ime testa, funkcija
  expect(maxNumber(testArray)).notToBeNaN(89);    //ovdje očekujemo da rezultat bude broj
 });

 test('Mock primjer', () => {               //mock funkcija unutar testne datoteke
  const myMock = jest.fn((i) => i)          //funkcija s ulaznim parametrom i, vraća parametar i
  expect(myMock("Bk")).toBe("Bok");       //za ovo ćemo dobiti rezultat failed jer očekujemo BOK, a funk će vratiti BK
  expect(myMock).toHaveBeenCalled();                 //očekujemo da je funkcija već bila pozvana
  expect(myMock).toHaveBeenCalledTimes(1);              //očekujemo da smo funkciju već pozivali jednom
  expect(myMock).toHaveBeenCalledWith("Bok");     //očekujemo da smo funkciju pozivali već s Bok
 });

 //6. package,json file - ima dio scripts test u kojem mijenjamo to u "jest" i SPREMIMO
 //7. Terminal: npm test --> dobijemo info da je testiranje prošlo, koja datoteka, koji testovi, koliko vremena