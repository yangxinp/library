import "./style/vue-button.scss";
import { PropType } from "vue";
declare const Button: import("vue").DefineComponent<{
    size: {
        type: PropType<"small" | "default" | "large">;
        default: string;
    };
    color: StringConstructor;
}, unknown, unknown, {}, {
    onClick(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    color?: unknown;
} & {
    size: "small" | "default" | "large";
} & {
    color?: string;
}> & {
    onClick?: (...args: any[]) => any;
}, {
    size: "small" | "default" | "large";
}>;
export default Button;
