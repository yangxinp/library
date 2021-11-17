// src/util.ts
// 随机数
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 加载图片
export async function loadImg(src: string): Promise<HTMLImageElement> {
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

// 类、await、async 的演示代码删除，有兴趣也可以自己转化
