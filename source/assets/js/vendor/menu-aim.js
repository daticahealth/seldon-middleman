!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).menuAim=e()}}(function(){return function r(u,f,s){function m(n,e){if(!f[n]){if(!u[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(l)return l(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var i=f[n]={exports:{}};u[n][0].call(i.exports,function(e){return m(u[n][1][e]||e)},i,i.exports,r,u,f,s)}return f[n].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)m(s[e]);return m}({1:[function(e,n,t){function E(e){var n=e.getBoundingClientRect(),t=n.left+(window.pageXOffset||document.documentElement.scrollLeft),o=n.top+(window.pageYOffset||document.documentElement.scrollTop);return{x:[t,t+e.offsetWidth],y:[o,o+e.offsetHeight]}}function _(e,n){return(n.y-e.y)/(n.x-e.x)}n.exports=function(t,e){var o,i,r,u,f,s=e.delay||200,n=e.menuItemSelector||".menu-aim__item",m=e.menuItemActiveClassName||"menu-aim__item--active",l=e.menuItemSubMenuSelector||".menu-aim__item-submenu",a=e.delayingClassName||"menu-aim--delaying",c={},d={},y=E(t);function x(e){if(p(),!i||_(c,r)<_(d,r)||_(c,u)>_(d,u))return v(),function(e){(i=e).classList.add(m);var n=i.querySelector(l),t=E(n);r={x:t.x[0],y:t.y[0]},u={x:t.x[0],y:t.y[1]},f={x:[y.x[0],r.x+n.offsetWidth],y:[y.y[0],r.y+n.offsetHeight]}}(e),!0}function v(){i&&(t.classList.remove(a),i.classList.remove(m),i=null)}function p(){o&&clearTimeout(o)}function g(e){var n=e.target;x(n)||(t.classList.add(a),o=setTimeout(function(){x(n)},s))}for(var w=t.querySelectorAll(n),L=w.length;L--;)w[L].addEventListener("mouseenter",g);function h(e){var n,t;n=e.pageX,t=e.pageY,c.x=d.x,c.y=d.y,d.x=n,d.y=t,i&&(d.x<f.x[0]||d.x>f.x[1]||d.y<f.y[0]||d.y>f.y[1])&&(p(),v())}return window.addEventListener("mousemove",h),function(){for(L=w.length;L--;)w[L].removeEventListener("mouseenter",g);window.removeEventListener("mousemove",h)}}},{}]},{},[1])(1)});