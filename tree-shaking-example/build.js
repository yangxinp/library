var path = require("path");
var webpack = require("webpack");

webpack(
  {
    mode: "production", // 方便查看产物的代码，可以临时设置 none
    // 入口
    entry: "./tree-shaking-example/b.js",
    // 输出
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./dist"),
    },
  },
  (err, stats) => {
    if (err || stats.hasErrors()) {
      // 这里处理错误
      console.log(err, stats);
    }
    // 处理完成
  }
);
