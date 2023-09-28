(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),c=n.n(i)()(r());c.push([e.id,"html, body {\n    margin: 0;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n}\n.body-container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: beige;\n}\n\n.header {\n    flex: 1 1 auto;\n    width: 100vw;\n    background-color: aqua;\n    height: 150px;\n    font-size: 50px;\n    font-weight: bolder;\n    vertical-align: center;\n    display: flex;\n    align-items: center;\n    padding-left: 30px;\n}\n.sidebar-content-container {\n    flex: 1 1 auto;\n    display: flex;\n    height: 600px;\n}\n\n.sidebar {\n    padding-left: 30px;\n    flex: 1 1 auto;\n    background-color: greenyellow;\n    padding-right: 20px;\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.project-title {\n    font-size: 40px;\n}\n\n.project-item-container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.project-item-container > div {\n    background-color: yellow;\n    cursor: pointer;\n    border-radius: 10px;\n    font-size: 20px;\n    padding-left: 20px;\n}\n\n.content-container {\n    flex: 3 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.footer {\n    flex: 1 1 auto;\n    height: 100px;\n    width: 100vw;\n    background-color: black;\n}\n\n.content-title {\n    display: flex;\n    margin-top: 15px;\n    gap: 20px;\n}\n\n.content-project-title {\n    flex: 1 1 auto;\n    font-size: 30px;\n    background-color: magenta;\n    border-radius: 10px;\n    padding: 20px;\n}\n\n.project-todo-container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#project-form {\n    display: none;\n    flex-direction: column;\n}\n\n#todo-form {\n    display: none;\n    flex-direction: column;\n}\n\n.todo-container {\n    display: flex;\n    gap: 20px;\n    background-color: white;\n    border-radius: 15px;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px;\n    align-items: center;\n}\n\n.todo-title {\n    width: 150px;\n}\n\n.todo-description {\n    flex: 1 1 auto;\n}\n\n\nbutton {\n  background-color: #fff000;\n  border-radius: 12px;\n  color: #000;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 10px 15px;\n  text-align: center;\n  transition: 200ms;\n\n  box-sizing: border-box;\n  border: 0;\n  font-size: 16px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\nbutton:not(:disabled):hover,\nbutton:not(:disabled):focus {\n  outline: 0;\n  background: #f4e603;\n  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);\n}\n\nbutton:disabled {\n  filter: saturate(0.2) opacity(0.5);\n  -webkit-filter: saturate(0.2) opacity(0.5);\n  cursor: not-allowed;\n}\n\nform {\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: 20px;\n    gap: 8px;\n}\n\ninput {\n    padding: 16px 8px;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 10px;\n}\n\n.buttons {\n    display: flex;\n    justify-content: space-around;\n}",""]);const a=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(c[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var l=e[a],d=o.base?l[0]+o.base:l[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var l=o(e,r),d=0;d<i.length;d++){var s=n(i[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}setComplete(e){this.isComplete=e}changePriority(e){this.priority=e}}var t=n(379),o=n.n(t),r=n(795),i=n.n(r),c=n(569),a=n.n(c),l=n(565),d=n.n(l),s=n(216),u=n.n(s),p=n(589),f=n.n(p),m=n(426),y={};function g(e,t,n,o){const r=document.createElement(e);if(null!=t){let e=t.toLowerCase().split(" ");for(let t of e)r.classList.add(t)}document.getElementsByClassName(n.toLowerCase())[0].appendChild(r),o&&(r.innerHTML=o)}function x(e){for(let t of e.todoList){const e=t.title.toLowerCase().split(" ").join(""),n=`${e}-container todo-container`;g("div",n,"project-todo-container",null);const o=["title","description","details","duedate","edit","delete"],r=[t.title," ","DETAILS",t.dueDate,"Edit","DELETE"];for(let t=0;t<o.length;t++)g(0===t||1===t||3===t?"div":"button",`${e} todo-${o[t]}`,n,r[t])}}function v(e,t){document.querySelector(e).style.display=t}function h(e){document.querySelector(e).style.display="none"}y.styleTagTransform=f(),y.setAttributes=d(),y.insert=a().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=u(),o()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;class b{constructor(e,t){this.todoList=e,this.projectName=t}}let j=null,E=null;const L=new e("swim","do it","2023-09-28","low"),w=new e("run","just run","2023-09-27","medium"),S=[],k=new b([L,w],"Gym");var q;function C(){for(let e of S)if(e.projectName===document.querySelector(".content-project-title").innerHTML)return e}function N(e){let t=C();for(let n of t.todoList)if(n.title.toLowerCase().split(" ").join("")===e)return n}S.push(k),x(k),g("div",(q=k).projectName,"project-item-container",q.projectName),document.querySelector(".project-button").addEventListener("click",(e=>{v("#project-form","flex")})),document.querySelector(".submit-project").addEventListener("click",(e=>{e.preventDefault(),h("#project-form");const t=document.getElementById("project-title");g("div",t.value.toLowerCase().split(" ").join(""),"project-item-container",t.value),document.querySelector(".content-project-title").innerHTML=t.value;const n=new b([],t.value);S.push(n),document.querySelector(".project-todo-container").replaceChildren(),document.getElementById("project-form").reset()})),document.querySelector(".todo-button").addEventListener("click",(e=>{v("#todo-form","flex"),j="add"})),document.querySelector(".submit-todo").addEventListener("click",(t=>{if("add"===j){t.preventDefault(),h("#todo-form");const n=document.getElementById("todo-title").value,o=document.getElementById("todo-details").value,r=document.getElementById("duedate").value,i=document.getElementById("priority").value,c=new e(n,o,r,i);let a;for(let e of S)e.projectName===document.querySelector(".content-project-title").innerHTML&&(e.todoList.push(c),a=e);document.querySelector(".project-todo-container").replaceChildren(),x(a),document.getElementById("todo-form").reset(),j=null}if("edit"===j){t.preventDefault(),h("#todo-form");const e=N(E);e.title=document.getElementById("todo-title").value,e.description=document.getElementById("todo-details").value,e.dueDate=document.getElementById("duedate").value,e.priority=document.getElementById("priority").value;const n=C();document.querySelector(".project-todo-container").replaceChildren(),x(n),document.getElementById("todo-form").reset(),j=null}})),document.querySelectorAll(".close-project, .close-todo").forEach((e=>{e.addEventListener("click",(e=>{h(`#${e.target.className.split("-")[1]}-form`)}))})),document.querySelector(".project-todo-container").addEventListener("click",(e=>{if(e.target.className.includes("todo-details")){const t=e.target.className.split(" ")[0],n=document.querySelector(`.${t}.todo-description`);if(" "!==n.innerHTML)n.innerHTML=" ";else{const e=N(t);n.innerHTML=`${e.priority} : ${e.description}`}}})),document.querySelector(".project-todo-container").addEventListener("click",(e=>{e.target.className.includes("todo-edit")&&(E=e.target.className.split(" ")[0],v("#todo-form","flex"),j="edit")})),document.querySelector(".project-todo-container").addEventListener("click",(e=>{if(e.target.className.includes("todo-delete")){E=e.target.className.split(" ")[0];let t=N(E),n=C(),o=n.todoList.indexOf(t);o>-1&&n.todoList.splice(o,1),document.querySelector(".project-todo-container").replaceChildren(),x(n)}})),document.querySelector(".project-item-container").addEventListener("click",(e=>{if("project-item-container"===e.target.parentElement.className)for(let t of S)t.projectName===e.target.innerHTML&&(document.querySelector(".content-project-title").innerHTML=t.projectName,document.querySelector(".project-todo-container").replaceChildren(),x(t))}))})()})();