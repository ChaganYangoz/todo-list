(()=>{"use strict";const e=document.querySelector("#container"),t=document.createElement("div");t.setAttribute("id","leftbar");const n=document.createElement("div");n.setAttribute("id","todoBar"),e.appendChild(t),e.appendChild(n);const o=document.createElement("div");o.textContent="Home";const d=document.createElement("div");d.textContent="Today";const c=document.createElement("div");c.textContent="Week";const l=document.createElement("div");l.textContent="+",document.querySelector("#submit").onclick=function(){let e=document.querySelector("#title").value,t=document.querySelector("#desc").value,n=document.querySelector("#date").value;var o=document.getElementsByName("radio");for(let d=0;d<o.length;d++)o[d].checked&&(new r(e,t,n,o[d].value).display(),o[d].checked=!1);document.querySelector("#title").value="",document.querySelector("#desc").value="",document.querySelector("#date").value="",i.style.display="none"},t.appendChild(o),t.appendChild(d),t.appendChild(c),t.appendChild(l),l.setAttribute("id","myBtn"),l.onclick=function(){i.style.display="block"};var i=document.getElementById("myModal");window.onclick=function(e){e.target==i&&(i.style.display="none"),e.target==detailWindow&&(detailWindow.style.display="none")};class r{constructor(e,t,n,o){this.title=e,this.desc=t,this.date=n,this.pri=o}display(){const e=document.createElement("div"),t=document.createElement("div"),o=(document.createElement("div"),document.createElement("div"),document.createElement("div"));o.setAttribute("class","colorbox"),"low"==this.pri?o.style.backgroundColor="green":"med"==this.pri?o.style.backgroundColor="yellow":"high"==this.pri&&(o.style.backgroundColor="red"),e.setAttribute("class","todoBox");const d=document.createElement("div");d.textContent="Details",d.setAttribute("class","detail"),d.onclick=()=>{document.querySelector("#detailWindow").style.display="block",document.querySelector("#titlebox").textContent="Title: "+this.title,document.querySelector("#detailbox").textContent="Details: "+this.desc,document.querySelector("#datebox").textContent="Date: "+this.date};const c=document.createElement("img");c.setAttribute("class","trash"),c.setAttribute("src","bin.png"),c.onclick=()=>{this.remove()},t.textContent=this.title,e.appendChild(o),e.appendChild(t),e.appendChild(d),e.appendChild(c),n.appendChild(e)}}})();