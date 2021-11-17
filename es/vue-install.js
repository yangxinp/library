import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
// src/vue-install.ts
import Button from "./vue-button"; // 需要全局注册的组件

var components = [Button]; // 安装函数: vue.use() 使用

var install = function install(app) {
  _forEachInstanceProperty(components).call(components, function (component) {
    // 遍历注册
    app.component(component.name, component);
  });
};

export { install, Button };