// src/element.ts
import "./style/element.scss";
// import "./style/element.css";
import * as util from "./util";

// 使用 background 显示图片
export async function createBackgroudImg(src: string) {
  const img = await util.loadImg(src);

  const div = document.createElement("div");
  div.style.width = `${img.width}px`;
  div.style.height = `${img.height}px`;
  div.style.background = `url(${src})`;
  div.classList.add("ui-backgroud-body");

  return div;
}

// 创建一个有随机数的节点
export function createRandomTextElement() {
  const div = document.createElement("div");
  div.classList.add("ui-random-text");
  div.innerText = `random: ${util.getRandomInt(1000, 9999)}`;
  return div;
}

// 类、await、async 的演示代码删除，有兴趣也可以自己转化
