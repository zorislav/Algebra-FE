// Get elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('btn-add');
const taskList = document.getElementById('task-list');
const btnAll = document.getElementById('btn-all');
const btnActive = document.getElementById('btn-active');
const btnCompleted = document.getElementById('btn-completed');

let filter = 'all';

// Add task
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
    filterTasks();
  }
}

// Create task item
function createTaskItem(taskText) {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.className = 'task-checkbox';

  const taskTextElement = document.createElement('span');
  taskTextElement.className = 'task-text';
  taskTextElement.textContent = taskText;

  const taskDelete = document.createElement('span');
  taskDelete.className = 'task-delete';
  taskDelete.innerHTML = '&times;';

  // Delete task
  taskDelete.addEventListener('click', () => {
    taskItem.remove();
    filterTasks();
  });

  // Toggle task completion
  taskCheckbox.addEventListener('change', () => {
    if (taskCheckbox.checked) {
      taskTextElement.classList.add('completed');
    } else {
      taskTextElement.classList.remove('completed');
    }
    filterTasks();
  });

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(taskDelete);

  return taskItem;
}

// Filter tasks based on filter option
function filterTasks() {
  const taskItems = Array.from(taskList.getElementsByClassName('task-item'));
  taskItems.forEach((taskItem) => {
    const taskCheckbox = taskItem.querySelector('.task-checkbox');
    const isCompleted = taskCheckbox.checked;

    switch (filter) {
      case 'all':
        taskItem.style.display = 'flex';
        break;
      case 'active':
        taskItem.style.display = isCompleted ? 'none' : 'flex';
        break;
      case 'completed':
        taskItem.style.display = isCompleted ? 'flex' : 'none';
        break;
    }
  });

  updateActiveFilter();
}

// Update active filter
function updateActiveFilter() {
  btnAll.classList.remove('active');
  btnActive.classList.remove('active');
  btnCompleted.classList.remove('active');

  switch (filter) {
    case 'all':
      btnAll.classList.add('active');
      break;
    case 'active':
      btnActive.classList.add('active');
      break;
    case 'completed':
      btnCompleted.classList.add('active');
      break;
  }
}

// Event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

btnAll.addEventListener('click', () => {
  filter = 'all';
  filterTasks();
});

btnActive.addEventListener('click', () => {
  filter = 'active';
  filterTasks();
});

btnCompleted.addEventListener('click', () => {
  filter = 'completed';
  filterTasks();
});