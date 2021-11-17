// example/main.js
import { createApp } from "vue";
import {
  install,
  createBackgroudImg,
  browser,
  createRandomTextElement,
} from "../lib"; // 也可以使用 "library"
import App from "./App.vue";

// 随机数文本节点
var randomText = createRandomTextElement();
document.body.appendChild(randomText);

// 显示浏览器类型
var browserText = document.createElement("div");
browserText.innerHTML = browser();
document.body.appendChild(browserText);

// 添加图片
createBackgroudImg("https://hxin.link/images/avatar.jpg").then(function (el) {
  document.body.appendChild(el);
});

createApp(App).use(install).mount("#app");
