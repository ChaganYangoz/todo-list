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
  var ele = document.getElementsByName('radio');

  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      let mrg=new MergeToDo(title,desc,date,ele[i].value);
    ele[i].checked=false;}
  }

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
}


class MergeToDo {
  constructor(title, desc, date, pri) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.pri = pri;
  }
}