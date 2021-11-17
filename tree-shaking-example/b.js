// 打包该文件
import a from "./a";

// 情况一：不打包 a2
const e = { a1: a.a1 };
console.log(e);

// 情况二：打包 a2
// (function () {
//   const e = { a1: a.a1 };
//   console.log(e);
// })();

// 情况三：打包 a2
// console.log({ a1: a.a1 });