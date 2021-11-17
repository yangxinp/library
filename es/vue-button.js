// src/vue-button.ts
import "./style/vue-button.css";
import { defineComponent, h } from "vue";
var Button = defineComponent({
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

    return h("button", {
      class: ["ui-button", "size-".concat(this.size)],
      onClick: this.onClick
    }, (_this$$slots$default = (_this$$slots = this.$slots).default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots));
  }
});
export default Button;