"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browser = browser;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.join.js");

// src/browser.js
// run-babel.js 当前文件的时候，如果是 useBuiltIns 为 false(默认)、entry，
// 那么需要添加着两个文件
// import "core-js/stable";
// import "regenerator-runtime/runtime";
var inBrowser = typeof window !== "undefined";
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isEdge = UA && UA.includes("edg/");
var isChrome = UA && UA.includes("chrome") && !isEdge;

function browser() {
  return ["ie: ".concat(isIE), "edge: ".concat(isEdge), "chrome: ".concat(isChrome)].join(", ");
}