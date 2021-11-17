"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.browser = browser;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

// src/browser.js
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
} // 类


var Browser = /*#__PURE__*/function () {
  function Browser(value) {
    (0, _classCallCheck2.default)(this, Browser);
    this.value = value;
  }

  (0, _createClass2.default)(Browser, [{
    key: "getVal",
    value: function getVal() {
      return "value: ".concat(this.value);
    }
  }]);
  return Browser;
}(); // async、await


(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return new _promise.default(function (resolve) {
            return (0, _setTimeout2.default)(resolve, 2000);
          });

        case 2:
          // 两秒后显示打印类
          console.log(Browser);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();