!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("measure-it"),require("object-assign"),require("react"),require("react-append-to-document"),require("react-backdrop"),require("react-visible")):"function"==typeof define&&define.amd?define(["classnames","measure-it","object-assign","react","react-append-to-document","react-backdrop","react-visible"],t):"object"==typeof exports?exports.ReactModal=t(require("classnames"),require("measure-it"),require("object-assign"),require("react"),require("react-append-to-document"),require("react-backdrop"),require("react-visible")):e.ReactModal=t(e.classnames,e["measure-it"],e["object-assign"],e.react,e["react-append-to-document"],e["react-backdrop"],e["react-visible"])}(this,function(e,t,r,o,n,a,i){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=r(1),a=o(n),i=r(2),s=o(i);e.exports={ReactModal:a.default,ReactModalCtrl:s.default}},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,l,c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},d=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,o)}if("value"in n)return n.value;var i=n.get;if(void 0!==i)return i.call(o)},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();r(7);var p=r(11),m=o(p),b=r(13),h=r(14),y=o(h),v=r(12),g=o(v),x=r(8),w=o(x),k=r(9),j=o(k),O=r(10),T=o(O),_=(l=s=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onTransitionEnd=function(e){var t=r.state.visible,o=e.propertyName;r.setState({animating:!1},function(){!t&&r.setState({hidden:!0}),t&&"opacity"!==o||(r.execCallback(),console.log("transition end",r))})},r.state={header:e.header,body:e.body,theme:e.theme,buttons:e.buttons,dimensions:{},visible:!1,hidden:!0},r}return i(t,e),f(t,null,[{key:"newInstance",value:function(e){return(0,g.default)(t,e,{className:"react-modal-wrapper"})}}]),f(t,[{key:"show",value:function(e,r){var o=this,n=this.refs.root,a=(0,T.default)(u({},this.props),{hidden:!1},e);this.setState(a,function(){(0,j.default)(n,function(e){o.setState({dimensions:e},function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",o).call(o,r)})})})}},{key:"render",value:function(){var e=this,t=this.state,r=t.visible,o=t.hidden,n=t.theme,a=t.animating,i=t.header,s=t.body,l=t.dimensions,u=t.buttons,d=this.props,f=d.className,p=d.backdropStyle;return m.default.createElement("div",{className:"react-modal-container"},m.default.createElement(b.ReactBackdrop,{style:p,visible:r}),m.default.createElement("div",{ref:"root","data-visible":r,hidden:o,"data-theme":n,"data-animating":a,"data-header":i,onTransitionEnd:this._onTransitionEnd,style:{marginTop:"-"+l.height/2+"px",marginLeft:"-"+l.width/2+"px"},className:(0,w.default)("react-modal",f,{"no-header":!i},{"no-footer":0==u.length})},i&&"string"==typeof i&&m.default.createElement("div",{className:"react-modal-hd",dangerouslySetInnerHTML:{__html:i}}),i&&"object"==("undefined"==typeof i?"undefined":c(i))&&m.default.createElement("div",{className:"react-modal-hd"},i),s&&"string"==typeof s&&m.default.createElement("div",{className:"react-modal-bd",dangerouslySetInnerHTML:{__html:s}}),s&&"object"==("undefined"==typeof s?"undefined":c(s))&&m.default.createElement("div",{className:"react-modal-bd"},s),u.length>0&&m.default.createElement("div",{className:"react-modal-ft"},u.map(function(t,r){return m.default.createElement("div",{key:r,className:"react-modal-button",onClick:t.onClick.bind(e)},t.text)}))))}}]),t}(y.default),s.propTypes={className:p.PropTypes.string,header:p.PropTypes.oneOfType([p.PropTypes.string,p.PropTypes.element]),body:p.PropTypes.oneOfType([p.PropTypes.string,p.PropTypes.element]),theme:p.PropTypes.oneOf(["ios","tranparent"]),buttons:p.PropTypes.array,backdropStyle:p.PropTypes.object},s.defaultProps={header:null,body:null,theme:"ios",buttons:[],backdropStyle:{position:"fixed",opacity:.6}},l);t.default=_},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=r(1),s=o(i),l=r(5),c=o(l),u=void 0,d=function(){function e(){n(this,e)}return a(e,null,[{key:"createInstance",value:function(e){return u=u||s.default.newInstance(e)}},{key:"show",value:function(e,t){u.component.show(e,t||c.default)}},{key:"hide",value:function(e){u.component.hide(e||c.default)}},{key:"destory",value:function(){u.destory(),u=null}}]),e}();t.default=d},function(e,t,r){t=e.exports=r(4)(),t.push([e.id,'.hairline,.hairline-x,.hairline-y,.react-modal[data-theme=ios] .react-modal-button+.react-modal-button,.react-modal[data-theme=ios] .react-modal-ft{position:relative}.hairline-x:after,.hairline-y:after,.hairline:after,.react-modal[data-theme=ios] .react-modal-button+.react-modal-button:after,.react-modal[data-theme=ios] .react-modal-ft:after{content:"";position:absolute;left:0;top:0;bottom:auto;right:auto;background-color:#c8c7cc;display:block;z-index:15}.hairline-x:after,.react-modal[data-theme=ios] .react-modal-ft:after{height:1px;width:100%;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.hairline-y:after,.react-modal[data-theme=ios] .react-modal-button+.react-modal-button:after{width:1px;height:100%;-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.react-modal{font-family:-apple-system,SF UI Text,Helvetica Neue,Helvetica,Arial,sans-serif;width:80%;top:38.2%;left:50%;position:absolute;z-index:2;-webkit-transform:scale(1.185);transform:scale(1.185);-webkit-transition:opacity .22s linear,-webkit-transform .2s ease-in-out;transition:opacity .22s linear,-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out,opacity .22s linear;transition:transform .2s ease-in-out,opacity .22s linear,-webkit-transform .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-modal[hidden]{display:none}.react-modal[data-visible=false]{opacity:.01;-webkit-transform:scale(1.085);transform:scale(1.085)}.react-modal[data-visible=true][data-animating=true]{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.react-modal[data-visible=true][data-animating=false]{-webkit-transform:scale(1);transform:scale(1)}.react-modal[data-theme=ios]>*{background:hsla(0,0%,100%,.95)}.react-modal[data-theme=ios] .react-modal-ft{border-radius:0 0 13px 13px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-modal[data-theme=ios] .react-modal-ft:after{top:0}.react-modal[data-theme=ios] .react-modal-button:active{background:#dedede}.react-modal[data-theme=ios] .react-modal-button+.react-modal-button{position:relative}.react-modal[data-theme=ios] .react-modal-button+.react-modal-button:after{left:0}.react-modal.no-header .react-modal-bd{border-top-left-radius:13px;border-top-right-radius:13px}.react-modal.no-footer .react-modal-bd{border-bottom-left-radius:13px;border-bottom-right-radius:13px}.react-modal-hd{padding:15px 15px 0;font-size:18px;text-align:center;border-radius:13px 13px 0 0;font-weight:700}.react-modal-bd{text-align:center;padding:15px}.react-modal-ft{border-radius:0 0 13px 13px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-modal-button{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;width:100%;padding:0 5px;height:44px;font-size:17px;line-height:44px;text-align:center;color:#007aff;display:block;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1}.react-modal-button:first-child{border-bottom-left-radius:13px}.react-modal-button:last-child{border-bottom-right-radius:13px}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(o[a]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t){e.exports=function(){}},function(e,t,r){function o(e,t){for(var r=0;r<e.length;r++){var o=e[r],n=p[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(c(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(c(o.parts[a],t));p[o.id]={id:o.id,refs:1,parts:i}}}}function n(e){for(var t=[],r={},o=0;o<e.length;o++){var n=e[o],a=n[0],i=n[1],s=n[2],l=n[3],c={css:i,media:s,sourceMap:l};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function a(e,t){var r=h(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var r,o,n;if(t.singleton){var a=v++;r=y||(y=s(t)),o=u.bind(null,r,a,!1),n=u.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(t),o=f.bind(null,r),n=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),o=d.bind(null,r),n=function(){i(r)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}function u(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var r=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function f(e,t){var r=t.css,o=t.sourceMap;o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var n=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(n),a&&URL.revokeObjectURL(a)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=n(e);return o(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],l=p[s.id];l.refs--,a.push(l)}if(e){var c=n(e);o(c,t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var o=r(3);"string"==typeof o&&(o=[[e.id,o,""]]);r(6)(o,{});o.locals&&(e.exports=o.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-modal.js.map