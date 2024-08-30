

var student = { //u varijabli spremamo objekt pomocu literala
  firstName: 'Monica',//prvo svojstvo
  get getName() { //drugo svojstvo get koje ce biti funkcija
    return this.firstName;
  },
  set changeName(newName) { //trece svojstvo set funkcija
    this.firstName = newName;
  }
};

//console.log(student);
//console.log(student.firstName);
//console.log(student.getName);
student.changeName = 'Marica';
console.log(student.firstName);


// get i set su kljucne rjeci
// ove dvije funkcije sluze za pristup odnosno promjenu svojstava objekta
// this je kljucna rjec koja omogucava funkcijama da imaju pristup do internog svojstva firstName