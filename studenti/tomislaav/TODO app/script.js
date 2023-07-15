const list = [];

window.onload = () => {
  const addButton = document.getElementById("button-add");
  addButton.onclick = add;
};

const add = () => {
  const textElement = document.getElementById("todo-text");
  console.log(textElement);
  const item = {
    textContent: textElement.value,
    isCompleted: false,
  };
  list.push(item);
  const tasks = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.appendChild(document.createTextNode(item.textContent));
  newTask.appendChild(createCheckBox());
  newTask.appendChild(createRemoveButton());
  tasks.appendChild(newTask);
};

const createRemoveButton = () => {
  const button = document.createElement("button");
  button.innerText = "X";
  return button;
};

const createCheckBox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox"
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";
  return checkbox;
 
};
