"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

require("./style/vue-button.css");

var _vue = require("vue");

// src/vue-button.ts
var Button = (0, _vue.defineComponent)({
  emits: ["click"],
  name: "ui-button",
  props: {
    size: {
      type: String,
      default: "default"
    },
    color: String
  },
  methods: {
    onClick: function onClick(e) {
      this.$emit("click");
    }
  },
  render: function render() {
    var _this$$slots$default, _this$$slots;

    return (0, _vue.h)("button", {
      class: ["ui-button", "size-".concat(this.size)],
      onClick: this.onClick
    }, (_this$$slots$default = (_this$$slots = this.$slots).default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots));
  }
});
var _default = Button;
exports.default = _default;