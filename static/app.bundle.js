!function(e){function t(t){for(var r,u,i=t[0],l=t[1],c=t[2],f=0,p=[];f<i.length;f++)u=i[f],o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;a.push([8,1]),n()}({8:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),u=n.n(a);n(7);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}(this,c(t).call(this))).handleSubmit=e.handleSubmit.bind(f(f(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.issueAdd;this.props.createIssue({owner:t.owner.value,title:t.title.value,status:"New",created:new Date}),t.owner.value="",t.title.value=""}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{name:"issueAdd",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"owner",placeholder:"Owner"}),o.a.createElement("input",{type:"text",name:"title",placeholder:"Title"}),o.a.createElement("button",null,"Add")))}}]),t}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,d(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.Component),function(e,t,n){t&&m(e.prototype,t),n&&m(e,n)}(t,[{key:"render",value:function(){return o.a.createElement("div",null,"This is a placeholder for the Issue Filter.")}}]),t}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var j=function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.issue._id),o.a.createElement("td",null,e.issue.status),o.a.createElement("td",null,e.issue.owner),o.a.createElement("td",null,e.issue.created.toDateString()),o.a.createElement("td",null,e.issue.effort),o.a.createElement("td",null,e.issue.completionDate?e.issue.completionDate.toDateString():""),o.a.createElement("td",null,e.issue.title))};function _(e){var t=e.issues.map(function(e){return o.a.createElement(j,{key:e._id,issue:e})});return o.a.createElement("table",{className:"bordered-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Id"),o.a.createElement("th",null,"Status"),o.a.createElement("th",null,"Owner"),o.a.createElement("th",null,"Created"),o.a.createElement("th",null,"Effort"),o.a.createElement("th",null,"Completion Date"),o.a.createElement("th",null,"Title"))),o.a.createElement("tbody",null,t))}var P=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?S(e):t}(this,O(t).call(this))).state={issues:[]},e.createIssue=e.createIssue.bind(S(S(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.a.Component),function(e,t,n){t&&w(e.prototype,t),n&&w(e,n)}(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/issues").then(function(t){t.ok?t.json().then(function(t){console.log("Total count of records:",t._metadata.total_count),t.records.forEach(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate))}),e.setState({issues:t.records})}):t.json().then(function(e){alert("Failed to fetch issues:"+e.message)})}).catch(function(e){alert("Error in fetching data from server:",e)})}},{key:"createIssue",value:function(e){var t=this;fetch("/api/issues",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){e.ok?e.json().then(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate));var n=t.state.issues.concat(e);t.setState({issues:n})}):e.json().then(function(e){alert("Failed to add issue: "+e.message)})}).catch(function(e){alert("Error in sending data to server: "+e.message)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Issue Tracker"),o.a.createElement(v,null),o.a.createElement("hr",null),o.a.createElement(_,{issues:this.state.issues}),o.a.createElement("hr",null),o.a.createElement(p,{createIssue:this.createIssue}))}}]),t}(),D=document.getElementById("contents");u.a.render(o.a.createElement(P,null),D)}});