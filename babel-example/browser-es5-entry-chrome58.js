"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browser = browser;

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.async-iterator.js");

require("core-js/modules/es.array.flat.js");

require("core-js/modules/es.array.flat-map.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.reduce-right.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.array.unscopables.flat.js");

require("core-js/modules/es.array.unscopables.flat-map.js");

require("core-js/modules/es.math.hypot.js");

require("core-js/modules/es.object.define-getter.js");

require("core-js/modules/es.object.define-setter.js");

require("core-js/modules/es.object.from-entries.js");

require("core-js/modules/es.object.lookup-getter.js");

require("core-js/modules/es.object.lookup-setter.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.flags.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.string.trim-end.js");

require("core-js/modules/es.string.trim-start.js");

require("core-js/modules/es.typed-array.sort.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.immediate.js");

require("core-js/modules/web.queue-microtask.js");

require("core-js/modules/web.url.js");

require("core-js/modules/web.url.to-json.js");

require("core-js/modules/web.url-search-params.js");

const inBrowser = typeof window !== "undefined";
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /msie|trident/.test(UA);
const isEdge = UA && UA.includes("edg/");
const isChrome = UA && UA.includes("chrome") && !isEdge;

function browser() {
  return [`ie: ${isIE}`, `edge: ${isEdge}`, `chrome: ${isChrome}`].join(", ");
}