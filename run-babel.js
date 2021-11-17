// run-babel.js
const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const filename = path.resolve(__dirname, "./src/browser.js");
const buildFileName = path.resolve(
  __dirname,
  "./src/browser-es5-ie11-runtime.js"
);
const data = fs.readFileSync(filename, "utf8");
// 配置会读取根目录下的 babel.config.json 或 .babelrc.json （也有其他的扩展名文件）
// const transformData = babel.transformSync(data);

// 指定配置
const transformData = babel.transformSync(data, {
  presets: [
    [
      "@babel/preset-env",
      // 可以开启 debug，来查看兼容了哪些目标浏览器和添加的垫片
      { debug: true, targets: "ie >= 11" },
    ],
  ],
  // @babel/preset-env 的 useBuiltIns 不能与 @babel/plugin-transform-runtime 混用
  plugins: [["@babel/plugin-transform-runtime", { corejs: 3 }]],
});

// 代码写入 buildFileName 文件中
fs.writeFileSync(buildFileName, transformData.code);
