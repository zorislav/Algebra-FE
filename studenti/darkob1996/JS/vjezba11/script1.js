var student = {
  firstName: "Monica",
  get getName() {
    return this.firstName;
  },

  set changeName(newName) {
    this.firstName = newName;
  },
};
