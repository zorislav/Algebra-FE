 constmaxNumber = require('script'); //navodimo put do datoteka
 const testArray = [1,2,4,89,43,2,-1];    //definiramo testno polje s ovim vrijednostima

 test('Get max number', () => {              //ovim se definira test - ime testa, funkcija
  expect(findMax(testArray)).toBe(89);    //ovdje kao max vrijednost očekujemo broj 89
 });
 test('Get number', () => {              //ovim se definira test - ime testa, funkcija
  expect(findMax(testArray)).notToBeNaN(89);    //ovdje očekujemo da rezultat bude broj
 });

 test('Mock primjer', () => {               //mock funkcija unutar testne datoteke
  const myMock = jest.fn((i) => i)          //funkcija s ulaznim parametrom i, vraća parametar i
  expect(myMock("Bk")).toBe("Bok");       //za ovo ćemo dobiti rezultat failed jer očekujemo BOK, a funk će vratiti BK
  expect(myMock).toHaveBeenCalled();                 //očekujemo da je funkcija već bila pozvana
  expect(myMock).toHaveBeenCalledTimes(1);              //očekujemo da smo funkciju već pozivali jednom
  expect(myMock).toHaveBeenCalledWith("Bok");     //očekujemo da smo funkciju pozivali već s Bok
 });
