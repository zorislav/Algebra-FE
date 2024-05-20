var student = {
  firstName: "Monica",
  get getName() {
    return; //
  },
  set changeName(newName) {
    this.firstName = newName;
  },
};

//console.log(student);
//console.log(student.firstName);
//console.log(student.getName);
student.changeName = "Marica";
console.log(student.firstName);
