document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
   
  //Add Tasks
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = document.querySelector("#new-task-description").value;
    const taskList = document.querySelector("#tasks");
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
  });

  taskList.innerHTML = "";
  taskArrays.forEach(task => taskList.appendChild(task));

  sortAscending = !sortAscending;

  const sortButton = document.querySelector("#button");
  sortButton.textContent = sortAscending ? "Sort Descending" : "Sort Ascending";
  
  // Add edit and delete buttons
  const deleteButton = document.createElement("delete-button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => taskItem.remove());
  taskList.appendChild(deleteButton);

  const editButton = document.createElement("edit-button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    const newTask = prompt("Edit task", taskItem.textContent);
    if (newTask) {
      taskItem.textContent = newTask;
    }
  });
  taskList.appendChild(editButton);


  //Function to sort tasks by priority
  function sortTasks() {
    const tasks = Array.from(taskList.children);
    tasks.sort((a, b) => {
      const priorityA = a.querySelector("select").value;
      const priorityB = b.querySelector("select").value;
      return priorityA.localeCompare(priorityB);
    });
    taskList.innerHTML = "";
    tasks.forEach(task => taskList.appendChild(task));
  } 

  sortButton.addEventListener("click", sortTasks);

  const priority = document.querySelector("#new-task-priority").value;
  taskItem.style.color = getPriorityColor(priority);
  Color(priority);

  //Function to sort tasks color by priority
  function getPriorityColor(priority) {
    switch (priority) {
      case "high":
        return "red";
      case "medium":
        return "yellow";
      case "low":
        return "green";
      default:
        return "black";
    }
  }
  
});
