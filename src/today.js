import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import createToDoContainer from '.';

export default function Todaytodo(todos) {
	const todoBar = document.querySelector('#todoBar');
	todoBar.innerHTML = '';

	for (let i = 0; i < todos.length; i++) {
		if (
			differenceInCalendarDays(new Date(todos[i].date), new Date()) == 0
		) {
			todoBar.appendChild(createToDoContainer(todos[i]));
		}
	}
}
