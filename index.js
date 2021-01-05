'use strict';

// Variables
const toDoInput = document.querySelector('#todo-input');
const liItem = document.getElementsByClassName('li');
const icon = document.getElementsByClassName('trash-icon');

// Adds new task when 'Add' button is clicked

document.querySelector('.btn-add').addEventListener('click', function () {
  if (toDoInput.value === '') {
    alert('You have to write a task!');
  } else {
    // Variables
    const ul = document.querySelector('ul');
    const newLiItem = document.createElement('li');
    const text = document.createTextNode(toDoInput.value);
    const newEl = document.createElement('i');

    // Adds new li element with class '.li' with text = input from the user
    newLiItem.classList.add('li');
    newLiItem.appendChild(text);
    ul.appendChild(newLiItem);

    // Adds 'trash' icon to every created task element
    newEl.classList.add('fas', 'fa-trash', 'trash-icon');
    newLiItem.appendChild(newEl);
    toDoInput.value = '';

    // When list items are clicked adds background color and line throught the item with class '.finished-task'. On second click removes the class from the item.
    for (let i = 0; i < liItem.length; i++) {
      liItem[i].onclick = function () {
        liItem[i].classList.toggle('finished-task');
      };
    }
    // When trash icon is clicked - list item on that row is removed
    for (let i = 0; i < icon.length; i++) {
      icon[i].onclick = function () {
        liItem[i].style.display = 'none';
      };
    }
  }
});
