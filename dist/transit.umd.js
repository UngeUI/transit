!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).transit=e()}(this,(function(){"use strict";return function(t,{duration:e=1e3,name:n,value:o}){const{target:r,attr:i}=function(t,e){const n={target:null,attr:null};return"string"==typeof t?(n.target=document.querySelector(t),n.attr="innerText"):(n.target=t,n.attr=e),n}(t,n),a=Number(r[i]),u=o,f=u-a,l=f/e;let s;requestAnimationFrame((function t(n){null==s&&(s=n);const o=n-s,c=Math.floor(a+o*l);r[i]=f>0?Math.min(c,u):Math.max(c,u);o<e&&requestAnimationFrame(t)}))}}));
