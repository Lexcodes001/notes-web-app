var nameCnt = document.getElementById('name-cnt');
var grts = document.getElementById('grts');
var btnOne = document.getElementById('btn-one');
var btnTwo = document.getElementById('btn-two');
btnTwo.style.visibility = 'hidden';
    
function getName() {
    var name = document.getElementById('name').value;
    if (name == '') {
        grts.innerHTML = 'Welcome here Buddy!';
    } else {
        grts.innerHTML = 'Welcome here ' + name + '!';
    }
    nameCnt.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.visibility = 'visible';
}
