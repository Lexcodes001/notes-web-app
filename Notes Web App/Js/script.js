var hour, care, ans, grts = document.getElementById('grts');
const currentDate = new Date();
const currentHour = currentDate.getHours();
if (currentHour <= 11) {
    hour = 'Good Morning';
    care = 'Hope you slept well?';
} else if (currentHour <= 16) {
    hour = 'Good Afternoon';
    care = 'Hope your day is running smoothly?';
} else {
    hour = 'Good Evening';
    care = 'Have a good night rest!';
    }
    
if (window.innerWidth > 660) {
    //ans = prompt('Please enter your name:', '');
    if (ans == null || ans == '') {
        text = `${hour} Buddy!`;
    } else {
        text = `${hour} ${ans}!`;
    }
    var i = 0, speed = 400;
    function typingEffect() {
        if (i < text.length) {
            grts.innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, speed);
        } else {
            grts.innerHTML += ' <br> ';
            i = 0;
            typeEffect();
        }
    }
    function typeEffect() {
        if (i <= care.length) {
            grts.innerHTML += care.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        } else {
            //grts.innerHTML += '&nbsp';
            grts.innerText = '';
            i = 0;
            typingEffect();
        }
    }
    typingEffect();
}

let getNotes = document.getElementById("notes");
let getTodolist = document.getElementById("todolist");
let notesBtn = document.getElementById("notesBtn");
let todolistBtn = document.getElementById("todolistBtn");
let firstDisplay = document.querySelector('.welcome-page');

function displayNotes() {
    notesBtn.classList.add('clicked');
    notesBtn.classList.remove('opq');
    todolistBtn.classList.remove('clicked');
    todolistBtn.classList.add('opq');
    firstDisplay.style.display = 'none';
    getNotes.style.display = 'block';
    getTodolist.style.display = 'none';
    if (window.innerWidth < 660) {
        getNotes.style.marginTop = '6.5rem';
    } else {
        getNotes.style.margin = '5rem';
    }
    }

function displayToDoList() {
    todolistBtn.classList.add('clicked');
    todolistBtn.classList.remove('opq');
    notesBtn.classList.remove('clicked');
    notesBtn.classList.add('opq');
    firstDisplay.style.display = 'none';
    getTodolist.style.display = 'block';
    getNotes.style.display = 'none';
    if (window.innerWidth < 660) {
        getTodolist.style.margin = 'auto';
    } else{
        getTodolist.style.margin = 'auto';
    }
    }
    
window.onload = () => {
    illustration.style.display = 'flex';
    if (currentHour > 16) {
        themeToggle.click();
    }
    //getNotes.style.display = 'none';
    //getTodolist.style.display = 'none';
}

const themeToggle = document.querySelector('#toggle');
themeToggle.addEventListener('click', ()=>{
    themeToggle.classList.toggle('dark');
    if(themeToggle.classList.contains('dark')){
        document.documentElement.style.setProperty('--bg', '#1f1d2b');
        document.documentElement.style.setProperty('--box', '#252836');
        document.documentElement.style.setProperty('--header', '#9a9ba1');
        document.documentElement.style.setProperty('--txt', '#575a64');
        document.documentElement.style.setProperty('--btn', '#515197');
    }
    else{
        document.documentElement.style.setProperty('--bg', '#f3f3f8');
        document.documentElement.style.setProperty('--box', '#fff');
        document.documentElement.style.setProperty('--header', '#777');
        document.documentElement.style.setProperty('--txt', '#999');
        document.documentElement.style.setProperty('--btn', '#666');
    }
});
