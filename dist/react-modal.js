!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","classnames","react-dom"],t):"object"==typeof exports?exports.ReactModal=t(require("react"),require("classnames"),require("react-dom")):e.ReactModal=t(e.react,e.classnames,e["react-dom"])}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(2),i=r(o),a=n(5),s=r(a);e.exports={ReactModal:i.default,ReactModalCtrl:s.default}},function(t,n){t.exports=e},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(11);var c=n(3),u=r(c),f=n(9),d=n(8),p=r(d),h=function(t){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={header:e.header,body:e.body,visible:e.visible,buttons:e.buttons,animating:!1},t}return a(n,t),l(n,null,[{key:"newInstance",value:function(e){return(0,p.default)(n,e,{className:"react-modal-wrapper"})}}]),l(n,[{key:"componentWillMount",value:function(){f.BackdropCtrl.getInstance(this.props.backdropOptions)}},{key:"show",value:function(e){this._setVisible(e,!0)}},{key:"hide",value:function(){this._setVisible({},!1)}},{key:"_setVisible",value:function(e,t){var n=this;this.setState({animating:!0}),setTimeout(function(){n.setState(Object.assign(e,{visible:t})),t?f.BackdropCtrl.show():f.BackdropCtrl.hide()})}},{key:"_onTransitionEnd",value:function(){this.setState({animating:!1})}},{key:"render",value:function(){return e.createElement("div",{"data-visible":this.state.visible,"data-animating":this.state.animating,hidden:!this.state.visible&&!this.state.animating,onTransitionEnd:this._onTransitionEnd.bind(this),className:(0,u.default)("react-modal",this.props.cssClass,{"no-header":!this.state.header},{"no-footer":0==this.state.buttons.length})},"string"==typeof this.state.header&&e.createElement("div",{className:"react-modal-hd",dangerouslySetInnerHTML:{__html:this.state.header}}),"object"==s(this.state.header)&&e.createElement("div",{className:"react-modal-hd"},this.state.header),"string"==typeof this.state.body&&e.createElement("div",{className:"react-modal-bd",dangerouslySetInnerHTML:{__html:this.state.body}}),"object"==s(this.state.body)&&e.createElement("div",{className:"react-modal-bd"},this.state.body),this.state.buttons.length>0&&e.createElement("div",{className:"react-modal-ft"},this.state.buttons.map(function(t,n){return e.createElement("div",{key:n,className:"react-modal-button",onClick:t.onClick.bind(this)},t.text)}.bind(this))))}}]),n}(e.Component);h.propTypes={cssClass:e.PropTypes.string,type:e.PropTypes.string,buttons:e.PropTypes.array,backdropOptions:e.PropTypes.object},h.defaultProps={type:"default",header:"Title",body:"",visible:!1,backdropOptions:{style:{opacity:.7}},buttons:[{text:"OK",onClick:function(e){this.hide()}},{text:"Cancel",onClick:function(e){this.hide()}}]},t.default=h}).call(t,n(1))},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),s=r(a),l=void 0,c=function(){function e(){o(this,e)}return i(e,null,[{key:"createInstance",value:function(e){return l=l||s.default.newInstance(e)}},{key:"show",value:function(e){l.component.show(e)}},{key:"hide",value:function(){l.component.hide()}}]),e}();t.default=c},function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".react-modal{font-family:-apple-system,SF UI Text,Helvetica Neue,Helvetica,Arial,sans-serif;width:80%;top:38.2%;left:50%;position:absolute;z-index:2;-webkit-transform:translate(-50%,-50%) scale(1.185);transform:translate(-50%,-50%) scale(1.185);-webkit-transition:opacity .3s linear,-webkit-transform .3s ease-in-out;transition:opacity .3s linear,-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out,opacity .3s linear;transition:transform .3s ease-in-out,opacity .3s linear,-webkit-transform .3s ease-in-out}.react-modal[hidden]{display:block}.react-modal[data-visible=false]{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1.085);transform:translate(-50%,-50%) scale(1.085)}.react-modal[data-visible=true][data-animating=true]{opacity:1}.react-modal[data-visible=true][data-animating=false],.react-modal[data-visible=true][data-animating=true]{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.react-modal.no-header .react-modal-bd{border-top-left-radius:13px;border-top-right-radius:13px}.react-modal.no-footer .react-modal-bd{border-bottom-left-radius:13px;border-bottom-right-radius:13px}.react-modal>*{background:hsla(0,0%,100%,.95)}.react-modal-hd{font-weight:500;font-size:18px;border-radius:13px 13px 0 0;border-bottom:1px solid #eee}.react-modal-bd,.react-modal-hd{padding:15px;text-align:center}.react-modal-ft{border-top:1px solid #eee;border-radius:0 0 13px 13px;height:44px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-modal-button{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;width:100%;padding:0 5px;height:44px;font-size:17px;line-height:44px;text-align:center;color:#007aff;display:block;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1}.react-modal-button+.react-modal-button{border-left:1px solid #eee}.react-modal-button:active{background:#eee}.react-modal-button:first-child{border-radius:0 0 0 13px}.react-modal-button:last-child{border-radius:0 0 13px 0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){(function(t,n){e.exports=function(e,r,o){var i=document.createElement("div"),a=document.body;for(var s in o)o.hasOwnProperty(s)&&(i[s]=o[s]);a.appendChild(i);const l=t.render(n.createElement(e,r),i);return{component:l,destroy:function(){t.unmountComponentAtNode(i),a.removeChild(i)}}}}).call(t,n(4),n(1))},function(e,t,n){!function(t,r){e.exports=r(n(1),n(3),n(4))}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=r(o),a=n(3),s=r(a);e.exports={Backdrop:i.default,BackdropCtrl:s.default}},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(8);var l=n(6),c=r(l),u=n(9),f=r(u),d=function(t){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={visible:e.visible,animating:!1},t}return a(n,t),s(n,null,[{key:"newInstance",value:function(e){return(0,c.default)(n,e,{className:"backdrop-wrapper"})}}]),s(n,[{key:"componentWillReceiveProps",value:function(e,t){this.setState(e)}},{key:"show",value:function(){this._setVisible(!0)}},{key:"hide",value:function(){this._setVisible(!1)}},{key:"_setVisible",value:function(e){var t=this;this.setState({animating:!0}),setTimeout(function(){t.setState({visible:e})})}},{key:"_onTransitionEnd",value:function(){this.setState({animating:!1})}},{key:"render",value:function(){return e.createElement("div",{style:this.props.style,hidden:!this.state.visible&&!this.state.animating,"data-visible":this.state.visible,onClick:this.props.onClick,onTransitionEnd:this._onTransitionEnd.bind(this),className:(0,f.default)("react-backdrop",this.props.cssClass)})}}]),n}(e.Component);d.propTypes={visible:e.PropTypes.bool,style:e.PropTypes.object,cssClass:e.PropTypes.string},d.defaultProps={visible:!1,cssClass:"",style:{}},t.default=d}).call(t,n(2))},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),s=r(a),l=void 0,c=function(){function e(){o(this,e)}return i(e,null,[{key:"getInstance",value:function(e){return l=l||s.default.newInstance(e)}},{key:"show",value:function(){l.component.show()}},{key:"hide",value:function(){l.component.hide()}}]),e}();t.default=c},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".react-backdrop{left:0;top:0;bottom:0;right:0;background:#000;opacity:.3;position:absolute;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.react-backdrop[hidden]{display:none}.react-backdrop[data-visible=false]{position:absolute;opacity:0!important}.react-backdrop[data-visible=true]{position:fixed;opacity:.3}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){(function(t,n){e.exports=function(e,r,o){var i=document.createElement("div"),a=document.body;for(var s in o)o.hasOwnProperty(s)&&(i[s]=o[s]);a.appendChild(i);const l=t.render(n.createElement(e,r),i);return{component:l,destroy:function(){t.unmountComponentAtNode(i),a.removeChild(i)}}}}).call(t,n(10),n(2))},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],l=o[3],c={css:a,media:s,sourceMap:l};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=m(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=y++;n=v||(v=s(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=p[s.id];l.refs--,i.push(l)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]),n(7)(r,{}),r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t},function(e,t){e.exports=n}])})},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],l=o[3],c={css:a,media:s,sourceMap:l};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=m(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=y++;n=v||(v=s(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=p[s.id];l.refs--,i.push(l)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.id,r,""]]);n(10)(r,{});r.locals&&(e.exports=r.locals)}])});
//# sourceMappingURL=react-modal.js.map