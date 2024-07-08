document.addEventListener('DOMContentLoaded', function() {

    const taskInput = document.getElementById('new-task-input');

    const addTaskButton = document.getElementById('add-task-button');

    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText === '') return;

        const listItem = document.createElement('li');

        const taskTextSpan = document.createElement('span');

        taskTextSpan.textContent = taskText;

        taskTextSpan.addEventListener('dblclick', editTask);

        const deleteButton = document.createElement('button');

        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', deleteTask);

        listItem.appendChild(taskTextSpan);

        listItem.appendChild(deleteButton);

        listItem.addEventListener('click', toggleComplete);

        taskList.appendChild(listItem);

        taskInput.value = '';

    }

    function editTask(event) {

        const taskSpan = event.target;

        const input = document.createElement('input');

        input.type = 'text';

        input.value = taskSpan.textContent;

        input.addEventListener('blur', function() {

            taskSpan.textContent = input.value.trim() || taskSpan.textContent;

            taskSpan.style.display = '';

            input.remove();

        });

        input.addEventListener('keypress', function(e) {

            if (e.key === 'Enter') {

                input.blur();

            }

        });

        taskSpan.style.display = 'none';

        taskSpan.parentElement.insertBefore(input, taskSpan);

        input.focus();

    }

    function deleteTask(event) {

        event.stopPropagation();

        const listItem = event.target.parentElement;

        listItem.remove();

    }

    function toggleComplete(event) {

        if (event.target.tagName !== 'BUTTON') {

            event.target.classList.toggle('completed');

        }

    }

});