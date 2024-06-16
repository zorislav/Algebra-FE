var student = {
  firstName: 'Monica',
  get getName() {
    return this.firstName;
  },
  set changeName(newName) {
    this.firstName = newName;
  }
};

//console.log(student);
//console.log(student.firstName);
//console.log(studetn.getName);

student.changeName = 'Marica';
console.log(student.firstName);