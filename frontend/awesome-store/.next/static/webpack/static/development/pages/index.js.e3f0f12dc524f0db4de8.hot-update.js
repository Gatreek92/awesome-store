webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./node_modules/react/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  

/***/ }),

/***/ "dll-reference dll_4860ad6bdcb3d0b7914c":
false

})
//# sourceMappingURL=index.js.e3f0f12dc524f0db4de8.hot-update.js.map