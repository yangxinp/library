// compile.js
// 相当于 run-babel.js 的升级版
var stream = require("stream");
var { src, dest } = require("gulp");
var babel = require("@babel/core");
var postcss = require("postcss");
var sass = require("sass");

function compileTS(modules) {
  // babel 配置
  var config = {
    presets: [
      ["@babel/preset-env", { modules, debug: true, targets: "IE >= 11" }],
      "@babel/preset-typescript",
    ],
    plugins: [
      "@vue/babel-plugin-jsx",
      ["@babel/plugin-transform-runtime", { corejs: 3 }],
    ],
  };

  // Commonjs 输出至 ./lib
  // ES6 Module 输出至 ./es
  var path = modules === false ? "./es" : "./lib";

  // 读取文件
  src(["./src/**/*.ts", "./src/**/*.tsx"])
    .pipe(
      // 可以使用 through2 库，会更方便
      // 创建转化流，类似于双工流，但其输出是其输入的转换的转换流。
      new stream.Transform({
        objectMode: true,
        transform: function (chunk, encoding, next) {
          // 转化逻辑
          babel.transform(
            chunk.contents.toString(encoding), // 文件内容
            // 需要额外添加 filename
            { ...config, filename: chunk.basename },
            (err, res) => {
              // 文件中的 style/xxx.scss -> style/xxx.css
              const content = res.code.replace(
                /([\\/]style[\\/](?:.+)).scss/g,
                "$1.css"
              );
              // 文件内容修改成转化后的代码
              chunk.contents = Buffer.from(content);
              // 后缀名文件 .ts -> .js
              chunk.extname = ".js";
              next(null, chunk);
            }
          );
        },
      })
    )
    .pipe(dest(path)); // 输出到某文件中
}

function compileCSS(modules) {
  // Commonjs 输出至 ./lib
  // ES6 Module 输出至 ./es
  var path = modules === false ? "./es" : "./lib";

  // 读取 scss 文件，而不是 css 了
  src("./src/**/*.scss")
    .pipe(
      // 将 scss 转化成 css
      new stream.Transform({
        objectMode: true,
        transform: function (chunk, encoding, next) {
          var result = sass.renderSync({ file: chunk.path });
          chunk.contents = Buffer.from(result.css);
          // 后缀名文件 .scss -> .css
          chunk.extname = ".css";
          next(null, chunk);
        },
      })
    )
    .pipe(
      // 上面处理好的 css 再进行兼容性处理
      new stream.Transform({
        objectMode: true,
        transform: function (chunk, encoding, next) {
          // 传入配置
          postcss([
            require("autoprefixer")({
              // 可以对比添加前后的产物有什么区别
              // 注意这里是不兼容 IE <= 11，为了查看添加前后的区别
              // overrideBrowserslist: ["> 1%", "not ie <= 11"],
              overrideBrowserslist: ["ie >= 11"],
            }),
          ])
            .process(chunk.contents.toString(encoding), { from: chunk.path })
            .then((result) => {
              chunk.contents = Buffer.from(result.css);
              next(null, chunk);
            });
        },
      })
    )
    .pipe(dest(path)); // 输出到某文件中
}

// 编译 TS
compileTS(false); // ES6 Module
compileTS(); // Commonjs

// 编译 CSS
compileCSS(false);
compileCSS();
