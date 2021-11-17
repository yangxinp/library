// src/browser.js

// run-babel.js 当前文件的时候，如果是 useBuiltIns 为 false(默认)、entry，
// 那么需要添加着两个文件
// import "core-js/stable";
// import "regenerator-runtime/runtime";

const inBrowser = typeof window !== "undefined";
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /msie|trident/.test(UA);
const isEdge = UA && UA.includes("edg/");
const isChrome = UA && UA.includes("chrome") && !isEdge;

export function browser() {
  return [`ie: ${isIE}`, `edge: ${isEdge}`, `chrome: ${isChrome}`].join(", ");
}

// 类
class Browser {
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
  console.log(Browser);
})();
