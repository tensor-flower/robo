(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(16),i=n.n(a),c=n(10),s=n(7),l=(n(29),n(2)),u=n(3),h=n(5),d=n(4),p=n(6),b=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"placeholder",src:"https://robohash.org/".concat(t,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))},f=function(e){var t=e.robots;return o.a.createElement("div",null,t.map(function(e,n){return o.a.createElement(b,{key:t[n].id,id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email})}))},g=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},m=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",height:"100vh"}},e.children)},E=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"yellow"},"Robo Friends"))}}]),t}(r.PureComponent),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),t}(r.Component),w=(n(30),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.OnRequestRobots()}},{key:"render",value:function(){var e=this,t=this.props.robots.filter(function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())});return o.a.createElement("div",{className:"tc"},o.a.createElement(E,null),o.a.createElement(g,{searchChange:this.props.OnSearchChange}),this.props.isPending?o.a.createElement("p",null,"loading"):o.a.createElement(m,null,o.a.createElement(v,null,o.a.createElement(f,{robots:t}))))}}]),t}(r.Component)),y=Object(c.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,err:e.requestRobots.err}},function(e){return{OnSearchChange:function(t){e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},OnRequestRobots:function(){return e(function(e){e({type:"REQUEST_PENDING"}),fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e({type:"REQUEST_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_FAILED",payload:t})})})}}})(w),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C={searchField:""},R={isPending:!1,robots:[],err:""},S=n(18),k=n(19),N=(Object(S.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"REQUEST_FAILED":return Object.assign({},e,{isPending:!1,err:t.payload});default:return e}}})),P=Object(s.d)(N,Object(s.a)(k.a));i.a.render(o.a.createElement(c.a,{store:P},o.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robo","/service-worker.js");O?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(t,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.8dc2c0de.chunk.js.map