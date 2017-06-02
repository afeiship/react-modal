!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("object-assign"),require("prop-types"),require("react"),require("measure-it"),require("react-append-to-document"),require("react-backdrop"),require("react-dom"),require("react-visible")):"function"==typeof define&&define.amd?define(["classnames","object-assign","prop-types","react","measure-it","react-append-to-document","react-backdrop","react-dom","react-visible"],t):"object"==typeof exports?exports.ReactModal=t(require("classnames"),require("object-assign"),require("prop-types"),require("react"),require("measure-it"),require("react-append-to-document"),require("react-backdrop"),require("react-dom"),require("react-visible")):e.ReactModal=t(e.classnames,e["object-assign"],e["prop-types"],e.react,e["measure-it"],e["react-append-to-document"],e["react-backdrop"],e["react-dom"],e["react-visible"])}(this,function(e,t,r,n,o,a,i,s,c){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(1),a=n(o),i=r(7),s=n(i);e.exports={ReactModal:a.default,ReactModalCtrl:s.default}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(n)},d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(12);var p=r(6),m=n(p),b=r(5),h=n(b),y=r(15),v=r(10),x=n(v),g=r(16),w=n(g),k=r(17),O=n(k),j=r(14),_=n(j),S=r(3),E=n(S),N=r(13),M=n(N),L=r(4),P=n(L),T=(c=s=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onTransitionEnd=function(e){var t=r.state.visible,n=e.propertyName;r.setState({animating:!1},function(){!t&&r.setState({hidden:!0}),t&&"opacity"!==n||r.execCallback()})},r.state={header:e.header,body:e.body,theme:e.theme,buttons:e.buttons,dimensions:{},visible:!1,hidden:!0},r}return i(t,e),d(t,null,[{key:"newInstance",value:function(e){return(0,_.default)(t,e,{className:"react-modal-wrapper"})}}]),d(t,[{key:"show",value:function(e,r){var n=this,o=this.refs.root,a=w.default.findDOMNode(o),i=(0,P.default)(u({},this.props),{hidden:!1},e);this.setState(i,function(){(0,M.default)(a,function(e){n.setState({dimensions:e},function(){f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",n).call(n,r)})})})}},{key:"render",value:function(){var e=this,t=this.state,r=t.visible,n=t.hidden,o=t.theme,a=t.animating,i=t.header,s=t.body,c=t.dimensions,u=t.buttons,f=this.props,d=f.className,p=f.backdropStyle,b=f.children;return m.default.createElement("div",{className:"react-modal-container"},m.default.createElement(y.ReactBackdrop,{style:p,visible:r}),m.default.createElement(x.default,{ref:"root","data-visible":r,hidden:n,"data-theme":o,"data-animating":a,"data-header":i,onTransitionEnd:this._onTransitionEnd,style:{marginTop:"-"+c.height/2+"px",marginLeft:"-"+c.width/2+"px"},className:(0,E.default)("react-modal",d,{"no-header":!i},{"no-footer":0==u.length}),conditionList:[!b&&i&&"string"==typeof i,!b&&i&&"object"==("undefined"==typeof i?"undefined":l(i)),!b&&s&&"string"==typeof s,!b&&s&&"object"==("undefined"==typeof s?"undefined":l(s)),!b&&u.length>0,b]},m.default.createElement("header",{className:"react-modal-hd",dangerouslySetInnerHTML:{__html:i}}),m.default.createElement("header",{className:"react-modal-hd"},i),m.default.createElement("section",{className:"react-modal-bd",dangerouslySetInnerHTML:{__html:s}}),m.default.createElement("section",{className:"react-modal-bd"},s),m.default.createElement("menu",{className:"react-modal-ft"},u.map(function(t,r){return m.default.createElement("li",{key:r,className:"react-modal-button",onClick:t.onClick.bind(e)},t.text)})),b))}}]),t}(O.default),s.propTypes={className:h.default.string,header:h.default.oneOfType([h.default.string,h.default.element]),body:h.default.oneOfType([h.default.string,h.default.element]),theme:h.default.oneOf(["ios","tranparent"]),buttons:h.default.array,backdropStyle:h.default.object},s.defaultProps={header:null,body:null,theme:"ios",buttons:[],backdropStyle:{position:"fixed",opacity:.6,zIndex:99}},c);t.default=T},function(e,t){e.exports=function(){}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),s=n(i),c=r(2),l=n(c),u=void 0,f=function(){function e(){o(this,e)}return a(e,null,[{key:"createInstance",value:function(e){return u=u||s.default.newInstance(e)}},{key:"show",value:function(e,t){u.component.show(e,t||l.default)}},{key:"hide",value:function(e){u.component.hide(e||l.default)}},{key:"destory",value:function(){u.destory(),u=null}}]),e}();t.default=f},function(e,t,r){t=e.exports=r(9)(),t.push([e.id,'.hairline,.hairline-x,.hairline-y,.react-modal[data-theme=ios] .react-modal-button+.react-modal-button,.react-modal[data-theme=ios] .react-modal-ft{position:relative}.hairline-x:after,.hairline-y:after,.hairline:after,.react-modal[data-theme=ios] .react-modal-button+.react-modal-button:after,.react-modal[data-theme=ios] .react-modal-ft:after{content:"";position:absolute;left:0;top:0;bottom:auto;right:auto;background-color:#c8c7cc;display:block;z-index:15}.hairline-x:after,.react-modal[data-theme=ios] .react-modal-ft:after{height:1px;width:100%;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.hairline-y:after,.react-modal[data-theme=ios] .react-modal-button+.react-modal-button:after{width:1px;height:100%;-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.react-modal{font-family:-apple-system,SF UI Text,Helvetica Neue,Helvetica,Arial,sans-serif;width:80%;top:38.2%;left:50%;position:fixed;z-index:100;-webkit-transform:scale(1.185);transform:scale(1.185);-webkit-transition:opacity .22s linear,-webkit-transform .2s ease-in-out;transition:opacity .22s linear,-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out,opacity .22s linear;transition:transform .2s ease-in-out,opacity .22s linear,-webkit-transform .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-modal[hidden]{display:none}.react-modal[data-visible=false]{opacity:.01;-webkit-transform:scale(1.085);transform:scale(1.085)}.react-modal[data-visible=true][data-animating=true]{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.react-modal[data-visible=true][data-animating=false]{-webkit-transform:scale(1);transform:scale(1)}.react-modal[data-theme=ios]>*{background:hsla(0,0%,100%,.95)}.react-modal[data-theme=ios] .react-modal-ft{border-radius:0 0 13px 13px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-modal[data-theme=ios] .react-modal-ft:after{top:0}.react-modal[data-theme=ios] .react-modal-button:active{background:#dedede}.react-modal[data-theme=ios] .react-modal-button+.react-modal-button{position:relative}.react-modal[data-theme=ios] .react-modal-button+.react-modal-button:after{left:0}.react-modal.no-header .react-modal-bd{border-top-left-radius:13px;border-top-right-radius:13px}.react-modal.no-footer .react-modal-bd{border-bottom-left-radius:13px;border-bottom-right-radius:13px}.react-modal-hd{padding:15px 15px 0;font-size:18px;text-align:center;border-radius:13px 13px 0 0;font-weight:700}.react-modal-bd{text-align:center;padding:15px}.react-modal-ft{border-radius:0 0 13px 13px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-modal-button{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;width:100%;padding:0 5px;height:44px;font-size:17px;line-height:44px;text-align:center;color:#007aff;display:block;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1}.react-modal-button:first-child{border-bottom-left-radius:13px}.react-modal-button:last-child{border-bottom-right-radius:13px}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){!function(t,n){e.exports=n(r(3),r(2),r(4),r(5),r(6))}(this,function(e,t,r,n,o){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=r(6),p=n(d),m=r(5),b=n(m),h=r(2),y=n(h),v=r(3),x=(n(v),r(4)),g=(n(x),l=c=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=(e.conditionList,o(e,["className","conditionList"]));return p.default.createElement("section",u({},r,{className:(0,y.default)("react-condition-manager",t),children:this.children}))}},{key:"children",get:function(){var e=this.props,t=e.conditionList,r=e.children;return t.map(function(e,t){return e?r[t]:null})}}]),t}(d.PureComponent),c.propTypes={className:b.default.string,conditionList:b.default.array},c.defaultProps={conditionList:[]},l);t.default=g},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o}])})},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=p[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(l(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(l(n.parts[a],t));p[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],s=o[2],c=o[3],l={css:i,media:s,sourceMap:c};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function a(e,t){var r=h(),n=x[x.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function l(e,t){var r,n,o;if(t.singleton){var a=v++;r=y||(y=s(t)),n=u.bind(null,r,a,!1),o=u.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(t),n=d.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=f.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function u(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function d(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],c=p[s.id];c.refs--,a.push(c)}if(e){var l=o(e);n(l,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete p[c.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(8);"string"==typeof n&&(n=[[e.id,n,""]]);r(11)(n,{});n.locals&&(e.exports=n.locals)},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t){e.exports=c}])});
//# sourceMappingURL=react-modal.js.map