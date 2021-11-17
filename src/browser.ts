// src/browser.ts

// run-babel.js 当前文件的时候，如果是 useBuiltIns 为 false(默认)、entry，
// 那么需要添加着两个文件
// import "core-js/stable";
// import "regenerator-runtime/runtime";

const inBrowser = typeof window !== "undefined";
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /msie|trident/.test(UA);
const isEdge = UA && UA.includes("edg/");
const isChrome = UA && UA.includes("chrome") && !isEdge;

export function browser() {
  return [`ie: ${isIE}`, `edge: ${isEdge}`, `chrome: ${isChrome}`].join(", ");
}

// 类、await、async 的演示代码删除，有兴趣也可以自己转化
