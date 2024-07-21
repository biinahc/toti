//Vamos lá, fazer mais um exercicio!

function clikedButton(){
    console.log(' o botão foi clicado');

}

function addNewTask(){
    let input = document.querySelector('#newTask');
    let tasklist = document.querySelector('#TaskList');
    let newTask = input.value;
    input.value = '';

    let listItem = document.createElement('li');
    listItem.textContent = newTask;
    tasklist.appendChild(listItem);

}

function displayValue(event){
    console.log(event.target);
    console.log(event.target.value);

}

document.querySelector('#btnAddTask').addEventListener('Click', addNewTask)
document.querySelector('#newTask').addEventListener('change', displayValue)
document.querySelector('#newTask').addEventListener('change', addNewTask)
