var nameCnt = document.getElementById('name-cnt');
var grts = document.getElementById('grts');
var btnOne = document.getElementById('btn-one');
var nameForm = document.getElementById('name-form');
var btnCtn = document.getElementById('btn-cnt');
btnOne.addEventListener("click", getName);
var btnTwo = document.getElementById('btn-two');

function getName() {
    var getName = document.getElementById('name').value.trim();
    localStorage.setItem("name", getName);
    var userName = localStorage.getItem("name");
    if (userName == '') {
        grts.innerHTML = 'Welcome here Buddy!';
    } else {
        grts.innerHTML = `Welcome here ${userName}!`;
    }
    nameForm.style.display = 'none';
    var secondBtn = `<button onclick= "goToPage()" id="btn-two" type="submit">Next</button>`;
    btnCtn.innerHTML = secondBtn;
}

function goToPage() {
    var getName = document.getElementById('name').value.trim();
    localStorage.setItem("name", getName);
    var userName = localStorage.getItem("name");

    let mainPage = `<div class="body">
            
    <div class="topnav">
        <div class="topnav-left">
            <div onclick="displayNotes()" class="topnav-left-item">
                Notes
            </div>
            <div onclick="displayTodolist()" class="topnav-left-item">
                To-Do List
            </div>
        </div>

        <div class="topnav-middle">Hi ${userName}!</div>

        <div class="topnav-right">
            <span class="material-icons">facebook</span>
            <span ><img class="icon" src="/Images/whatsapp-icon.png" alt="whatsapp icon" /></span>
            <span><input type="checkbox" id="toggle">
            <label for="toggle" class="button"></label></span>
        </div>
    </div>

    <div id="bodycontent">
        <div id="notes">notes</div>
        <div id="todolist">todolist</div>
    </div>

</div>

<script src="/Js/getName.js"></script>
<script src="/Js/toggle.js"></script>
<script src="/Js/actions.js"></script>`;

document.querySelector('body').innerHTML = mainPage;
}
