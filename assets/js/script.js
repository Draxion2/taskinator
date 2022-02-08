var formEl = document.querySelector("#task-form"),
tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskListener = function(event) {
    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskListener);