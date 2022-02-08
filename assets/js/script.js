var buttonEl = document.querySelector("#save-task"),
tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskListener = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskListener);