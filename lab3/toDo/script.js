let addToDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let pendingTasks = document.getElementById('pendingTasks');
let completedTasks = document.getElementById('completedTasks');

addToDoButton.addEventListener('click', function () {
    if (inputField.value.trim() === "") return;

    let task = document.createElement('p');
    task.classList.add('paragraph-styling');
    task.innerText = inputField.value;
    pendingTasks.appendChild(task);
    inputField.value = "";

    // Перемещение в "Выполненные" при клике
    task.addEventListener('click', function () {
        task.classList.add('completed');
        completedTasks.appendChild(task);
    });

    // Удаление из "Выполненных" при двойном клике
    task.addEventListener('dblclick', function () {
        completedTasks.removeChild(task);
    });
});
