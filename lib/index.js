"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "browser", {
  enumerable: true,
  get: function get() {
    return _browser.browser;
  }
});

_Object$defineProperty(exports, "createBackgroudImg", {
  enumerable: true,
  get: function get() {
    return _element.createBackgroudImg;
  }
});

_Object$defineProperty(exports, "createRandomTextElement", {
  enumerable: true,
  get: function get() {
    return _element.createRandomTextElement;
  }
});

_Object$defineProperty(exports, "getRandomInt", {
  enumerable: true,
  get: function get() {
    return _util.getRandomInt;
  }
});

_Object$defineProperty(exports, "install", {
  enumerable: true,
  get: function get() {
    return _vueInstall.install;
  }
});

var _browser = require("./browser");

var _util = require("./util");

var _element = require("./element");

var _vueInstall = require("./vue-install");