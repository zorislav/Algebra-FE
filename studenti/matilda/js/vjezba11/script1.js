var student = {
  firstName: "Monica",
  get getName() {
    return this.firstName;
  },
  set changeName(newName) {
    this.firstName = newName;
  },
};
/* console.log(student);
console.log(student.firstName);
console.log(student.getName); */

student.changeName = "Monica";
console.log(student.firstName);
