(function(){"use strict";var t,e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,r="function"==typeof Object.create?Object.create:function(t){function e(){}return e.prototype=t,new e};if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var n;t:{var i={};try{i.__proto__={F:!0},n=i.F;break t}catch(u){}n=!1}t=n?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw new TypeError(t+" is not extensible");return t}:null}var o=t;function a(t,e){if(t.prototype=r(e.prototype),t.prototype.constructor=t,o)o(t,e);else for(var n in e)if("prototype"!=n)if(Object.defineProperties){var i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(t,n,i)}else t[n]=e[n];t.D=e.prototype}var c="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,r){t!=Array.prototype&&t!=Object.prototype&&(t[e]=r.value)};function s(){s=function(){},e.Symbol||(e.Symbol=l)}var u,l=(u=0,function(t){return"jscomp_symbol_"+(t||"")+u++});function f(){s();var t=e.Symbol.iterator;t||(t=e.Symbol.iterator=e.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&c(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return p(this)}}),f=function(){}}function p(t){var r=0;return function(t){return f(),(t={next:t})[e.Symbol.iterator]=function(){return this},t}(function(){return r<t.length?{done:!1,value:t[r++]}:{done:!0}})}function d(t){if(!(t instanceof Array)){f();var e=t[Symbol.iterator];t=e?e.call(t):p(t);for(var r=[];!(e=t.next()).done;)r.push(e.value);t=r}return t}var h=this;function v(t){return"string"==typeof t}function y(){}function g(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var r=Object.prototype.toString.call(t);if("[object Window]"==r)return"object";if("[object Array]"==r||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==r||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object";return e}function b(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var m="closure_uid_"+(1e9*Math.random()>>>0),A=0;function w(t,e,r){return t.call.apply(t.bind,arguments)}function S(t,e,r){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function E(t,e,r){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:S).apply(null,arguments)}var x,C=Date.now||function(){return+new Date};function O(t,e){function r(){}r.prototype=e.prototype,t.D=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.M=function(t,r,n){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[r].apply(t,i)}}var k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(v(t))return v(e)&&1==e.length?t.indexOf(e,0):-1;for(var r=0;r<t.length;r++)if(r in t&&t[r]===e)return r;return-1};function j(){}function L(t){this.j=t}function P(){var t=null;try{t=window.localStorage||null}catch(t){}this.j=t}O(j,function(){}),O(L,j),L.prototype.set=function(t,e){try{this.j.setItem(t,e)}catch(t){if(0==this.j.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},L.prototype.get=function(t){if(!v(t=this.j.getItem(t))&&null!==t)throw"Storage mechanism: Invalid value was encountered";return t},L.prototype.key=function(t){return this.j.key(t)},O(P,L);var _=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function T(t){return Y.test(t)?(-1!=t.indexOf("&")&&(t=t.replace(D,"&amp;")),-1!=t.indexOf("<")&&(t=t.replace(M,"&lt;")),-1!=t.indexOf(">")&&(t=t.replace(I,"&gt;")),-1!=t.indexOf('"')&&(t=t.replace(q,"&quot;")),-1!=t.indexOf("'")&&(t=t.replace(K,"&#39;")),-1!=t.indexOf("\0")&&(t=t.replace(F,"&#0;")),t):t}var D=/&/g,M=/</g,I=/>/g,q=/"/g,K=/'/g,F=/\x00/g,Y=/[\x00&<>"']/;function X(t,e){return t<e?-1:t>e?1:0}function H(){this.a="",this.v=z}H.prototype.i=!0,H.prototype.c=function(){return this.a},H.prototype.b=function(){return 1};var N,U=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,z={};function V(t){var e=new H;return e.a=t,e}V("about:blank");t:{var J=h.navigator;if(J){var R=J.userAgent;if(R){N=R;break t}}N=""}function B(){this.a=G}B.prototype.b=function(){return null},B.prototype.i=!0,B.prototype.c=function(){return""};var G={},Z={},W={};function $(){throw Error("Do not instantiate directly")}function Q(){$.call(this)}function tt(t){return tt[" "](t),t}$.prototype.B=null,$.prototype.toString=function(){return this.u},O(Q,$),Q.prototype.s=Z,tt[" "]=y;var et,rt=-1!=N.indexOf("Opera"),nt=-1!=N.indexOf("Trident")||-1!=N.indexOf("MSIE"),it=-1!=N.indexOf("Edge"),ot=!(-1==N.indexOf("Gecko")||-1!=N.toLowerCase().indexOf("webkit")&&-1==N.indexOf("Edge")||-1!=N.indexOf("Trident")||-1!=N.indexOf("MSIE")||-1!=N.indexOf("Edge")),at=-1!=N.toLowerCase().indexOf("webkit")&&-1==N.indexOf("Edge");function ct(){var t=h.document;return t?t.documentMode:void 0}t:{var st="",ut=function(){var t=N;return ot?/rv:([^\);]+)(\)|;)/.exec(t):it?/Edge\/([\d\.]+)/.exec(t):nt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):at?/WebKit\/(\S+)/.exec(t):rt?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(ut&&(st=ut?ut[1]:""),nt){var lt=ct();if(null!=lt&&lt>parseFloat(st)){et=String(lt);break t}}et=st}var ft,pt={},dt=h.document;function ht(t){return null!=t&&t.s===Z?t:t instanceof B?vt(t instanceof B&&t.constructor===B&&t.a===G?"":"type_error:SafeHtml",t.b()):vt(T(String(String(t))),function(t){if(null!=t)switch(t.B){case 1:return 1;case-1:return-1;case 0:return 0}return null}(t))}ft=dt&&nt?ct()||("CSS1Compat"==dt.compatMode?parseInt(et,10):5):void 0;var vt=function(t){function e(t){this.u=t}return e.prototype=t.prototype,function(t,r){return t=new e(String(t)),void 0!==r&&(t.B=r),t}}(Q);function yt(t){return null!=t&&t.s===Z?String(String(t.u).replace(At,"").replace(wt,"&lt;")).replace(mt,bt):T(String(t))}var gt={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function bt(t){return gt[t]}var mt=/[\x00\x22\x27\x3c\x3e]/g,At=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,wt=/</g;function St(t){var e=t.sort;t=t.H,e='<div id="sort-by-tabs" class="sort-by-inner"><a href="#" sort="alpha"'+("alpha"==e?" selected":"")+'>A-Z</a><a href="#" sort="recent"'+("recent"==e?" selected":"")+'>Recent</a><a href="#" sort="duration"'+("duration"==e?" selected":"")+'>Duration</a></div><div class="sort-by-inner"><select id="codelab-categories"><option value="">Category</option>';for(var r=Math.max(0,Math.ceil(t.length)),n=0;n<r;n++){var i=n;e+='<option value="'+yt(t[i])+'">'+ht(t[i])+"</option>"}return vt(e+"</select></div>")}var Et,xt,Ct=(xt=!1,function(){return xt||(Et=function(){var t=document.createElement("div");t.innerHTML="<div><div></div></div>";var e=t.firstChild.firstChild;return t.innerHTML="",!e.parentElement}(),xt=!0),Et});function Ot(t,e){if(Ct())for(;t.lastChild;)t.removeChild(t.lastChild);t.innerHTML=e}function kt(t){if(t instanceof $){if(t.s===Z)return t.u;if(t.s===W)return T(t.u)}return"zSoyz"}var jt={};function Lt(){var t=HTMLElement.call(this)||this;return t.j=new P,t}function Pt(t){var e=t.getAttribute("sort")||"alpha",r=[].concat(d(t.querySelectorAll(".card")));if(!(2>r.length)){switch(e){case"duration":r.sort(t.i.bind(t));break;case"recent":r.sort(t.c.bind(t));break;default:e="alpha",r.sort(t.b.bind(t))}r.forEach(function(e){return t.appendChild(e)}),r=new URL(document.location.toString()),e&&"alpha"!==e?r.searchParams.set("sort",e):r.searchParams.delete("sort"),_t(t),e=r.pathname+r.search,window.history.replaceState({path:e},document.title,e)}}function _t(t){t.setAttribute("num",t.querySelectorAll(".card:not([hidden])").length)}function Tt(t){var e=Mt(t.getAttribute("filter")),r=It((t.getAttribute("tags")||"").split(",")),n=It((t.getAttribute("category")||"").split(","));[].concat(d(t.querySelectorAll(".card"))).forEach(function(t){var i=Mt(t.getAttribute("title")),o=It((t.getAttribute("category")||"").split(",")),a=It((t.getAttribute("tags")||"").split(",")),c=!0,s=!0,u=!0;e&&(c=-1!==i.indexOf(e)),r.length&&(s=Dt(a,r)),n.length&&(u=Dt(o,n)),c&&s&&u?t.removeAttribute("hidden"):t.setAttribute("hidden","")});var i=new URL(document.location.toString());r.length?i.searchParams.set("tags",r.join(",")):i.searchParams.delete("tags"),n.length?i.searchParams.set("cat",n.join(",")):i.searchParams.delete("cat"),e?i.searchParams.set("filter",e):i.searchParams.delete("filter"),_t(t),t=i.pathname+i.search,window.history.replaceState({path:t},document.title,t)}function Dt(t,e){for(var r=0;r<t.length;r++)if(e.includes(t[r]))return!0;return!1}function Mt(t){return(t||"").trim().toLowerCase().replace("\n","").replace(/\s+/g," ")}function It(t){var e=[];return(t=t||[]).forEach(function(t){(t=Mt(t))&&e.push(t)}),e.sort()}a(Lt,HTMLElement),Lt.prototype.connectedCallback=function(){this.hasAttribute("sort")?Pt(this):this.setAttribute("sort","alpha"),(this.hasAttribute("filter")||this.hasAttribute("category")||this.hasAttribute("tags"))&&Tt(this)},Lt.prototype.connectedCallback=Lt.prototype.connectedCallback,Lt.prototype.attributeChangedCallback=function(t){switch(t){case"sort":Pt(this);break;case"filter":case"category":case"tags":Tt(this)}},Lt.prototype.attributeChangedCallback=Lt.prototype.attributeChangedCallback,Lt.prototype.i=function(t,e){if(!t||!e)return 0;var r=parseFloat(t.getAttribute("duration"))||0;return 0==(r-=parseFloat(e.getAttribute("duration"))||0)?this.c(t,e):r},Lt.prototype.c=function(t,e){if(!t||!e)return 0;var r=new Date(t.getAttribute("updated")||0);return 0==(r=new Date(e.getAttribute("updated")||0).getTime()-r.getTime())?this.b(t,e):r},Lt.prototype.b=function(t,e){return t&&e?(t=t.getAttribute("title"))<(e=e.getAttribute("title"))?-1:t>e?1:0:0},Lt.prototype.G=function(t){var e,r=(t.getAttribute("category")||"").toLowerCase().replace(/\s+/g,"-").replace(/--+/g,"-").trim().split(",").shift(),n=t.getAttribute("title")||"",i=parseInt(t.getAttribute("duration"),10)||0;(e=t.getAttribute("updated"))?(e=new Date(e),e="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[e.getMonth()]+" "+e.getUTCDate()+", "+e.getFullYear()):e="",e=e||"",t.getAttribute("tags");var o=t.getAttribute("authors")||"";Ot(t,kt(r=vt('<div class="card-header '+yt(r)+'-bg"><span class="category-icon '+yt(r)+'-icon"></span><span class="card-duration">'+(i?'<img src="//codelabs.developers.google.com/images/schedule.svg">'+(1==i?ht(i)+" min remaining":ht(i)+" mins remaining"):"")+'</span></div><div class="card-description">'+ht(n)+'</div><div class="card-footer '+yt(r)+'-footer"><span class="card-start '+yt(r)+'-start">Start</span><span class="card-updated">'+(o?"<div>"+ht(o)+"</div>":"")+(e?"<div>Updated "+ht(e)+"</div>":"")+"</span></div>"))),t.classList.add("card"),(r=new URL(t.href,document.location.origin)).searchParams.has("index")||r.searchParams.set("index",document.location.pathname),(r=r.href)instanceof H||r instanceof H||(r="object"==typeof r&&r.i?r.c():String(r),U.test(r)||(r="about:invalid#zClosurez"),r=V(r)),t.href=r instanceof H&&r.constructor===H&&r.v===z?r.a:"type_error:SafeUrl",(r=t.getAttribute("id"))&&(r=this.j.get("progress_"+r),n=t.getAttribute("steps"),r&&n&&t.setAttribute("progress",(parseFloat(r)/parseFloat(n)-1).toFixed(2))),this.appendChild(t)},Lt.prototype.addCard=Lt.prototype.G,e.Object.defineProperties(Lt,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return["sort","filter","category","tags"]}}});try{window.customElements.define("google-codelab-index-cards",Lt)}catch(u){}function qt(){0!=Ft&&(this[m]||(this[m]=++A))}var Kt,Ft=0;(Kt=!nt)||(Kt=9<=Number(ft));var Yt,Xt=Kt;if(Yt=nt){var Ht;if(Object.prototype.hasOwnProperty.call(pt,"9"))Ht=pt[9];else{for(var Nt=0,Ut=_(String(et)).split("."),zt=_("9").split("."),Vt=Math.max(Ut.length,zt.length),Jt=0;0==Nt&&Jt<Vt;Jt++){var Rt=Ut[Jt]||"",Bt=zt[Jt]||"";do{var Gt=/(\d*)(\D*)(.*)/.exec(Rt)||["","","",""],Zt=/(\d*)(\D*)(.*)/.exec(Bt)||["","","",""];if(0==Gt[0].length&&0==Zt[0].length)break;Nt=X(0==Gt[1].length?0:parseInt(Gt[1],10),0==Zt[1].length?0:parseInt(Zt[1],10))||X(0==Gt[2].length,0==Zt[2].length)||X(Gt[2],Zt[2]),Rt=Gt[3],Bt=Zt[3]}while(0==Nt)}Ht=pt[9]=0<=Nt}Yt=!Ht}var Wt=Yt,$t=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});return h.addEventListener("test",y,e),h.removeEventListener("test",y,e),t}();function Qt(t,e){this.type=t,this.a=this.target=e}function te(t,e){if(Qt.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.b=null,t){var r=this.type=t.type,n=t.changedTouches?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(ot){t:{try{tt(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==r?e=t.fromElement:"mouseout"==r&&(e=t.toElement);this.relatedTarget=e,null===n?(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0):(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=v(t.pointerType)?t.pointerType:ee[t.pointerType]||"",this.b=t,t.defaultPrevented&&this.preventDefault()}}Qt.prototype.preventDefault=function(){},O(te,Qt);var ee={2:"touch",3:"pen",4:"mouse"};te.prototype.preventDefault=function(){te.D.preventDefault.call(this);var t=this.b;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Wt)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}};var re="closure_listenable_"+(1e6*Math.random()|0),ne=0;function ie(t){t.o=!0,t.listener=null,t.proxy=null,t.src=null,t.a=null}function oe(t){this.src=t,this.a={},this.b=0}function ae(t,e){var r=e.type;if(r in t.a){var n,i=t.a[r],o=k(i,e);(n=0<=o)&&Array.prototype.splice.call(i,o,1),n&&(ie(e),0==t.a[r].length&&(delete t.a[r],t.b--))}}oe.prototype.add=function(t,e,r,n,i){var o,a=t.toString();(t=this.a[a])||(t=this.a[a]=[],this.b++);t:{for(o=0;o<t.length;++o){var c=t[o];if(!c.o&&c.listener==e&&c.capture==!!n&&c.a==i)break t}o=-1}return-1<o?(e=t[o],r||(e.A=!1)):((e=new function(t,e,r,n,i){this.listener=t,this.proxy=null,this.src=e,this.type=r,this.capture=!!n,this.a=i,this.key=++ne,this.o=this.A=!1}(e,this.src,a,!!n,i)).A=r,t.push(e)),e};var ce="closure_lm_"+(1e6*Math.random()|0),se={};function ue(t,e,r,n,i){if(n&&n.once)return function t(e,r,n,i,o){if("array"==g(r)){for(var a=0;a<r.length;a++)t(e,r[a],n,i,o);return null}return n=be(n),e&&e[re]?e.a.add(String(r),n,!0,b(i)?!!i.capture:!!i,o):le(e,r,n,!0,i,o)}(t,e,r,n,i);if("array"==g(e)){for(var o=0;o<e.length;o++)ue(t,e[o],r,n,i);return null}return r=be(r),t&&t[re]?t.a.add(String(e),r,!1,b(n)?!!n.capture:!!n,i):le(t,e,r,!1,n,i)}function le(t,e,r,n,i,o){if(!e)throw Error("Invalid event type");var a=b(i)?!!i.capture:!!i,c=ye(t);if(c||(t[ce]=c=new oe(t)),(r=c.add(e,r,n,a,o)).proxy)return r;if(n=function(){var t=ve,e=Xt?function(r){return t.call(e.src,e.listener,r)}:function(r){if(!(r=t.call(e.src,e.listener,r)))return r};return e}(),r.proxy=n,n.src=t,n.listener=r,t.addEventListener)$t||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),n,i);else if(t.attachEvent)t.attachEvent(pe(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return r}function fe(t){if("number"!=typeof t&&t&&!t.o){var e=t.src;if(e&&e[re])ae(e.a,t);else{var r=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(r,n,t.capture):e.detachEvent?e.detachEvent(pe(r),n):e.addListener&&e.removeListener&&e.removeListener(n),(r=ye(e))?(ae(r,t),0==r.b&&(r.src=null,e[ce]=null)):ie(t)}}}function pe(t){return t in se?se[t]:se[t]="on"+t}function de(t,e,r,n){var i=!0;if((t=ye(t))&&(e=t.a[e.toString()]))for(e=e.concat(),t=0;t<e.length;t++){var o=e[t];o&&o.capture==r&&!o.o&&(o=he(o,n),i=i&&!1!==o)}return i}function he(t,e){var r=t.listener,n=t.a||t.src;return t.A&&fe(t),r.call(n,e)}function ve(t,e){if(t.o)return!0;if(!Xt){if(!e)t:{e=["window","event"];for(var r=h,n=0;n<e.length;n++)if(null==(r=r[e[n]])){e=null;break t}e=r}if(e=new te(n=e,this),r=!0,!(0>n.keyCode||void 0!=n.returnValue)){t:{var i=!1;if(0==n.keyCode)try{n.keyCode=-1;break t}catch(t){i=!0}(i||void 0==n.returnValue)&&(n.returnValue=!0)}for(n=[],i=e.a;i;i=i.parentNode)n.push(i);for(t=t.type,i=n.length-1;0<=i;i--){e.a=n[i];var o=de(n[i],t,!0,e);r=r&&o}for(i=0;i<n.length;i++)e.a=n[i],o=de(n[i],t,!1,e),r=r&&o}return r}return he(t,new te(e,this))}function ye(t){return(t=t[ce])instanceof oe?t:null}var ge="__closure_events_fn_"+(1e9*Math.random()>>>0);function be(t){return"function"==g(t)?t:(t[ge]||(t[ge]=function(e){return t.handleEvent(e)}),t[ge])}function me(t,e){if("function"!=g(t)){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Ae(t,e,r){qt.call(this),this.J=null!=r?E(t,r):t,this.v=e,this.i=E(this.K,this),this.a=this.b=null,this.c=[]}function we(t){qt.call(this),this.b=t,this.a={}}O(Ae,qt),Ae.prototype.I=function(t){this.c=arguments,this.b?this.a=C()+this.v:this.b=me(this.i,this.v)},Ae.prototype.K=function(){this.a?(this.b=me(this.i,this.a-C()),this.a=null):(this.b=null,this.J.apply(null,this.c))},O(we,qt);var Se=[];function Ee(t,e,r,n){"array"!=g(r)&&(r&&(Se[0]=r.toString()),r=Se);for(var i=0;i<r.length;i++){var o=ue(e,r[i],n||t.handleEvent,!1,t.b||t);if(!o)break;t.a[o.key]=o}}function xe(){var t=HTMLElement.call(this)||this;return t.m=new we,t.C=!1,t.g=null,t.w=null,t.f=null,t.l=null,t.h=null,t.L=new Ae(function(){var e=t.f.value.trim();t.l&&(""===e?t.l.setAttribute("hide",""):t.l.removeAttribute("hide")),t.g&&t.g.setAttribute("filter",e)},20),t}function Ce(t){window.requestAnimationFrame(function(){return t.L.I()})}we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},a(xe,HTMLElement),xe.prototype.connectedCallback=function(){this.C||function(t){var e=t.querySelector("main .main-inner");if(e){t.f=document.querySelector("#search-field"),t.l=document.querySelector("#clear-icon");var r=t.querySelector("main ul"),n=document.createElement("google-codelab-index-cards"),i=new URL(document.location.toString());i.searchParams.has("tags")&&n.setAttribute("tags",i.searchParams.getAll("tags").join(","));var o="";if(i.searchParams.has("cat")){var a=i.searchParams.getAll("cat");o=a[0].trim().toLowerCase(),n.setAttribute("category",a.join(","))}if(a="alpha",i.searchParams.has("sort")&&(a=i.searchParams.get("sort"),n.setAttribute("sort",a)),r?([].concat(d(r.querySelectorAll("a"))).forEach(function(t){n.addCard(t)}),r&&r.parentNode&&r.parentNode.removeChild(r),e.appendChild(n)):n=e.querySelector("google-codelab-index-cards"),n){var c=new Set;[].concat(d(n.querySelectorAll(".card"))).forEach(function(t){(t=t.getAttribute("category"))&&t.split(",").forEach(function(t){c.add(t.trim())})}),(e=function(t,e){return e=t(e||jt,void 0,void 0),Ot(t=(x||(x=new function(){this.a=h.document||document})).a.createElement("DIV"),e=kt(e)),1==t.childNodes.length&&1==(e=t.firstChild).nodeType&&(t=e),t}(St,{H:Array.from(c).sort(),N:o,sort:a})).setAttribute("id","sort-by"),n.parentNode&&n.parentNode.insertBefore(e,n),t.w=e,t.g=n,t.h=t.w.querySelector("#codelab-categories"),o&&t.h&&[].concat(d(t.h.options)).forEach(function(t){t.value.toLowerCase()===o&&(t.selected=!0)})}i.searchParams.has("filter")&&(i=i.searchParams.get("filter"),t.f&&(t.f.value=i,Ce(t))),t.C=!0}}(this),function(t){if(t.w){var e=t.w.querySelector("#sort-by-tabs");e&&Ee(t.m,e,"click",function(e){e.preventDefault();var r=(e=e.target).getAttribute("sort");t.g&&t.g.setAttribute("sort",r),(r=t.querySelector("[selected]"))&&r.removeAttribute("selected"),e.setAttribute("selected","")})}t.f&&Ee(t.m,t.f,"keyup",function(){return Ce(t)}),t.l&&Ee(t.m,t.l,"click",function(){t.f&&(t.f.value=""),Ce(t)}),t.h&&Ee(t.m,t.h,"change",function(){t.g&&t.h&&t.g.setAttribute("category",t.h.value)})}(this),window.requestAnimationFrame(function(){document.body.removeAttribute("unresolved")})},xe.prototype.connectedCallback=xe.prototype.connectedCallback,xe.prototype.disconnectedCallback=function(){var t;(function(t,e,r){for(var n in t)e.call(r,t[n],n,t)})((t=this.m).a,function(t,e){this.a.hasOwnProperty(e)&&fe(t)},t),t.a={}},xe.prototype.disconnectedCallback=xe.prototype.disconnectedCallback;try{window.customElements.define("google-codelab-index",xe)}catch(u){}}).call(this);