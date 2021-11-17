// declare.js
const ts = require("typescript");
const fs = require("fs");
const path = require("path");

// 简单实现返回文件夹下所有 .ts (除.d.ts) 文件函数
// 一般会直接使用第三方插件
function getFilesName(dirPath) {
  dirPath = path.resolve(dirPath);

  const collect = [];

  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      const childDirPath = path.resolve(dirPath, file.name);
      collect.push(...getFilesName(childDirPath));
    } else {
      if (file.name.match(/[^(\.d)].tsx?$/)) {
        const filePath = path.resolve(dirPath, file.name);
        collect.push(filePath);
      }
    }
  }

  return collect;
}

// 输出声明文件 .d.ts
function compileDTS(modules) {
  // 路径
  const output = modules === false ? "/es/" : "/lib/";
  // 获取 src 下的所有需要编译声明文件的文件名
  const fileNames = getFilesName("./src");

  // typescript 配置
  const options = {
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
  };

  // 创建一个程序
  const createdFiles = {};
  const host = ts.createCompilerHost(options);
  host.writeFile = (fileName, contents) => (createdFiles[fileName] = contents);

  // 准备并释放 d.ts 文件
  const program = ts.createProgram(fileNames, options, host);
  program.emit();

  // 在磁盘写入 d.ts 文件
  for (const fileName in createdFiles) {
    const content = createdFiles[fileName];
    const buildName = fileName.replace(/\/src\//, output);
    fs.writeFileSync(buildName, content);
  }
}

// 执行
compileDTS();
compileDTS(false);