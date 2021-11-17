// example/serve.js
var path = require("path");
var express = require("express");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var webpackDevMiddleware = require("webpack-dev-middleware");
// https://github.com/vuejs/vue-loader/issues/1755
// https://github.com/vuejs/vue-next-webpack-preview
var { VueLoaderPlugin } = require("vue-loader");

var app = express();

var compiler = webpack({
  // 此时不能为 none，因为 vue 需要读取 process.env.NODE_ENV 环境变量
  // 除非使用 webpack.DefinePlugin 重新注入这个环境变量，就可以使用 none 模式
  mode: "none",
  // mode: "development",
  entry: "./example/main.js",
  output: {
    path: path.resolve(__dirname, "../example/dist"),
    filename: "[name].[contenthash].js",
    // 无法作用于开发服务器
    clean: true, // https://github.com/webpack/webpack-dev-middleware/issues/861
  },
  target: ["web", "es5"],
  resolve: {
    // 设置 library 别名，指向 ../lib
    alias: {
      library: path.resolve(__dirname, "../lib"),
    },
  },
  module: {
    // 模拟用户的项目也需要对 css 进行处理
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        // 顺序不能错，loader 从右往左执行
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    // 代替 output.clean
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "example",
      template: "./example/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      // https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    }),
  ],
});

app.use(
  // 使用中间件
  webpackDevMiddleware(compiler, {
    // 将产物写入磁盘
    writeToDisk: true,
  })
);

// 启动服务
app.listen(3000, function () {
  console.log("Example app listening on port 3000!\n");
});
