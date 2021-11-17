import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
// src/util.ts
// 随机数
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} // 加载图片

export function loadImg(_x) {
  return _loadImg.apply(this, arguments);
}

function _loadImg() {
  _loadImg = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(src) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _Promise(function (resolve) {
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

export function notUse() {
  console.log("全局都没有引用的代码块");
} // 类、await、async 的演示代码删除，有兴趣也可以自己转化