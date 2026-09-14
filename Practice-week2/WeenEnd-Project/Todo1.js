const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("SearchInput");
const todoList = document.getElementById("todolist");

let tasks = [

];

// Display all the tasks
function displayTasks(taskArray = tasks) {

    todoList.innerHTML = "";

    taskArray.forEach(function (task) {
        const li = document.createElement("li");
        li.classList.add("todo-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.id = `task-${task.id}`;

        const label = document.createElement("label");
        label.htmlFor = `task-${task.id}`;
        label.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
        });
        deleteButton.addEventListener("click", function () {
            deleteTask(task.id);
        });
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

// Add new tasks
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    displayTasks();
    taskInput.value = "";
    taskInput.focus();
});

// Delete task
function deleteTask(taskId) {
    tasks = tasks.filter(function (task) {
        return task.id !== taskId;
    });
    displayTasks();
}

// Search tasks
searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    const filteredTasks = tasks.filter(function (task) {
        return task.text.toLowerCase().includes(searchText);
    });
    displayTasks(filteredTasks);
});

// Display
displayTasks();
