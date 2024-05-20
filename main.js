const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards")
const delBtn = document.querySelector('.delBtn');

let tasksCount = document.getElementsByClassName("todoCard").length

addBtn.addEventListener('click', addTask); // add a task on click

delBtn.addEventListener('click', function() { // delete degfault task on click
    deleteTask(taskCard); // target the right task
});

function addTask () {
    const newTask = taskCard.cloneNode(true) // clone the task card
    const newTextArea = newTask.querySelector('.task')
    const newDelBtn = newTask.querySelector('.delBtn')

    newTextArea.value = "New Task" // set the new task text to "New Task" // On définit la valeur de la zone de texte afin qu'elle ne soit pas vide
    newDelBtn.addEventListener('click', function () { // add delete event listener to new task
        deleteTask(newTask); // target the new task
        displayCount();
    });
    tasksContainer.appendChild(newTask) // append new task to the tasks container
    displayCount();

}

// on créé la fonction suppression
function deleteTask(task) {
    task.remove(); // remove the task
    displayCount();
}

function displayCount() {
    let count = document.getElementsByClassName("todoCard").length;
    document.getElementById("counter").innerHTML = count;
    }







