(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),s=n(10),i=n(7),l=(n(29),n(2)),u=n(3),h=n(5),d=n(4),p=n(6),b=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"placeholder",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(b,{key:t[n].id,id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email})}))},E=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},g=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"100vh"}},e.children)},f=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"yellow"},"Robo Friends"))}}]),t}(a.PureComponent),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),t}(a.Component),O=(n(30),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.OnRequestRobots()}},{key:"render",value:function(){var e=this,t=this.props.robots.filter(function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement(f,null),r.a.createElement(E,{searchChange:this.props.OnSearchChange}),this.props.isPending?r.a.createElement("p",null,"loading"):r.a.createElement(g,null,r.a.createElement(v,null,r.a.createElement(m,{robots:t}))))}}]),t}(a.Component)),j=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,err:e.requestRobots.err}},function(e){return{OnSearchChange:function(t){e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},OnRequestRobots:function(){return e(function(e){e({type:"REQUEST_PENDING"}),fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e({type:"REQUEST_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_FAILED",payload:t})})})}}})(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:""},w={isPending:!1,robots:[],err:""},C=n(18),R=n(19),S=(Object(C.createLogger)(),Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"REQUEST_FAILED":return Object.assign({},e,{isPending:!1,err:t.payload});default:return e}}})),N=Object(i.d)(S,Object(i.a)(R.a));c.a.render(r.a.createElement(s.a,{store:N},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.d40394f2.chunk.js.map