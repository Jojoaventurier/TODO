const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards")

addBtn.addEventListener('click', addTask); // add a task on click

function addTask () {
    const newTask = taskCard.cloneNode(true)
    
console.log(newTask) // clone the task card
}
