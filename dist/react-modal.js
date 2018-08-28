!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactModal=t(require("classnames"),require("prop-types"),require("react"),require("react-dom")):e.ReactModal=t(e.classnames,e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,r,n){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=r(1),a=n(i);e.exports=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,l,c,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(5);var p=r(8),b=n(p),v=r(9),m=(n(v),r(7)),h=n(m),k=r(6),y=n(k),w=(l=u=function(e){function t(e){a(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));c.call(r);var n=e.visible;return r.state={visible:n,hidden:!n},r}return o(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.visible;t!==this.state.visible&&(t&&this.setState({hidden:!1}),this.setState({visible:t}))}},{key:"present",value:function(){this.setState({hidden:!1,visible:!0})}},{key:"dismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){var e=this.props,t=(e.visible,e.className),r=e.backdrop,n=e.backdropProps,a=i(e,["visible","className","backdrop","backdropProps"]),s=this.state.hidden;return b.default.createElement(p.Fragment,null,b.default.createElement("div",d({hidden:s,"data-visible":this.state.visible,onAnimationEnd:this._onAnimationEnd,className:(0,y.default)("webkit-sassui-modal react-modal",t)},a)),r&&b.default.createElement("div",d({hidden:s,"data-visible":this.state.visible,onAnimationEnd:this._onAnimationEnd,className:"webkit-sassui-backdrop react-modal-backdrop"},n)))}}]),t}(b.default.Component),u.propTypes={className:h.default.string,visible:h.default.bool,backdrop:h.default.bool,backdropProps:h.default.object},u.defaultProps={className:"",visible:!1,backdrop:!0,backdropProps:{}},c=function(){var e=this;this._onAnimationEnd=function(){var t=e.state.visible;t||e.setState({hidden:!0})}},l);t.default=w},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,".webkit-sassui-backdrop{top:0;right:0;bottom:0;left:0}@keyframes webkit-sassui-backdrop-fade-in{to{background:rgba(0,0,0,.4)}}@keyframes webkit-sassui-backdrop-fade-out{0%{background:rgba(0,0,0,.4)}to{background:transparent}}.webkit-sassui-backdrop.visible-true,.webkit-sassui-backdrop[data-visible=true]{background:transparent;animation:webkit-sassui-backdrop-fade-in .3s ease-in forwards}.webkit-sassui-backdrop,.webkit-sassui-backdrop.visible-false,.webkit-sassui-backdrop[data-visible=false]{animation:webkit-sassui-backdrop-fade-out .3s ease-in forwards}.webkit-sassui-backdrop.position-fixed,.webkit-sassui-backdrop[data-position=fixed]{position:fixed}.webkit-sassui-backdrop.position-absolute,.webkit-sassui-backdrop[data-position=absolute]{position:absolute}.webkit-sassui-modal{width:80%;top:42.5%;left:50%;position:fixed;z-index:100;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:4px;transform-origin:0 0;overflow:hidden}@keyframes webkit-sassui-modal-in{0%{opacity:0;transform:scale(.815) translate3d(-50%,-50%,0)}90%{opacity:.815;transform:scale(1.0485) translate3d(-50%,-50%,0)}to{opacity:1;transform:scale(1) translate3d(-50%,-50%,0)}}@keyframes webkit-sassui-modal-out{0%{opacity:1;transform:scale(1) translate3d(-50%,-50%,0)}90%{opacity:.0485;transform:scale(1.0485) translate3d(-50%,-50%,0)}to{opacity:0;transform:scale(.815) translate3d(-50%,-50%,0)}}.webkit-sassui-modal.visible-true,.webkit-sassui-modal[data-visible=true]{animation:.3s webkit-sassui-modal-in ease-in-out forwards}.webkit-sassui-modal.visible-false,.webkit-sassui-modal[data-visible=false]{animation:.3s webkit-sassui-modal-out ease-in-out forwards}.react-modal{z-index:100}.react-modal,.react-modal-backdrop{position:fixed}.react-modal-bakcdrop{z-index:98}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(n[a]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=p[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(l(n.parts[a],t))}else{for(var s=[],a=0;a<n.parts.length;a++)s.push(l(n.parts[a],t));p[n.id]={id:n.id,refs:1,parts:s}}}}function i(e){for(var t=[],r={},n=0;n<e.length;n++){var i=e[n],a=i[0],s=i[1],o=i[2],u=i[3],l={css:s,media:o,sourceMap:u};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function a(e,t){var r=m(),n=y[y.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function l(e,t){var r,n,i;if(t.singleton){var a=k++;r=h||(h=o(t)),n=c.bind(null,r,a,!1),i=c.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=f.bind(null,r),i=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=o(t),n=d.bind(null,r),i=function(){s(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function c(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function d(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function f(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var p={},b=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=b(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=b(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,k=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=i(e);return n(r,t),function(e){for(var a=[],s=0;s<r.length;s++){var o=r[s],u=p[o.id];u.refs--,a.push(u)}if(e){var l=i(e);n(l,t)}for(var s=0;s<a.length;s++){var u=a[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete p[u.id]}}}};var w=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-modal.js.map