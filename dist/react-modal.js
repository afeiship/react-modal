!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("measure-it"),require("react"),require("react-append-to-document"),require("react-backdrop")):"function"==typeof define&&define.amd?define(["classnames","measure-it","react","react-append-to-document","react-backdrop"],t):"object"==typeof exports?exports.ReactModal=t(require("classnames"),require("measure-it"),require("react"),require("react-append-to-document"),require("react-backdrop")):e.ReactModal=t(e.classnames,e["measure-it"],e.react,e["react-append-to-document"],e["react-backdrop"])}(this,function(e,t,a,r,n){return function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="/",t(0)}([function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=a(1),o=r(n),i=a(2),s=r(i);e.exports={ReactModal:o.default,ReactModalCtrl:s.default}},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();a(6);var c=a(7),u=r(c),d=a(9),f=r(d),p=a(11),m=a(10),h=r(m),b=a(8),y=r(b),v=function(e){function t(e){n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={header:e.header,body:e.body,theme:e.theme,visible:e.visible,buttons:e.buttons,dimensions:{},shouldMeasure:!0,animating:!1},a._timer=null,a}return i(t,e),l(t,null,[{key:"newInstance",value:function(e){return(0,h.default)(t,e,{className:"react-modal-wrapper"})}}]),l(t,[{key:"componentWillMount",value:function(){p.ReactBackdropCtrl.createInstance(this.props.backdropStyle)}},{key:"show",value:function(e){this._setVisible(e,!0)}},{key:"hide",value:function(){this._setVisible({},!1)}},{key:"_setVisible",value:function(e,t){var a=this;this.setState({animating:!0}),this._timer=setTimeout(function(){a._measureOnShow(e,t)})}},{key:"_measureOnShow",value:function(e,t){var a=this;a.setState(Object.assign({},a.props,{visible:t},e),function(){(0,y.default)(a.refs.root,function(e){a.setState({dimensions:e}),t?p.ReactBackdropCtrl.show():p.ReactBackdropCtrl.hide(),a._clearTimeout()})})}},{key:"_clearTimeout",value:function(){clearTimeout(this._timer),this._timer=null}},{key:"_onTransitionEnd",value:function(){this.setState({animating:!1})}},{key:"render",value:function(){var e=this;return f.default.createElement("div",{ref:"root","data-theme":this.state.theme,"data-header":this.state.header,"data-visible":this.state.visible,"data-animating":this.state.animating,hidden:!this.state.visible&&!this.state.animating,onTransitionEnd:this._onTransitionEnd.bind(this),"data-height":this.state.dimensions.height,style:{marginTop:"-"+this.state.dimensions.height/2+"px",marginLeft:"-"+this.state.dimensions.width/2+"px"},className:(0,u.default)("react-modal",this.props.className,{"no-header":!this.state.header},{"no-footer":0==this.state.buttons.length})},this.state.header&&"string"==typeof this.state.header&&f.default.createElement("div",{className:"react-modal-hd",dangerouslySetInnerHTML:{__html:this.state.header}}),this.state.header&&"object"==s(this.state.header)&&f.default.createElement("div",{className:"react-modal-hd"},this.state.header),this.state.body&&"string"==typeof this.state.body&&f.default.createElement("div",{className:"react-modal-bd",dangerouslySetInnerHTML:{__html:this.state.body}}),this.state.body&&"object"==s(this.state.body)&&f.default.createElement("div",{className:"react-modal-bd"},this.state.body),this.state.buttons.length>0&&f.default.createElement("div",{className:"react-modal-ft"},this.state.buttons.map(function(t,a){return f.default.createElement("div",{key:a,className:"react-modal-button",onClick:t.onClick.bind(e)},t.text)})))}}]),t}(f.default.Component);v.propTypes={className:d.PropTypes.string,buttons:d.PropTypes.array,backdropStyle:d.PropTypes.object,theme:d.PropTypes.oneOf(["ios","tranparent"]),body:d.PropTypes.oneOfType([d.PropTypes.string,d.PropTypes.element])},v.defaultProps={header:null,body:null,visible:!1,theme:"ios",buttons:[],backdropStyle:{style:{opacity:.7}}},t.default=v},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),i=a(1),s=r(i),l=void 0,c=function(){function e(){n(this,e)}return o(e,null,[{key:"createInstance",value:function(e){return l=l||s.default.newInstance(e)}},{key:"show",value:function(e){l.component.show(e)}},{key:"hide",value:function(){l.component.hide()}},{key:"destory",value:function(){l.destory(),l=null}}]),e}();t.default=c},function(e,t,a){t=e.exports=a(4)(),t.push([e.id,'.hairline,.hairline-x,.hairline-y,.react-modal[data-theme=ios] .react-modal-button+.react-modal-button,.react-modal[data-theme=ios] .react-modal-ft{position:relative}.hairline-x:after,.hairline-y:after,.hairline:after,.react-modal[data-theme=ios] .react-modal-button+.react-modal-button:after,.react-modal[data-theme=ios] .react-modal-ft:after{content:"";position:absolute;left:0;top:0;bottom:auto;right:auto;background-color:#c8c7cc;display:block;z-index:15}.hairline-x:after,.react-modal[data-theme=ios] .react-modal-ft:after{height:1px;width:100%;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.hairline-y:after,.react-modal[data-theme=ios] .react-modal-button+.react-modal-button:after{width:1px;height:100%;-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.react-modal{font-family:-apple-system,SF UI Text,Helvetica Neue,Helvetica,Arial,sans-serif;width:80%;top:38.2%;left:50%;position:absolute;z-index:2;-webkit-transform:scale(1.185);transform:scale(1.185);-webkit-transition:opacity .22s linear,-webkit-transform .2s ease-in-out;transition:opacity .22s linear,-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out,opacity .22s linear;transition:transform .2s ease-in-out,opacity .22s linear,-webkit-transform .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-modal[hidden]{display:none}.react-modal[data-visible=false]{opacity:0;-webkit-transform:scale(1.085);transform:scale(1.085)}.react-modal[data-visible=true][data-animating=true]{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.react-modal[data-visible=true][data-animating=false]{-webkit-transform:scale(1);transform:scale(1)}.react-modal[data-theme=ios]>*{background:hsla(0,0%,100%,.95)}.react-modal[data-theme=ios] .react-modal-ft{border-radius:0 0 13px 13px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-modal[data-theme=ios] .react-modal-ft:after{top:0}.react-modal[data-theme=ios] .react-modal-button:active{background:#dedede}.react-modal[data-theme=ios] .react-modal-button+.react-modal-button{position:relative}.react-modal[data-theme=ios] .react-modal-button+.react-modal-button:after{left:0}.react-modal.no-header .react-modal-bd{border-top-left-radius:13px;border-top-right-radius:13px}.react-modal.no-footer .react-modal-bd{border-bottom-left-radius:13px;border-bottom-right-radius:13px}.react-modal-hd{padding:15px 15px 0;font-size:18px;text-align:center;border-radius:13px 13px 0 0;font-weight:700}.react-modal-bd{text-align:center;padding:15px}.react-modal-ft{border-radius:0 0 13px 13px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-modal-button{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;width:100%;padding:0 5px;height:44px;font-size:17px;line-height:44px;text-align:center;color:#007aff;display:block;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1}.react-modal-button:first-child{border-bottom-left-radius:13px}.react-modal-button:last-child{border-bottom-right-radius:13px}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(r[o]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&r[i[0]]||(a&&!i[2]?i[2]=a:a&&(i[2]="("+i[2]+") and ("+a+")"),e.push(i))}},e}},function(e,t,a){function r(e,t){for(var a=0;a<e.length;a++){var r=e[a],n=p[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(c(r.parts[o],t))}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(c(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:i}}}}function n(e){for(var t=[],a={},r=0;r<e.length;r++){var n=e[r],o=n[0],i=n[1],s=n[2],l=n[3],c={css:i,media:s,sourceMap:l};a[o]?a[o].parts.push(c):t.push(a[o]={id:o,parts:[c]})}return t}function o(e,t){var a=b(),r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?a.insertBefore(t,r.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var a,r,n;if(t.singleton){var o=v++;a=y||(y=s(t)),r=u.bind(null,a,o,!1),n=u.bind(null,a,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=l(t),r=f.bind(null,a),n=function(){i(a),a.href&&URL.revokeObjectURL(a.href)}):(a=s(t),r=d.bind(null,a),n=function(){i(a)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}function u(e,t,a,r){var n=a?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var o=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function d(e,t){var a=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function f(e,t){var a=t.css,r=t.sourceMap;r&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([a],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(n),o&&URL.revokeObjectURL(o)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var a=n(e);return r(a,t),function(e){for(var o=[],i=0;i<a.length;i++){var s=a[i],l=p[s.id];l.refs--,o.push(l)}if(e){var c=n(e);r(c,t)}for(var i=0;i<o.length;i++){var l=o[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var g=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t,a){var r=a(3);"string"==typeof r&&(r=[[e.id,r,""]]);a(5)(r,{});r.locals&&(e.exports=r.locals)},function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-modal.js.map