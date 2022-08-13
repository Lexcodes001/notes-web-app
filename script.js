var getNotes = document.getElementById('notes');

var getTodolist = document.getElementById('todolist');

var toggle = document.getElementById('toggle');

function displayNotes() {
    getNotes.style.display = 'block';
    getTodolist.style.display = 'none';
}

function displayTodolist() {
    getNotes.style.display = 'none';
    getTodolist.style.display = 'block';
}

if (toggle.checked == true) {
    
} else {
    
}