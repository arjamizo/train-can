function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var __OD_globalLibs = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in __OD_globalLibs) {
      var init = __OD_globalLibs[id];
      delete __OD_globalLibs[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    __OD_globalLibs[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}
__OD_globalLibs["1fIXX"] = (function(module, exports) {
module.exports = {
    log (msg) {
        document.body.appendChild(Object.assign(document.createElement("div"), {
            innerHTML: msg
        }));
    }
};});
__OD_globalLibs["3agZH"] = (function(module, exports) {
$parcel$export(module.exports, "init", () => $24df7cf9a9aae5a2$export$2cd8252107eb640b);
function $24df7cf9a9aae5a2$export$2cd8252107eb640b(msg) {
    console.info(msg);
}
});
var $1fIXX = parcelRequire("1fIXX");
// console.log('SHOULD BE REMOVED IN MINIFY')
(parcelRequire("3agZH")).init("init0");
$1fIXX.log("BOOT TRAIN");
(0, $1fIXX.log)("Train stopped");
//# sourceMappingURL=train-can.40c18416.js.map
