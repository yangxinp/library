// library.js
(function (window) {
  // 浏览器识别
  var inBrowser = typeof window !== "undefined";
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isEdge = UA && UA.indexOf("edg/") > 0;
  var isChrome = UA && UA.indexOf("chrome") > 0 && !isEdge;

  // 浏览器识别结果
  function browser() {
    return ["ie: " + isIE, "edge: " + isEdge, "chrome: " + isChrome].join(", ");
  }

  // 随机数
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 加载图片
  function loadImg(src, callback) {
    var img = document.createElement("img");
    img.src = src;
    img.onload = function () {
      callback && callback(img);
    };
  }

  // 使用 background 显示图片
  function createBackgroudImg(src, callback) {
    loadImg(src, function (img) {
      var div = document.createElement("div");
      div.style.width = img.width + "px";
      div.style.height = img.height + "px";
      div.style.background = "url(" + src + ")";
      callback && callback(div);
    });
  }

  // 创建一个有随机数的节点
  function createRandomTextElement() {
    var div = document.createElement("div");
    div.innerText = "random: " + getRandomInt(1000, 9999);
    return div;
  }

  // 插件变量
  var library = {
    isIE: isIE,
    isEdge: isEdge,
    isChrome: isChrome,
    browser: browser,
    getRandomInt: getRandomInt,
    createBackgroudImg: createBackgroudImg,
    createRandomTextElement: createRandomTextElement,
    // ...
  };

  // 绑定在传入的 window 上
  window.library = library;
})(window);
