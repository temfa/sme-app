(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1140],{86917:function(t,e,n){"use strict";var o=n(67294),i=n(87623),r=n(36981),s=n.n(r),u=n(27640),a=n(11163),c=n(61120),l=n(9473),p=n(85893);e.Z=function(t){var e=t.children,n=t.page,r=t.text,h=t.action,d=t.preview,f=t.previewSingle,v=t.productAction,m=(0,o.useState)(!1),_=m[0],y=m[1],w=(0,o.useState)(""),E=(w[0],w[1],(0,a.useRouter)()),b=(0,l.I0)();return(0,p.jsxs)("div",{className:s().dash,children:[(0,p.jsx)("div",{className:_?s().sidebar:s().sidebarActive,children:(0,p.jsx)(i.YE,{showSubnav:function(){y(!1)}})}),(0,p.jsx)(u.Z,{timeout:3e5,onChange:function(t){t.idle&&(b((0,c.Cds)()),localStorage.getItem("user")||E.replace("../Auth/Login"))}}),_?null:(0,p.jsxs)("div",{className:s().dashCont,children:[(0,p.jsx)(i.wp,{page:n,text:r,action:h,preview:d,previewSingle:f,productAction:v,sideAction:function(){y(!0)}}),e]})]})}},30408:function(t,e,n){"use strict";n.r(e);n(67294);var o=n(86917),i=n(85893);e.default=function(){return(0,i.jsx)(o.Z,{children:(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Tools"})})})}},31815:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tools",function(){return n(30408)}])},36981:function(t){t.exports={dash:"styles_dash__ABdy6",main:"styles_main__lmXLq",dashCont:"styles_dashCont__9mu_R",sidebar:"styles_sidebar__CtkW_",sidebarActive:"styles_sidebarActive__KM5yi"}},27640:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var o,i,r=n(67294);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var a=(i=o=function(t){function e(){var n,o;s(this,e);for(var i=arguments.length,r=Array(i),a=0;a<i;a++)r[a]=arguments[a];return n=o=u(this,t.call.apply(t,[this].concat(r))),o.state={idle:o.props.defaultIdle},o.timeout=null,o.handleEvent=function(){o.state.idle&&o.handleChange(!1),clearTimeout(o.timeout),o.setTimeout()},u(o,n)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this.attachEvents(),this.setTimeout()},e.prototype.componentWillUnmount=function(){this.removeEvents()},e.prototype.componentDidUpdate=function(t){var e,n;e=t.events,n=this.props.events,e.sort().toString()!==n.sort().toString()&&(this.removeEvents(),this.attachEvents())},e.prototype.attachEvents=function(){var t=this;this.props.events.forEach((function(e){window.addEventListener(e,t.handleEvent,!0)}))},e.prototype.removeEvents=function(){var t=this;this.props.events.forEach((function(e){window.removeEventListener(e,t.handleEvent)}))},e.prototype.handleChange=function(t){this.props.onChange({idle:t}),this.setState({idle:t})},e.prototype.setTimeout=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;this.timeout=setTimeout((function(){t.handleChange(!0)}),this.props.timeout)})),e.prototype.render=function(){return this.props.render(this.state)},e}(r.Component),o.defaultProps={defaultIdle:!1,render:function(){return null},onChange:function(){},timeout:1e3,events:["mousemove","mousedown","keydown","touchstart","scroll"]},i)}},function(t){t.O(0,[9774,2888,179],(function(){return e=31815,t(t.s=e);var e}));var e=t.O();_N_E=e}]);