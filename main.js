(()=>{"use strict";const e=document.querySelector("#container"),t=document.createElement("div");t.setAttribute("id","leftbar");const n=document.createElement("div");n.setAttribute("id","todoBar"),e.appendChild(t),e.appendChild(n);const o=document.createElement("div");o.textContent="Home";const l=document.createElement("div");l.textContent="Today";const d=document.createElement("div");d.textContent="Week";const c=document.createElement("div");c.textContent="+",document.querySelector("#submit").onclick=function(){let e=document.querySelector("#title").value,t=document.querySelector("#desc").value,n=document.querySelector("#date").value;var o=document.getElementsByName("radio");for(let l=0;l<o.length;l++)if(o[l].checked){let d=new s(e,t,n,o[l].value);i++,d.display(),o[l].checked=!1}document.querySelector("#title").value="",document.querySelector("#desc").value="",document.querySelector("#date").value="",a.style.display="none"};let i=0;t.appendChild(o),t.appendChild(l),t.appendChild(d),t.appendChild(c);const r=[];c.setAttribute("id","myBtn"),c.onclick=function(){a.style.display="block"};var a=document.getElementById("myModal");window.onclick=function(e){e.target==a&&(a.style.display="none"),e.target==detailWindow&&(detailWindow.style.display="none")};class s{constructor(e,t,n,o){this.title=e,this.desc=t,this.date=n,this.pri=o}display(){const e=document.createElement("div"),t=document.createElement("div"),o=(document.createElement("div"),document.createElement("div"),document.createElement("div"));o.setAttribute("class","colorbox"),"low"==this.pri?o.style.backgroundColor="green":"med"==this.pri?o.style.backgroundColor="yellow":"high"==this.pri&&(o.style.backgroundColor="red"),e.setAttribute("class","todoBox");const l=document.createElement("div");l.textContent="Details",l.setAttribute("class","detail"),l.onclick=()=>{document.querySelector("#detailWindow").style.display="block",document.querySelector("#titlebox").textContent="Title: "+this.title,document.querySelector("#detailbox").textContent="Details: "+this.desc,document.querySelector("#datebox").textContent="Date: "+this.date},e.setAttribute("id",i),r.push(e),console.log(r[i].id);const d=document.createElement("img");d.setAttribute("class","trash"),d.setAttribute("src","bin.png"),d.onclick=()=>{!function(e){for(let t=0;t<r.length;t++)if(e==r[t].id){console.log(r.id),console.log(r);break}}(e.id)},t.textContent=this.title,e.appendChild(o),e.appendChild(t),e.appendChild(l),e.appendChild(d),n.appendChild(e)}}})();