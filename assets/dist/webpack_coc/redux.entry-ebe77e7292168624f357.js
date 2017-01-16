!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(this,function(){return webpackJsonp([7],{0:function(e,exports,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=t(472),n=r(i),o=t(346),u=r(o),l=createStore(u.default),s=document.getElementById("root");ReactDOM.render(React.createElement(Provider,{store:l},React.createElement(n.default,null)),s)},138:function(e,exports){"use strict";function t(e){return{type:n,text:e}}function r(e){return{type:o,index:e}}function i(e){return{type:u,filter:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addTodo=t,exports.toggleTodo=r,exports.setVisibilityFilter=i;var n=exports.ADD_TODO="ADD_TODO",o=exports.COMPLETE_TODO="COMPLETE_TODO",u=exports.SET_VISIBILITY_FILTER="SET_VISIBILITY_FILTER";exports.VisibilityFilters={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"}},346:function(e,exports,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case d.SET_VISIBILITY_FILTER:return t.filter;default:return e}}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case d.ADD_TODO:return[].concat((0,s.default)(e),[{text:t.text,completed:!1}]);case d.COMPLETE_TODO:return e.map(function(e,r){return r===t.index?(0,u.default)({},e,{completed:!e.completed}):e});default:return e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(99),u=r(o),l=t(146),s=r(l),d=t(138),c=d.VisibilityFilters.SHOW_ALL,a=combineReducers({visibilityFilter:i,todos:n});exports.default=a},468:function(e,exports,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(9),n=r(i),o=t(10),u=r(o),l=t(11),s=r(l),d=t(13),c=r(d),a=t(12),f=r(a),p=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement("input",{type:"text",ref:"input"}),React.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Add"))}},{key:"handleClick",value:function(e){var t=this.refs.input,r=t.value.trim();""!==r&&(this.props.onAddClick(r),t.value="")}}]),t}(Component);exports.default=p,p.propTypes={onAddClick:PropTypes.func.isRequired}},469:function(e,exports,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(9),n=r(i),o=t(10),u=r(o),l=t(11),s=r(l),d=t(13),c=r(d),a=t(12),f=r(a),p=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,s.default)(t,[{key:"renderFilter",value:function(e,t){var r=this;return e===this.props.filter?t:React.createElement("a",{href:"#",onClick:function(t){t.preventDefault(),r.props.onFilterChange(e)}},t)}},{key:"render",value:function(){return React.createElement("p",null,"Show:"," ",this.renderFilter("SHOW_ALL","All"),", ",this.renderFilter("SHOW_COMPLETED","Completed"),", ",this.renderFilter("SHOW_ACTIVE","Active"),".")}}]),t}(Component);exports.default=p,p.propTypes={onFilterChange:PropTypes.func.isRequired,filter:PropTypes.oneOf(["SHOW_ALL","SHOW_COMPLETED","SHOW_ACTIVE"]).isRequired}},470:function(e,exports,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(9),n=r(i),o=t(10),u=r(o),l=t(11),s=r(l),d=t(13),c=r(d),a=t(12),f=r(a),p=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return React.createElement("li",{onClick:this.props.onClick,style:{textDecoration:this.props.completed?"line-through":"none",cursor:this.props.completed?"default":"pointer"}},this.props.text)}}]),t}(Component);exports.default=p,p.propTypes={onClick:PropTypes.func.isRequired,text:PropTypes.string.isRequired,completed:PropTypes.bool.isRequired}},471:function(e,exports,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(104),n=r(i),o=t(9),u=r(o),l=t(10),s=r(l),d=t(11),c=r(d),a=t(13),f=r(a),p=t(12),_=r(p),y=t(470),T=r(y),O=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this;return React.createElement("ul",null,this.props.todos.map(function(t,r){return React.createElement(T.default,(0,n.default)({},t,{key:r,onClick:function(){return e.props.onTodoClick(r)}}))}))}}]),t}(Component);exports.default=O,O.propTypes={onTodoClick:PropTypes.func.isRequired,todos:PropTypes.arrayOf(PropTypes.shape({text:PropTypes.string.isRequired,completed:PropTypes.bool.isRequired}).isRequired).isRequired}},472:function(e,exports,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){switch(t){case y.VisibilityFilters.SHOW_ALL:return e;case y.VisibilityFilters.SHOW_COMPLETED:return e.filter(function(e){return e.completed});case y.VisibilityFilters.SHOW_ACTIVE:return e.filter(function(e){return!e.completed})}}function n(e){return{visibleTodos:i(e.todos,e.visibilityFilter),visibilityFilter:e.visibilityFilter}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(9),u=r(o),l=t(10),s=r(l),d=t(11),c=r(d),a=t(13),f=r(a),p=t(12),_=r(p),y=t(138),T=t(468),O=r(T),v=t(471),h=r(v),E=t(469),m=r(E),C=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,r=e.visibleTodos,i=e.visibilityFilter;return console.log(r),console.log(i),React.createElement("div",null,React.createElement(O.default,{onAddClick:function(e){return t((0,y.addTodo)(e))}}),React.createElement(h.default,{todos:r,onTodoClick:function(e){return t((0,y.toggleTodo)(e))}}),React.createElement(m.default,{filter:i,onFilterChange:function(e){return t((0,y.setVisibilityFilter)(e))}}))}}]),t}(Component);C.propTypes={visibleTodos:PropTypes.arrayOf(PropTypes.shape({text:PropTypes.string.isRequired,completed:PropTypes.bool.isRequired}).isRequired).isRequired,visibilityFilter:PropTypes.oneOf(["SHOW_ALL","SHOW_COMPLETED","SHOW_ACTIVE"]).isRequired},exports.default=connect(n)(C)}})});
//# sourceMappingURL=redux.entry-ebe77e7292168624f357.js.map