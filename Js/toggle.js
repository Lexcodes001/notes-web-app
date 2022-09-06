var getNotes = document.getElementById('notes'),
    getTodolist = document.getElementById('todolist'),
    notesBtn = document.getElementById('notes-btn'),
    todolistBtn = document.getElementById('todolist-btn');

notesBtn.addEventListener('click', displayNotes);
todolistBtn.addEventListener('click', displayToDoList);


function displayNotes() {
    getNotes.style.display = 'block';
    getTodolist.style.display = 'none';
}

function displayToDoList() {
    getNotes.style.display = 'none';
    getTodolist.style.display = 'block';
}

var toggle = document.getElementById('toggle');

if (toggle.checked == true) {
    
} else {
    
}
