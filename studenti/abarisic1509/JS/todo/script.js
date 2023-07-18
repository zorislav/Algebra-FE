function initTodo() {
  //DOM elements
  const addTaskInput = document.getElementById("addTaskInput");
  const addTaskForm = document.getElementById("addTaskForm");
  const taskList = document.getElementById("tasks");
  const clearButton = document.getElementById("clear");
  const panelButtons = document.querySelectorAll(".panel-btn");

  //create elements
  function createTaskElements(taskId, task) {
    //create task item
    const listItem = document.createElement("li");
    listItem.id = taskId;

    //create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + taskId;

    //create label
    const label = document.createElement("label");
    label.setAttribute("for", "checkbox" + taskId);
    label.textContent = task;

    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-task-btn");
    deleteButton.textContent = "X";

    //append all elements to task list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    //return list item
    return listItem;
  }

  //tasks CRUD
  function addTask() {
    const task = addTaskInput.value.trim();
    if (task !== "") {
      const taskId = generateUniqueId();
      const listItem = createTaskElements(taskId, task);

      taskList.appendChild(listItem);
      addTaskInput.value = "";
    }
  }

  function deleteTask(taskId) {
    const listItem = document.getElementById(taskId);
    listItem.remove();
  }
  function deleteCompletedTasks() {
    const completedTasks = document.querySelectorAll(
      '.panel input[type="checkbox"]:checked'
    );

    completedTasks.forEach((task) => {
      const listItem = task.parentNode;
      listItem.remove();
    });
  }

  //toggle different views
  function showCompletedTasks(taskItems) {
    taskItems.forEach((task) => {
      const checkbox = task.querySelector('input[type="checkbox"]');
      if (checkbox.checked) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  }
  function showActiveTasks(taskItems) {
    taskItems.forEach((task) => {
      const checkbox = task.querySelector('input[type="checkbox"]');
      if (!checkbox.checked) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  }
  function showAllTasks(taskItems) {
    taskItems.forEach((task) => {
      task.style.display = "block";
    });
  }

  //helper
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 5);
    return timestamp + randomStr;
  }

  //submit
  function handleSubmit(e) {
    e.preventDefault();
    addTask();
  }

  //event listeners
  addTaskForm.addEventListener("submit", handleSubmit);
  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-task-btn")) {
      const taskId = event.target.parentNode.id;
      deleteTask(taskId);
    }
  });
  clearButton.addEventListener("click", deleteCompletedTasks);
  panelButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the "active" class from all panel buttons
      panelButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add the "active" class to the clicked panel button
      button.classList.add("active");

      // Determine which panel button was clicked and show the corresponding tasks
      const id = button.id;

      const taskItems = document.querySelectorAll(".panel li");
      if (id === "completed") {
        showCompletedTasks(taskItems);
      } else if (id === "active") {
        showActiveTasks(taskItems);
      } else {
        showAllTasks(taskItems);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", initTodo);
