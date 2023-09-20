const container=document.querySelector("#container");
const leftbar=document.createElement("div");
leftbar.setAttribute("id","leftbar");

const todoBar=document.createElement("div");
todoBar.setAttribute('id','todoBar');

container.appendChild(leftbar);
container.appendChild(todoBar);

const home=document.createElement("div");
home.textContent="Home";

const today=document.createElement("div");
today.textContent="Today";

const Week=document.createElement("div");
Week.textContent="Week";

const addTodo=document.createElement("div");
addTodo.textContent="+";

leftbar.appendChild(home);
leftbar.appendChild(today);
leftbar.appendChild(Week);
leftbar.appendChild(addTodo);

const todos=[];

addTodo.setAttribute('id',"myBtn");
addTodo.onclick=add;

function add(){
    todos.push('a');
    console.log(todos);
}

//Modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}