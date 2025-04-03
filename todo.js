document.addEventListener("DOMContentLoaded", function() {

// Get elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to create todo list items
function createListItem(taskText) {
    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Toggle completion when clicked
    listItem.addEventListener("click", function() {
        listItem.classList.toggle("completed");
    });

    // remove task with a double click
    listItem.addEventListener("dblclick", function (){
        taskList.removeChild(listItem); 
    });

    return listItem;
}

// Function to add task
function addTask() {
    let taskText = taskInput.value.trim(); 

    if (taskText !== "") {
        let listItem = createListItem(taskText);
        taskList.appendChild(listItem);
        taskInput.value = ""; //clears input
    }
}

// Event listener for button click 
addTaskButton.addEventListener("click", addTask);
});