import differenceInWeeks from 'date-fns/differenceInWeeks';
import createToDoContainer from '.';

export default function WeekToDo(todos) {
	const todoBar = document.querySelector('#todoBar');
	todoBar.innerHTML = '';

	for (let i = 0; i < todos.length; i++) {
		if (differenceInWeeks(new Date(todos[i].date), new Date()) == 0) {
			todoBar.appendChild(createToDoContainer(todos[i]));
		}
	}
}
