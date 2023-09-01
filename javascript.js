var form = document.querySelector('form');
var todoList = document.querySelector('ul');
var button = document.querySelector('button');
var input = document.getElementById('user-todo');

var todosArray = [];

localStorage.setItem('todos', JSON.stringify(todosArray));

var storage = JSON.parse(localStorage.getItem('todos'));

todosArray.push(input.value);

localStorage.setItem('todos', JSON.stringify(todosArray));

form.addEventListener('submit', function(e){
    e.preventDefault();
    todoMaker(input.value);
    input.value = '';
});

var todoMaker = function(text){
    var todo = document.createElement('li')
    todo.textContent = text;
    todoList.appendChild(todo);
};

button.addEventListener('click', function(){
    var todoItems = document.querySelector('li')
    while(todoItems.firstChild)
    todoList.removeChild(todoList.firstChild);
});

