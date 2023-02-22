// console.dir(document.title);
// //document.title. ='suchita';
// //console.log(document.all)

// console.log(document.all[8].textContent)


// access by document.getElementById('id')
// let title = document.getElementById('header');
// title.textContent = 'hello';
// title.innerText = 'good bye';
// title.innerHTML='<h1>hi</h1>'
// console.log(document)


//task21
// let items = document.getElementsByTagName('li');
// items[0].textContent = 'HELLO';
// items[0].style.backgroundColor = "green";
// items[1].textContent = 'Sharpner';
// items[1].style.backgroundColor = "yellow";


//document.getElementsByClassName
//var newName = document.getElementById('name').textContent
var newEmail = document.getElementById('email')
//console.log(newName)



//Event for click
var button = document.getElementsByTagName('input');
// button[2].addEventListener('click', buttonclick);
// function buttonclick(e) {
//     e.preventDefault();

//     button[2].style.backgroundColor = 'green';

// }



//Event for mouseover

button[2].addEventListener('mouseover', buttonover);
function buttonover(e) {

    button[2].style.backgroundColor = 'red';

}


//Event for mouseout

button[2].addEventListener('mouseout', buttonout);
function buttonout(e) {

    button[2].style.backgroundColor = 'black';

}


var newName = document.querySelector('#name');
var newEmail = document.querySelector('#email');
var myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    button[2].style.backgroundColor = 'green';
    if (newName.value === '' || newEmail.value === '') {
       
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 5000);
    } 
    else {
        
        const li = document.createElement('li');      
        li.appendChild(document.createTextNode(`Name-${newName.value}:  Email-${newEmail.value}`));
        userList.appendChild(li);
        newName.value = '';
        newEmail.value = '';
      }

}



