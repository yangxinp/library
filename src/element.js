// src/element.js
import * as util from "./util";

// 使用 background 显示图片
export async function createBackgroudImg(src) {
  const img = await util.loadImg(src);

  const div = document.createElement("div");
  div.style.width = `${img.width}px`;
  div.style.height = `${img.height}px`;
  div.style.background = `url(${src})`;

  return div;
}

// 创建一个有随机数的节点
export function createRandomTextElement() {
  const div = document.createElement("div");
  div.innerText = `random: ${util.getRandomInt(1000, 9999)}`;
  return div;
}

// 类
class Element {
  constructor(value) {
    this.value = value;
  }

  getVal() {
    return `value: ${this.value}`;
  }
}

// async、await
(async function () {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // 两秒后显示打印类
  console.log(Element);
})();
