import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
// src/browser.ts
// run-babel.js 当前文件的时候，如果是 useBuiltIns 为 false(默认)、entry，
// 那么需要添加着两个文件
// import "core-js/stable";
// import "regenerator-runtime/runtime";
var inBrowser = typeof window !== "undefined";
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);

var isEdge = UA && _includesInstanceProperty(UA).call(UA, "edg/");

var isChrome = UA && _includesInstanceProperty(UA).call(UA, "chrome") && !isEdge;
export function browser() {
  return ["ie: ".concat(isIE), "edge: ".concat(isEdge), "chrome: ".concat(isChrome)].join(", ");
} // 类、await、async 的演示代码删除，有兴趣也可以自己转化