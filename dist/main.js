(()=>{"use strict";const e=document.querySelector("#container"),t=document.createElement("div");t.setAttribute("id","leftbar");const n=document.createElement("div");n.setAttribute("id","todoBar"),e.appendChild(t),e.appendChild(n);const c=document.createElement("div");c.textContent="Home";const o=document.createElement("div");o.textContent="Today";const d=document.createElement("div");d.textContent="Week";const l=document.createElement("div");l.textContent="+",document.querySelector("#submit").onclick=function(){let e,t=document.querySelector("#title").value,n=document.querySelector("#desc").value,c=document.querySelector("#date").value;var o=document.getElementsByName("radio");for(let t=0;t<o.length;t++)o[t].checked&&(e=o[t].value,o[t].checked=!1);new u(t,n,e,c).createBar(),document.querySelector("#title").value="",document.querySelector("#desc").value="",document.querySelector("#date").value="",r.style.display="none"},t.appendChild(c),t.appendChild(o),t.appendChild(d),t.appendChild(l);const i=[];l.setAttribute("id","myBtn"),l.onclick=function(){r.style.display="block"};var r=document.getElementById("myModal");window.onclick=function(e){e.target==r&&(r.style.display="none"),e.target==detailWindow&&(detailWindow.style.display="none")};let a=0;class u{constructor(e,t,n,c){this.title=e,this.desc=t,this.pri=n,this.date=c}createBar(){const e=document.createElement("div");e.setAttribute("class","todo"),e.setAttribute("id",a),a++;const t=document.createElement("div"),n=document.createElement("div");var c;n.setAttribute("class","colorbox"),n.style.backgroundColor="low"==(c=this.pri)?"green":"med"==c?"yellow":"high"==c?"red":void 0,t.textContent=this.title;const o=document.createElement("img");o.setAttribute("class","trash"),o.setAttribute("src","bin.png"),e.appendChild(n),e.appendChild(t),e.appendChild(o),function(e){i.push(e),s()}(e),o.onclick=function(){!function(e){for(let t=0;t<i.length;t++)i[t].id==e&&i.splice(t,1);s()}(e.id)}}}function s(){n.innerHTML="";for(let e=0;e<i.length;e++)n.appendChild(i[e])}})();