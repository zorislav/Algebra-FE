var student = {
  firstName: "Monika",
  get getName() {
    return this.firstName;
  },
  set changeName(newName) {
    this.firstName = newName;
  },
};

console.log(student);
console.log(student.firstName);
console.log(student.getName);
student.changeName = "Marica";
//console.log(student.firstName);
