"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browser = browser;

require("core-js/stable");

require("regenerator-runtime/runtime");

// src/browser.js
var inBrowser = typeof window !== "undefined";
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isEdge = UA && UA.includes("edg/");
var isChrome = UA && UA.includes("chrome") && !isEdge;

function browser() {
  return ["ie: ".concat(isIE), "edge: ".concat(isEdge), "chrome: ".concat(isChrome)].join(", ");
}