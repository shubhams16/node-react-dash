(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7],{616:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(157),a=r(1),c=r.n(a),o=r(615),l=c.a.memo((function(e){var t=e.name,r=e.text,a=Object(n.a)(e,["name","text"]),l=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return c.a.createElement("div",{className:"card-header-actions"},c.a.createElement(o.db,Object.assign({},a,{href:l,rel:"noreferrer noopener",target:"_blank",className:"card-header-action"}),c.a.createElement("small",{className:"text-muted"},r||"docs")))}))},617:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(619);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(i){a=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw c}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},618:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},619:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(618);function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},622:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return n})),r.d(t,"getColor",(function(){return i})),r.d(t,"getStyle",(function(){return l})),r.d(t,"hexToRgb",(function(){return s})),r.d(t,"hexToRgba",(function(){return u})),r.d(t,"makeUid",(function(){return m})),r.d(t,"omitByKeys",(function(){return d})),r.d(t,"pickByKeys",(function(){return f})),r.d(t,"rgbToHex",(function(){return b}));var n=function e(t,r){for(var n=0,a=Object.keys(r);n<a.length;n++){var c=a[n];r[c]instanceof Object&&Object.assign(r[c],e(t[c],r[c]))}return Object.assign(t||{},r),t},a=function(){for(var e={},t=document.styleSheets,r="",n=t.length-1;n>-1;n--){for(var a=t[n].cssRules,c=a.length-1;c>-1;c--)if(".ie-custom-properties"===a[c].selectorText){r=a[c].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],n=t.split(": ")[1];r&&n&&(e["--".concat(r.trim())]=n.trim())}})),e},c=function(){return Boolean(document.documentMode)&&document.documentMode>=10},o=function(e){return e.match(/^--.*/i)},l=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(o(e)&&c()){var n=a();t=n[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e),n=l(r,t);return n||e},s=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(n,")")},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var r,n,a,c=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!c)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),a=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(n,", ").concat(a,", ").concat(t/100,")")},m=function(){return"uid-"+Math.random().toString(36).substr(2)},d=function(e,t){for(var r={},n=Object.keys(e),a=0;a<n.length;a++)!t.includes(n[a])&&(r[n[a]]=e[n[a]]);return r},f=function(e,t){for(var r={},n=0;n<t.length;n++)r[t[n]]=e[t[n]];return r},b=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),n="0".concat(parseInt(t[2],10).toString(16)),a="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(n.slice(-2)).concat(a.slice(-2))},g={deepObjectsMerge:n,getColor:i,getStyle:l,hexToRgb:s,hexToRgba:u,makeUid:m,omitByKeys:d,pickByKeys:f,rgbToHex:b};t.default=g}]))},699:function(e,t,r){"use strict";r.r(t);var n=r(617),a=r(1),c=r.n(a),o=r(614),l=r.n(o),i=r(615),s=r(622),u=r(616),m=function(){var e=Object(a.useState)("rgb(255, 255, 255)"),t=Object(n.a)(e,2),r=t[0],o=t[1],l=Object(a.createRef)();return Object(a.useEffect)((function(){var e=l.current.parentNode.firstChild,t=window.getComputedStyle(e).getPropertyValue("background-color");o(t)}),[l]),c.a.createElement("table",{className:"table w-100",ref:l},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"text-muted"},"HEX:"),c.a.createElement("td",{className:"font-weight-bold"},Object(s.rgbToHex)(r))),c.a.createElement("tr",null,c.a.createElement("td",{className:"text-muted"},"RGB:"),c.a.createElement("td",{className:"font-weight-bold"},r))))},d=function(e){var t=e.className,r=e.children,n=l()(t,"theme-color w-75 rounded mb-3");return c.a.createElement(i.u,{xl:"2",md:"4",sm:"6",xs:"12",className:"mb-4"},c.a.createElement("div",{className:n,style:{paddingTop:"75%"}}),r,c.a.createElement(m,null))};t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.j,null,c.a.createElement(i.n,null,"Theme colors",c.a.createElement(u.a,{href:"https://coreui.io/docs/utilities/colors/"})),c.a.createElement(i.k,null,c.a.createElement(i.wb,null,c.a.createElement(d,{className:"bg-primary"},c.a.createElement("h6",null,"Brand Primary Color")),c.a.createElement(d,{className:"bg-secondary"},c.a.createElement("h6",null,"Brand Secondary Color")),c.a.createElement(d,{className:"bg-success"},c.a.createElement("h6",null,"Brand Success Color")),c.a.createElement(d,{className:"bg-danger"},c.a.createElement("h6",null,"Brand Danger Color")),c.a.createElement(d,{className:"bg-warning"},c.a.createElement("h6",null,"Brand Warning Color")),c.a.createElement(d,{className:"bg-info"},c.a.createElement("h6",null,"Brand Info Color")),c.a.createElement(d,{className:"bg-light"},c.a.createElement("h6",null,"Brand Light Color")),c.a.createElement(d,{className:"bg-dark"},c.a.createElement("h6",null,"Brand Dark Color"))))),c.a.createElement(i.j,null,c.a.createElement(i.n,null,"Grays"),c.a.createElement(i.k,null,c.a.createElement(i.wb,{className:"mb-3"},c.a.createElement(d,{className:"bg-gray-100"},c.a.createElement("h6",null,"Gray 100 Color")),c.a.createElement(d,{className:"bg-gray-200"},c.a.createElement("h6",null,"Gray 200 Color")),c.a.createElement(d,{className:"bg-gray-300"},c.a.createElement("h6",null,"Gray 300 Color")),c.a.createElement(d,{className:"bg-gray-400"},c.a.createElement("h6",null,"Gray 400 Color")),c.a.createElement(d,{className:"bg-gray-500"},c.a.createElement("h6",null,"Gray 500 Color")),c.a.createElement(d,{className:"bg-gray-600"},c.a.createElement("h6",null,"Gray 600 Color")),c.a.createElement(d,{className:"bg-gray-700"},c.a.createElement("h6",null,"Gray 700 Color")),c.a.createElement(d,{className:"bg-gray-800"},c.a.createElement("h6",null,"Gray 800 Color")),c.a.createElement(d,{className:"bg-gray-900"},c.a.createElement("h6",null,"Gray 900 Color"))))))}}}]);
//# sourceMappingURL=7.cc2d2fad.chunk.js.map