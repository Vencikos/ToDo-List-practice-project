'use strict';

const ToDoInput = document.querySelector('#todo-input');

document.querySelector('.btn-add').addEventListener('click', function () {
  const ul = document.querySelector('ul');
  const newLiItem = document.createElement('li');
  const text = document.createTextNode(ToDoInput.value);
  console.log(text);
  console.log(newLiItem);
  newLiItem.appendChild(text);
  ul.appendChild(newLiItem);
  ToDoInput.value = '';
});
