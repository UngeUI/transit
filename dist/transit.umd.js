!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).transit=n()}(this,(function(){"use strict";return function(e,{duration:n,name:t,value:o}){const i=document.querySelector(e),u=Number(i.innerText),r=o,f=r-u,a=f/1e3;let l;requestAnimationFrame((function e(n){null==l&&(l=n);const t=n-l,o=Math.floor(u+t*a);i.innerText=f>0?Math.min(o,r):Math.max(o,r);t<1e3&&requestAnimationFrame(e)}))}}));