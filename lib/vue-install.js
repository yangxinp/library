"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _vueButton.default;
  }
});

exports.install = void 0;

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _vueButton = _interopRequireDefault(require("./vue-button"));

// src/vue-install.ts
// 需要全局注册的组件
var components = [_vueButton.default]; // 安装函数: vue.use() 使用

var install = function install(app) {
  (0, _forEach.default)(components).call(components, function (component) {
    // 遍历注册
    app.component(component.name, component);
  });
};

exports.install = install;