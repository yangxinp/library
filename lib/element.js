"use strict";

var _typeof = require("@babel/runtime-corejs3/helpers/typeof");

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createBackgroudImg = createBackgroudImg;
exports.createRandomTextElement = createRandomTextElement;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

require("./style/element.css");

var util = _interopRequireWildcard(require("./util"));

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// src/element.ts
// import "./style/element.css";
// 使用 background 显示图片
function createBackgroudImg(_x) {
  return _createBackgroudImg.apply(this, arguments);
} // 创建一个有随机数的节点


function _createBackgroudImg() {
  _createBackgroudImg = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(src) {
    var img, div;
    return _regenerator.default.wrap(function _callee$(_context) {
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

function createRandomTextElement() {
  var div = document.createElement("div");
  div.classList.add("ui-random-text");
  div.innerText = "random: ".concat(util.getRandomInt(1000, 9999));
  return div;
} // 类、await、async 的演示代码删除，有兴趣也可以自己转化