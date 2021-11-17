"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browser = browser;

require("core-js/modules/es.regexp.exec.js");

// src/browser.js
// run-babel.js 当前文件的时候，如果是 useBuiltIns 为 false(默认)、entry，
// 那么需要添加着两个文件
// import "core-js/stable";
// import "regenerator-runtime/runtime";
const inBrowser = typeof window !== "undefined";
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /msie|trident/.test(UA);
const isEdge = UA && UA.includes("edg/");
const isChrome = UA && UA.includes("chrome") && !isEdge;

function browser() {
  return [`ie: ${isIE}`, `edge: ${isEdge}`, `chrome: ${isChrome}`].join(", ");
}