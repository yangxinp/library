import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
// src/element.ts
import "./style/element.css"; // import "./style/element.css";

import * as util from "./util"; // 使用 background 显示图片

export function createBackgroudImg(_x) {
  return _createBackgroudImg.apply(this, arguments);
} // 创建一个有随机数的节点

function _createBackgroudImg() {
  _createBackgroudImg = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(src) {
    var img, div;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return util.loadImg(src);

          case 2:
            img = _context.sent;
            div = document.createElement("div");
            div.style.width = "".concat(img.width, "px");
            div.style.height = "".concat(img.height, "px");
            div.style.background = "url(".concat(src, ")");
            div.classList.add("ui-backgroud-body");
            return _context.abrupt("return", div);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createBackgroudImg.apply(this, arguments);
}

export function createRandomTextElement() {
  var div = document.createElement("div");
  div.classList.add("ui-random-text");
  div.innerText = "random: ".concat(util.getRandomInt(1000, 9999));
  return div;
} // 类、await、async 的演示代码删除，有兴趣也可以自己转化