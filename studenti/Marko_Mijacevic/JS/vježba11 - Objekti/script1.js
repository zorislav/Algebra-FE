var student = {
  firstName: "Monika",
  get getName() {
    return this.firstName; //<-this je referenca na objekat
  },
  set changeName(newName) {
    this.firstName = newName; //<-this je referenca na objekat
  },
};

//console.log(student);
//console.log(student.firstName);
//console.log(student.getName);
student.changeName = "Marica";
console.log(student.firstName);
