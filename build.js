// build.js
var path = require("path");
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

webpack(
  {
    // 需要设置 production，自动开启代码优化功能
    // 或设置以下 optimization 手动开启代码优化功能
    mode: "none", // 方便查看产物的代码，可以临时设置 none
    // 入口
    entry: "./src/index.ts",
    // 输出
    output: {
      filename: "library.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        name: "library",
        type: "umd",
      },
    },
    target: ["web", "es5"],
    externals: {
      vue: {
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue",
        root: "Vue",
      },
    },
    // 顺序解析后缀名
    resolve: { extensions: [".tsx", ".ts", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          // 顺序不能错，loader 从右往左执行
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    require("autoprefixer")({
                      // 可以对比添加前后的产物有什么区别
                      // 注意这里是不兼容 IE <= 11，为了查看添加前后的区别
                      // overrideBrowserslist: ["> 1%", "not ie <= 11"],
                      overrideBrowserslist: ["ie >= 11"],
                    }),
                  ],
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(tsx?)|(m?js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            // 传入配置方式 或者 创建配置文件
            options: {
              presets: [
                ["@babel/preset-env", { debug: true, targets: "ie >= 11" }],
                "@babel/preset-typescript",
              ],
              plugins: [
                "@vue/babel-plugin-jsx",
                ["@babel/plugin-transform-runtime", { corejs: 3 }],
              ],
            },
          },
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
    // optimization: {
    //   usedExports: true,
    //   minimize: true,
    //   concatenateModules: true,
    // },
  },
  (err, stats) => {
    if (err || stats.hasErrors()) {
      // 这里处理错误
      console.log(err, stats);
    }
    // 处理完成
  }
);
