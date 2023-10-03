import Todaytodo from "./today";

const container = document.querySelector("#container");
const leftbar = document.createElement("div");
leftbar.setAttribute("id", "leftbar");

const todoBar = document.createElement("div");
todoBar.setAttribute('id', 'todoBar');

container.appendChild(leftbar);
container.appendChild(todoBar);

const home = document.createElement("div");
home.textContent = "Home";

const today = document.createElement("div");
today.textContent = "Today";

const Week = document.createElement("div");
Week.textContent = "Week";

const addTodo = document.createElement("div");
addTodo.textContent = "+";

const submit = document.querySelector("#submit");
submit.onclick = sendForm;

function sendForm() {

  let title = document.querySelector("#title").value;
  let desc = document.querySelector("#desc").value;
  let date = document.querySelector("#date").value;
  let pri;
  var ele = document.getElementsByName('radio');

  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      pri=ele[i].value;
      ele[i].checked=false;
    }
  }

  let todo=new Todo(title,desc,pri,date);
  todo.createBar();

  document.querySelector("#title").value = "";
  document.querySelector("#desc").value = "";
  document.querySelector("#date").value = "";

  modal.style.display = "none";

}

leftbar.appendChild(home);
leftbar.appendChild(today);
leftbar.appendChild(Week);
leftbar.appendChild(addTodo);

const todos = [];

addTodo.setAttribute('id', "myBtn");
addTodo.onclick = add;

function add() {
  modal.style.display = "block";

}

//Modal
var modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == detailWindow) {
    detailWindow.style.display = "none";
  }
}
let count=0;
class Todo{
  constructor(title,desc,pri,date){
    this.title=title;
    this.desc=desc;
    this.pri=pri;
    this.date=date;
  }

  createBar(){
    const todo=document.createElement('div');
    todo.setAttribute('class','todo');
    todo.setAttribute('id',count);
    count++;

    const todoTitle=document.createElement('div');
    const colorBar=document.createElement('div');
    colorBar.setAttribute('class','colorbox');
   
    colorBar.style.backgroundColor=findPriColor(this.pri);
    todoTitle.textContent=this.title;

    const trash=document.createElement('img');
    trash.setAttribute('class','trash');
    trash.setAttribute('src','bin.png');

    todo.appendChild(colorBar);
    todo.appendChild(todoTitle);
    todo.appendChild(trash);
    AddTodo(todo);
    

    trash.onclick=function(){
      DeleteTodo(todo.id);
    };
  }
}

function AddTodo(todo){
  todos.push(todo);
  Update();
}

function DeleteTodo(todo){
  for(let i=0;i<todos.length;i++){
    if(todos[i].id==todo){
      todos.splice(i, 1);
    }
  }
  Update();
}

function Update(){
    todoBar.innerHTML='';
    for(let i=0;i<todos.length;i++){
      todoBar.appendChild(todos[i]);
    }
}

function findPriColor(pri){
  if(pri=='low'){
    return 'green';
  }else if(pri=='med'){
    return 'yellow';
  }else if(pri=="high"){
    return 'red';
  }
}