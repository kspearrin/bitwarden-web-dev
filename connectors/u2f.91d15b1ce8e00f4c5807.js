!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=995)}({496:function(e,n){e.exports=u2f},995:function(e,n,r){"use strict";r.r(n);var t=r(496);document.addEventListener("DOMContentLoaded",function(e){c(),window.addEventListener("message",function(e){e.origin&&""!==e.origin&&e.origin===a&&("stop"===e.data?i=!0:"start"===e.data&&i&&c())},!1),function(e){parent.postMessage("info|"+e,o)}("ready")});var o=null,a=null,i=!1,u=!1;function c(){if(u=!1,t.isSupported){var e=f("data");if(e)if(o=f("parent")){var n=document.createElement("a");n.href=o,a=n.origin;var r=f("v");if(r){try{parseInt(r);var c=function(e){return decodeURIComponent(Array.prototype.map.call(atob(e),function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}(e),d=JSON.parse(c)}catch(e){return void s("Cannot parse data.")}d.appId&&d.challenge&&d.keys&&d.keys.length?(i=!1,function e(n){if(i)return;t.sign(n.appId,n.challenge,n.keys,function(r){r.errorCode?5!==r.errorCode?(s("U2F Error: "+r.errorCode),setTimeout(function(){e(n)},1e3)):e(n):function(e){if(u)return;var n=JSON.stringify(e);parent.postMessage("success|"+n,o),u=!0}(r)},10)}(d)):s("Invalid data parameters.")}else s("No version.")}else s("No parent.");else s("No data.")}else s("U2F is not supported in this browser.")}function s(e){parent.postMessage("error|"+e,o)}function f(e){var n=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}}});
//# sourceMappingURL=u2f.91d15b1ce8e00f4c5807.js.map