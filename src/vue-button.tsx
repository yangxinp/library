// src/vue-button.ts
import "./style/vue-button.scss";
import { defineComponent, PropType, h } from "vue";

const Button = defineComponent({
  emits: ["click"],
  name: "ui-button",
  props: {
    size: {
      type: String as PropType<"small" | "large" | "default">,
      default: "default",
    },
    color: String,
  },
  methods: {
    onClick(e: Event) {
      this.$emit("click");
    },
  },
  render() {
    return (
      <button class={["ui-button", `size-${this.size}`]} onClick={this.onClick}>
        {this.$slots.default?.()}
      </button>
    );
    // return h(
    //   "button",
    //   {
    //     class: ["ui-button", `size-${this.size}`],
    //     onClick: this.onClick,
    //   },
    //   this.$slots.default?.()
    // );
  },
});

export default Button;
