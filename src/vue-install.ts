// src/vue-install.ts
import { App } from "vue";
import Button from "./vue-button";

// 需要全局注册的组件
const components = [Button];

// 安装函数: vue.use() 使用
const install = function (app: App) {
  components.forEach((component) => {
    // 遍历注册
    app.component(component.name, component);
  });
};

export { install, Button };
