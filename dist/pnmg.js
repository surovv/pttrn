!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("library",[],r):"object"==typeof exports?exports.library=r():e.library=r()}(this,function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var o=r.DefinedType=function e(){n(this,e)},u=(r.Defined=new o,r.isDefined=function(e){return void 0!==e},r.GuardType=function e(){n(this,e)});r.Guard=function(e){return Object.assign(function(r){return e(r)},{constructor:u})}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.match=void 0;var n=function(){return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw u}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=t(0);var u=function(e,r){return 0===r.length&&0===e.length||r.length<=e.length&&0!==r.length&&r.every(function(r,t){return c(e[t],r)})},i=function(e,r){var t=[r,e].map(Object.keys),o=n(t,2),u=o[0],i=o[1];return 0===u.length&&0===i.length||u.length<=i.length&&0!==u.length&&u.every(function(t){return i.includes(t)&&c(e[t],r[t])})},c=function(e,r){return e===r||e.constructor===r||r.constructor===o.DefinedType&&(0,o.isDefined)(e)||r.constructor===o.GuardType&&r(e)||e.constructor===Array&&r.constructor===Array&&u(e,r)||e.constructor===Object&&r.constructor===Object&&i(e,r)};r.match=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{when:function(n,o){return e(r,[].concat(function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(t),[[n,o]]))},default:function(e){var o=t.find(function(e){var t=n(e,2),o=t[0];t[1];return c(r,o)});return(o?o[1]:e)(r)}}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1);Object.defineProperty(r,"match",{enumerable:!0,get:function(){return n.match}});var o=t(0);Object.defineProperty(r,"Defined",{enumerable:!0,get:function(){return o.Defined}}),Object.defineProperty(r,"Guard",{enumerable:!0,get:function(){return o.Guard}})}])});