(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/stupid-cupid.9d8ce53a.gif"},function(e,t,n){e.exports=n.p+"static/media/chocolate.2b8162de.gif"},,,function(e,t,n){e.exports=n.p+"static/media/flowers2.c489f23a.gif"},,,,,function(e,t,n){e.exports=n.p+"static/media/front.db2251ae.png"},function(e,t,n){e.exports=n.p+"static/media/flowers.78eba2c7.gif"},function(e,t,n){e.exports=n(38)},,,,,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"register",function(){return B}),n.d(a,"unregister",function(){return D});var c=n(0),o=n.n(c),r=n(20),i=n.n(r),l=n(41),s=n(6),u=n(7),m=n(9),h=n(8),d=n(10),p=n(42),f=n(43),g=n(39),b=n(21),v=n.n(b),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={x:0,loaded:!1},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({loaded:!0})}},{key:"componentWillUnmount",value:function(){this.setState({loaded:!1}),window.clearTimeout()}},{key:"switching",value:function(){var e=this;setTimeout(function(){if(e.state.x>360)e.setState({x:0});else{var t=e.state.x+70;e.setState({x:t})}},888)}},{key:"render",value:function(){return this.state.loaded&&this.switching(),o.a.createElement("section",{className:"start"},o.a.createElement(g.a,{to:"/pick"},o.a.createElement("img",{src:v.a,alt:"I Love You, You Love Me",style:{filter:"hue-rotate(".concat(this.state.x,"deg)")}})))}}]),t}(c.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",{style:this.props.style},o.a.createElement("a",{href:"https://sunday-desert.github.io/ilyylm"},"ILYYL.M"))}}]),t}(c.Component),k=n(16),w=n.n(k),j=n(12),O=n.n(j),x=n(13),N=n.n(x),C=(n(31),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={filter:"hue-rotate(".concat(270*Math.random()+80,"deg)")};return o.a.createElement("section",{className:"pick"},o.a.createElement(y,null),o.a.createElement("h3",{style:e},"choose one to send to your boo"),o.a.createElement("article",{className:"pick"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(g.a,{to:"/c/check"},o.a.createElement("img",{src:O.a,alt:"stupid cupid!"}))),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/f/check"},o.a.createElement("img",{src:w.a,alt:"flowers!"}))),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/h/check"},o.a.createElement("img",{src:N.a,alt:"no calorie chocolates!"}))))))}}]),t}(c.Component)),L=n(15),W=n(40),M=(n(32),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={sel:e.match.params.sel},n.copyLink=n.copyLink.bind(Object(L.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"copyLink",value:function(e){e.preventDefault(),e.target.select(),document.execCommand("copy"),document.getElementById("prompt").innerHTML="copied!"}},{key:"render",value:function(){var e=new Map([["c",[O.a,"stupidcupid"]],["f",[w.a,"flowers4u"]],["h",[N.a,"chocolates4u"]]]);return e.has(this.state.sel)?o.a.createElement("section",{className:"check"},o.a.createElement(y,null),o.a.createElement("article",{className:"left"},o.a.createElement("img",{src:e.get(this.state.sel)[0],alt:"confirm your selection"})),o.a.createElement("article",{className:"right"},o.a.createElement("p",{id:"prompt"},"click to copy link & send to your friends"),o.a.createElement("p",null,o.a.createElement("input",{className:"msg",onClick:this.copyLink,readOnly:!0,value:"sunday-desert.github.io/ilyylm/#/luv/".concat(e.get(this.state.sel)[1])})),o.a.createElement("p",null,o.a.createElement(g.a,{to:"/pick"},"-- now send one to your other boo")))):o.a.createElement(W.a,{to:"/nah"})}}]),t}(c.Component)),S=n(22),A=n.n(S),T=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={note:e.match.params.note},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=new Map([["stupidcupid",[O.a,"don't aim at me, i don't like you"]],["flowers4u",[A.a,"love you as a friend"]],["chocolates4u",[N.a,"bite me instead"]]]);return e.has(this.state.note)?o.a.createElement("section",{className:"check"},o.a.createElement(y,null),o.a.createElement("article",{className:"left"},o.a.createElement("img",{src:e.get(this.state.note)[0],alt:"confirm your selection"})),o.a.createElement("article",{className:"right"},o.a.createElement("p",{id:"punchline"},e.get(this.state.note)[1]),o.a.createElement("p",null,"figure out how to get back to main page and send one back to me"))):o.a.createElement(W.a,{to:"/nah"})}}]),t}(c.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={filter:"hue-rotate(".concat(270*Math.random()+100+130,"deg)")};return o.a.createElement("section",null,o.a.createElement(y,{style:e}),o.a.createElement("p",null,"come on, lets get back to the main page"),o.a.createElement("p",null,"figure it out yourself"))}}]),t}(c.Component),U=(n(36),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={filter:"hue-rotate(".concat(400*Math.random()+120,"deg)")};return o.a.createElement("div",{style:e,className:"App"},o.a.createElement(p.a,null,o.a.createElement(f.a,{exact:!0,path:"/",component:E}),o.a.createElement(f.a,{exact:!0,path:"/pick",component:C}),o.a.createElement(f.a,{exact:!0,path:"/:sel/check",component:M}),o.a.createElement(f.a,{exact:!0,path:"/luv/:note",component:T}),o.a.createElement(f.a,{component:I})),o.a.createElement("div",{id:"sundes"},o.a.createElement("a",{href:"https://sunday-desert.github.io/",target:"_blank",rel:"noopener noreferrer"},"\u2661")))}}]),t}(c.Component)),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){if("serviceWorker"in navigator){if(new URL("/ilyylm",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ilyylm","/service-worker.js");Y?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):R(t,e)})}}function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function D(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}n(37);i.a.render(o.a.createElement(l.a,null,o.a.createElement(U,null)),document.getElementById("root")),a(),D()}],[[23,1,2]]]);
//# sourceMappingURL=main.cb4fae46.chunk.js.map