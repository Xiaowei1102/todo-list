(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"html, body {\n    margin: 0;\n    height: 100%;\n}\n.body-container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: beige;\n}\n\n.header {\n    flex: 1 1 auto;\n    width: 100vw;\n    background-color: aqua;\n    height: 150px;\n    font-size: 50px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    vertical-align: center;\n    display: flex;\n    align-items: center;\n    padding-left: 30px;\n}\n.sidebar-content-container {\n    padding-left: 30px;\n    flex: 1 1 auto;\n    display: flex;\n    height: 600px;\n}\n\n.sidebar {\n    flex: 1 1 auto;\n}\n\n.content-container {\n    flex: 3 1 auto;\n}\n\n.footer {\n    flex: 1 1 auto;\n    height: 100px;\n    width: 100vw;\n    background-color: black;\n}\n\n.content-title {\n    display: flex;\n}\n\n.content-project-title {\n    flex: 1 1 auto;\n}\n\n#project-form {\n    display: none;\n    flex-direction: column;\n}\n\n#todo-form {\n    display: none;\n}\n\n.todo-container {\n    display: flex;\n    gap: 20px;\n}\n\n.todo-title {\n    flex: 1 1 auto;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}setComplete(e){this.isComplete=e}changePriority(e){this.priority=e}}var t=n(379),o=n.n(t),r=n(795),i=n.n(r),a=n(569),c=n.n(a),s=n(565),l=n.n(s),u=n(216),d=n.n(u),p=n(589),f=n.n(p),m=n(426),v={};function h(e,t,n,o,r,i){const a=document.createElement(e);if(null!=t){let e=t.toLowerCase().split(" ");for(let t of e)a.classList.add(t)}document.getElementsByClassName(n.toLowerCase())[0],o?document.getElementsByClassName(n.toLowerCase())[0].insertBefore(a,document.getElementsByClassName(r)[0].nextSibling):document.getElementsByClassName(n.toLowerCase())[0].appendChild(a),i&&(a.innerHTML=i)}function y(e){const t=`${e.projectName.toLowerCase().split(" ").join("")}-todo-container`;h("div",t,"content-container",!0,"content-title",null);for(let n of e.project){const e=`${n.title}-container todo-container`;h("div",e,t,!1,null,null);const o=["title","description","duedate","edit","delete"],r=[n.title,"DETAILS",n.dueDate,"Edit","DELETE"];for(let t=0;t<o.length;t++)h(0===t||2===t?"div":"button",`${n.title}-title todo-${o[t]}`,e,!1,null,r[t])}}v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;class g{constructor(e,t){this.project=e,this.projectName=t}}const x=new e("swim","do it","9/25","low"),b=new e("run","just run","9/26","medium"),w=[],j=new g([x,b],"Gym");var C;w.push(j),y(j),h("div",(C=j).projectName,"project-item-container",!1,null,C.projectName),document.querySelector(".project-button").addEventListener("click",(e=>{document.querySelector("#project-form").style.display="flex"})),document.querySelector(".submit-project").addEventListener("click",(e=>{e.preventDefault();const t=document.getElementById("project-title");h("div",t.value.toLowerCase().split(" ").join(""),"project-item-container",!1,null,t.value),document.querySelector(".content-project-title").innerHTML=t.value;const n=new g([],t.value);w.push(n),y(n)}))})()})();