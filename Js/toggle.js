var getNotes = document.getElementById('notes');
var getTodolist = document.getElementById('todolist');

function displayNotes() {
    getNotes.style.display = 'block';
    getTodolist.style.display = 'none';
}

function displayTodolist() {
    getNotes.style.display = 'none';
    getTodolist.style.display = 'block';
}

var toggle = document.getElementById('toggle');

if (toggle.checked == true) {
    
} else {
    
}
