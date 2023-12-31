import Todaytodo from './today';
import HomePage from './home';
import WeekToDo from './week';

const container = document.querySelector('#container');
const leftbar = document.createElement('div');
leftbar.setAttribute('id', 'leftbar');

const todoBar = document.createElement('div');
todoBar.setAttribute('id', 'todoBar');

container.appendChild(leftbar);
container.appendChild(todoBar);

const TodoHeader = document.createElement('div');
TodoHeader.textContent = 'To-Do List';
TodoHeader.setAttribute('id', 'todoheader');

const home = document.createElement('div');
home.textContent = 'Home';

const today = document.createElement('div');
today.textContent = 'Today';

const Week = document.createElement('div');
Week.textContent = 'Week';

const addTodo = document.createElement('div');
addTodo.textContent = '+';

const submit = document.querySelector('#submit');
submit.onclick = sendForm;

function sendForm() {
	let title = document.querySelector('#title').value;
	let desc = document.querySelector('#desc').value;
	let date = document.querySelector('#date').value;
	let pri;
	var ele = document.getElementsByName('radio');

	const todoContainer = document.createElement('div');

	for (let i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			pri = ele[i].value;
			ele[i].checked = false;
		}
	}

	if (title == '' || desc == '' || date == '' || pri == '') {
		title.setCustomValidity('Please fill out this field');
	} else {
		let todo = new Todo(title, desc, pri, date);
		AddTodo(todo);
		renderTodoContainer(createToDoContainer(todo));
		addStorage(todos, 'todos');
		console.log(getStorage('todos'));

		document.querySelector('#title').value = '';
		document.querySelector('#desc').value = '';
		document.querySelector('#date').value = '';

		modal.style.display = 'none';
	}
}

leftbar.appendChild(TodoHeader);
leftbar.appendChild(home);
leftbar.appendChild(today);
leftbar.appendChild(Week);
leftbar.appendChild(addTodo);

let todos = getStorage('todos') !== null ? getStorage('todos') : [];

//let todos = [];

addTodo.setAttribute('id', 'myBtn');
addTodo.onclick = add;

function add() {
	modal.style.display = 'block';
}

today.onclick = function () {
	Todaytodo(todos);
};

home.onclick = function () {
	HomePage(todos);
};

Week.onclick = function () {
	WeekToDo(todos);
};

//Modal
var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
	if (event.target == detailWindow) {
		detailWindow.style.display = 'none';
	}
};

let count = 0;

class Todo {
	constructor(title, desc, pri, date) {
		this.title = title;
		this.desc = desc;
		this.pri = pri;
		this.date = date;
	}
}
export default function createToDoContainer(todoObject) {
	const todoContainer = document.createElement('div');

	todoContainer.setAttribute('class', 'todo');
	todoContainer.setAttribute('id', count);
	count++;

	const todoTitle = document.createElement('div');
	const colorBar = document.createElement('div');
	const detail = document.createElement('div');

	detail.innerText = 'Detail';
	detail.setAttribute('class', 'detail');
	colorBar.setAttribute('class', 'colorbox');

	var done = document.createElement('INPUT');
	done.setAttribute('type', 'checkbox');

	done.onclick = () => {
		if (done.checked) {
			todoTitle.classList.remove('notdone');
			todoTitle.classList.add('done');
		} else {
			todoTitle.classList.remove('done');
			todoTitle.classList.add('notdone');
		}
	};

	colorBar.style.backgroundColor = findPriColor(todoObject.pri);
	todoTitle.textContent = todoObject.title;

	const trash = document.createElement('img');
	trash.setAttribute('class', 'trash');
	trash.setAttribute('src', 'bin.png');

	todoContainer.appendChild(colorBar);
	todoContainer.appendChild(done);
	todoContainer.appendChild(todoTitle);
	todoContainer.appendChild(detail);
	todoContainer.appendChild(trash);

	detail.onclick = () => {
		detailWindow.style.display = 'block';
		const titlebox = document.querySelector('#titlebox');
		titlebox.innerText = 'Title: ' + todoObject.title;

		const detailbox = document.querySelector('#detailbox');
		detailbox.innerText = 'Detail: ' + todoObject.desc;

		const datebox = document.querySelector('#datebox');
		datebox.innerText = 'Date: ' + todoObject.date;
	};

	trash.onclick = () => {
		Delete(todoObject);
	};

	return todoContainer;
}

function Delete(todoObject) {
	const index = todos.indexOf(todoObject);
	todos.splice(index, 1);
	renderTodoContainer();
	addStorage(todos, 'todos');
}

function AddTodo(todo) {
	todos.push(todo);
	renderTodoContainer();
}

function findPriColor(pri) {
	if (pri == 'low') {
		return 'green';
	} else if (pri == 'med') {
		return 'yellow';
	} else if (pri == 'high') {
		return 'red';
	}
}

function renderTodoContainer() {
	todoBar.innerHTML = '';
	for (let i = 0; i < todos.length; i++) {
		todoBar.appendChild(createToDoContainer(todos[i]));
	}
}

function addStorage(param, name) {
	localStorage.setItem(name, JSON.stringify(param));
}

function getStorage(name) {
	return JSON.parse(localStorage.getItem(name));
}

renderTodoContainer();
