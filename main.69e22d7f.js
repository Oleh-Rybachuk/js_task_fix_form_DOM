parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,l=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function t(e){return a(e)||o(e)||n(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l,u=t(document.querySelectorAll("input")),c=e(u);try{for(c.s();!(l=c.n()).done;){var f=l.value,m=document.createElement("label"),d=f.parentNode;f.placeholder=f.name,f.style.textTransform="Capitalize",m.textContent=f.name,m.htmlFor=f.id,m.classList.add("field-label"),f.name.includes("Name")&&(f.placeholder=f.placeholder.replace(/Name/g," Name"),m.textContent=m.textContent.replace(/Name/g," Name")),d.prepend(m)}}catch(y){c.e(y)}finally{c.f()}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.69e22d7f.js.map