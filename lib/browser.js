"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.browser = browser;

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

// src/browser.ts
// run-babel.js 当前文件的时候，如果是 useBuiltIns 为 false(默认)、entry，
// 那么需要添加着两个文件
// import "core-js/stable";
// import "regenerator-runtime/runtime";
var inBrowser = typeof window !== "undefined";
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isEdge = UA && (0, _includes.default)(UA).call(UA, "edg/");
var isChrome = UA && (0, _includes.default)(UA).call(UA, "chrome") && !isEdge;

function browser() {
  return ["ie: ".concat(isIE), "edge: ".concat(isEdge), "chrome: ".concat(isChrome)].join(", ");
} // 类、await、async 的演示代码删除，有兴趣也可以自己转化