"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getRandomInt = getRandomInt;
exports.loadImg = loadImg;
exports.notUse = notUse;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

// src/util.ts
// 随机数
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} // 加载图片


function loadImg(_x) {
  return _loadImg.apply(this, arguments);
}

function _loadImg() {
  _loadImg = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(src) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve) {
              var img = document.createElement("img");
              img.src = src;

              img.onload = function () {
                resolve(img);
              };
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadImg.apply(this, arguments);
}

function notUse() {
  console.log("全局都没有引用的代码块");
} // 类、await、async 的演示代码删除，有兴趣也可以自己转化