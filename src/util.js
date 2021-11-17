// src/util.js
// 随机数
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 加载图片
export async function loadImg(src) {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
      resolve(img);
    };
  });
}

export function notUse() {
  console.log("全局都没有引用的代码块");
}

// 类
class Util {
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
  console.log(Util);
})();
