function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e,n=document.querySelector("ul");(e=t(n.children)).sort(function(r,t){return+t.dataset.salary.replaceAll(",","").replace("$","")-+r.dataset.salary.replaceAll(",","").replace("$","")}),e.forEach(function(r){n.append(r)}),t(n.children).map(function(r){return Object.assign({name:r.innerText},r.dataset)});
//# sourceMappingURL=index.39bef1af.js.map
