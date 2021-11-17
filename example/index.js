// example/index.js
import { createBackgroudImg, browser, createRandomTextElement } from "../lib";
// 或者使用 webpack 的别名功能
// import { createBackgroudImg, browser, createRandomTextElement } from "library";

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
