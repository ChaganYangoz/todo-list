export default function HomePage(todos){
    const todoBar=document.querySelector('#todoBar');
    todoBar.innerHTML='';

    for(let i=0;i<todos.length;i++){
        todoBar.appendChild(todos[i].todoContainer);
    }
}