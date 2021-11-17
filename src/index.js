// src/index.js
// 看情况引入
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import { browser } from "./browser";
import { getRandomInt } from "./util";
import { createBackgroudImg, createRandomTextElement } from "./element";

export { browser, getRandomInt, createBackgroudImg, createRandomTextElement };

// 或以下

// export { browser } from "./browser";
// export { getRandomInt } from "./util";
// export { createBackgroudImg, createRandomTextElement } from "./element";
