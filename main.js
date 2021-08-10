/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Material+Icons+Outlined);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbutton {\n    display: flex;\n    align-items: center;;\n    height: 40px;\n    border: 0;\n    border-radius: 8px;\n    cursor: pointer;\n    transition-duration: 0.4s;\n}\n\n.material-icons-outlined {\n    margin-right: 5px;\n}\n\n.topnav-container {\n    width: 100vw;\n    height: 60px;\n    background-color: bisque;\n    background-color: lightcyan;\n    font-size: 48px;\n    padding-left: 20px;\n}\n\n.topnav-container .material-icons-outlined {\n    font-size: 48px;\n}\n\n.sidebar-container {\n    display: block;\n    box-sizing: border-box;\n    position: fixed;\n    width: 200px;\n    height: calc(100vh - 90px);\n    background-color: cornflowerblue;\n    z-index: 1;\n    overflow-x: hidden;\n    padding: 10px 10px;\n}\n\n.sidebar-container button {\n    width: 100%;\n    margin: 10px auto;\n    font-size: 1em;\n    padding-left: 10px;\n    background: lightblue;\n}\n\n.sidebar-container button:hover {\n    background-color: lightcyan;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    width: calc(100vw - 200px);\n    height: calc(100vh - 80px);\n    margin-left: 200px;\n    background-color: skyblue;\n    padding: 20px;\n}\n\n.main-header {\n    display: flex;\n    align-items: center;\n    margin: 5px;\n    font-size: 24px;\n}\n\n.main-header button {\n    width: auto;\n    margin-left: auto;\n    font-size: 0.8em;\n    padding: 0 10px;\n    background: lightcoral;\n}\n\n.main-header button:hover {\n    background-color: tomato;\n}\n\n.add-task-overlay {\n    display: none;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,0.4);\n    z-index: 2;\n}\n\n.add-task-container {\n    display: none;\n    position: fixed;\n    top: 10%;\n    left: 40%;\n    width: 30vw;\n    padding: 20px;\n    border-radius: 8px;\n    background-color: lightsteelblue;\n    font-size: 18px;\n    z-index: 3;\n}\n\n.add-task-container input {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid black;\n    background-color: transparent;\n    margin: 10px 0;\n    font-size: 18px;\n    outline: none;\n}\n\n.add-task-container textarea {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid black;\n    background-color: transparent;\n    margin: 10px 0;\n    font-size: 18px;\n    resize: none;\n    outline: none;\n}\n\n.add-task-container button {\n    width: 150px;\n    margin: 10px auto;\n    font-size: 1em;\n    padding-left: 10px;\n    background: lightseagreen;\n}\n\n.add-task-container button:hover {\n    background-color: lightgreen;\n}\n\n.task {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n    margin: 5px;\n    background-color: lightcyan;\n    padding: 8px 15px 8px 25px;\n    transition-duration: 0.4s;\n    border-radius: 8px;\n    user-select: none;\n}\n\n.task:hover {\n    background-color: lightyellow;\n}\n\n.task-completed {\n    background-color: lightsalmon;\n}\n\n.line-through {\n    text-decoration: line-through;\n}\n\n.task-left {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-left i {\n    margin-right: 10px;\n}\n\n.task-left i:hover {\n    background-color: lightpink;\n    border-radius: 50%;\n}\n\n.task-right {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-right i {\n    margin-left: 10px;\n    border-radius: 8px;\n    padding: 2px;\n}\n\n.task-right i:hover {\n    background-color: lightpink;\n}\n\n.task-details {\n    display: none;\n    width: 100%;\n}\n\n.task-details p {\n    padding-left: 5px;\n    color: grey;\n}\n\n.show-div {\n    display: block;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    bottom: 0;\n    width: 100vw;\n    height: 30px;\n    background-color: yellowgreen;\n    background-color: lightcyan;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,iCAAiC;IACjC,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,wBAAwB;IACxB,2BAA2B;IAC3B,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,eAAe;IACf,YAAY;IACZ,0BAA0B;IAC1B,gCAAgC;IAChC,UAAU;IACV,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,0BAA0B;IAC1B,0BAA0B;IAC1B,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,2BAA2B;IAC3B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,eAAe;IACf,QAAQ;IACR,SAAS;IACT,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,gCAAgC;IAChC,eAAe;IACf,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,6BAA6B;IAC7B,cAAc;IACd,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,6BAA6B;IAC7B,cAAc;IACd,eAAe;IACf,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,2BAA2B;IAC3B,0BAA0B;IAC1B,yBAAyB;IACzB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,6BAA6B;IAC7B,2BAA2B;AAC/B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Material+Icons+Outlined');\n\n* {\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbutton {\n    display: flex;\n    align-items: center;;\n    height: 40px;\n    border: 0;\n    border-radius: 8px;\n    cursor: pointer;\n    transition-duration: 0.4s;\n}\n\n.material-icons-outlined {\n    margin-right: 5px;\n}\n\n.topnav-container {\n    width: 100vw;\n    height: 60px;\n    background-color: bisque;\n    background-color: lightcyan;\n    font-size: 48px;\n    padding-left: 20px;\n}\n\n.topnav-container .material-icons-outlined {\n    font-size: 48px;\n}\n\n.sidebar-container {\n    display: block;\n    box-sizing: border-box;\n    position: fixed;\n    width: 200px;\n    height: calc(100vh - 90px);\n    background-color: cornflowerblue;\n    z-index: 1;\n    overflow-x: hidden;\n    padding: 10px 10px;\n}\n\n.sidebar-container button {\n    width: 100%;\n    margin: 10px auto;\n    font-size: 1em;\n    padding-left: 10px;\n    background: lightblue;\n}\n\n.sidebar-container button:hover {\n    background-color: lightcyan;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    width: calc(100vw - 200px);\n    height: calc(100vh - 80px);\n    margin-left: 200px;\n    background-color: skyblue;\n    padding: 20px;\n}\n\n.main-header {\n    display: flex;\n    align-items: center;\n    margin: 5px;\n    font-size: 24px;\n}\n\n.main-header button {\n    width: auto;\n    margin-left: auto;\n    font-size: 0.8em;\n    padding: 0 10px;\n    background: lightcoral;\n}\n\n.main-header button:hover {\n    background-color: tomato;\n}\n\n.add-task-overlay {\n    display: none;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,0.4);\n    z-index: 2;\n}\n\n.add-task-container {\n    display: none;\n    position: fixed;\n    top: 10%;\n    left: 40%;\n    width: 30vw;\n    padding: 20px;\n    border-radius: 8px;\n    background-color: lightsteelblue;\n    font-size: 18px;\n    z-index: 3;\n}\n\n.add-task-container input {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid black;\n    background-color: transparent;\n    margin: 10px 0;\n    font-size: 18px;\n    outline: none;\n}\n\n.add-task-container textarea {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid black;\n    background-color: transparent;\n    margin: 10px 0;\n    font-size: 18px;\n    resize: none;\n    outline: none;\n}\n\n.add-task-container button {\n    width: 150px;\n    margin: 10px auto;\n    font-size: 1em;\n    padding-left: 10px;\n    background: lightseagreen;\n}\n\n.add-task-container button:hover {\n    background-color: lightgreen;\n}\n\n.task {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n    margin: 5px;\n    background-color: lightcyan;\n    padding: 8px 15px 8px 25px;\n    transition-duration: 0.4s;\n    border-radius: 8px;\n    user-select: none;\n}\n\n.task:hover {\n    background-color: lightyellow;\n}\n\n.task-completed {\n    background-color: lightsalmon;\n}\n\n.line-through {\n    text-decoration: line-through;\n}\n\n.task-left {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-left i {\n    margin-right: 10px;\n}\n\n.task-left i:hover {\n    background-color: lightpink;\n    border-radius: 50%;\n}\n\n.task-right {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-right i {\n    margin-left: 10px;\n    border-radius: 8px;\n    padding: 2px;\n}\n\n.task-right i:hover {\n    background-color: lightpink;\n}\n\n.task-details {\n    display: none;\n    width: 100%;\n}\n\n.task-details p {\n    padding-left: 5px;\n    color: grey;\n}\n\n.show-div {\n    display: block;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    bottom: 0;\n    width: 100vw;\n    height: 30px;\n    background-color: yellowgreen;\n    background-color: lightcyan;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$container": () => (/* binding */ $container),
/* harmony export */   "createIcon": () => (/* binding */ createIcon),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createInput": () => (/* binding */ createInput),
/* harmony export */   "$user": () => (/* binding */ $user),
/* harmony export */   "$addTaskOverlay": () => (/* binding */ $addTaskOverlay),
/* harmony export */   "$addTaskContainer": () => (/* binding */ $addTaskContainer),
/* harmony export */   "$taskListContainer": () => (/* binding */ $taskListContainer),
/* harmony export */   "$taskName": () => (/* binding */ $taskName),
/* harmony export */   "$taskDesc": () => (/* binding */ $taskDesc),
/* harmony export */   "$taskDate": () => (/* binding */ $taskDate)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/user */ "./src/modules/user.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");





var createContainer = document.createElement('div');
createContainer.id = 'container';
document.body.appendChild(createContainer);

const $container = document.getElementById('container');

function createIcon(name, id) {
    var newIcon = document.createElement('i');
    newIcon.classList.add('material-icons-outlined');
    newIcon.textContent = name;

    if (id!==null) {
        newIcon.id = id
    }

    return newIcon
}

function createElement(type,classes,id,icon,text) {
    var tempElement = document.createElement(type)
    if (classes!==null) {
        tempElement.classList.add(classes)
    }
    if (id!==null) {
        tempElement.id = id
    }
    if (icon!==null) {
        var tempIcon = createIcon(icon)
        tempElement.append(tempIcon)
    }
    if (text!==null) {
        tempElement.innerHTML += text
    }

    return tempElement
}

function createInput(type, inputType, id, inputName, inputPlaceholder, inputValue, inputFor, text) {
    var tempInput = document.createElement(type)
    if (inputType!==null) {
        tempInput.setAttribute('type',inputType)
    }
    if (id!==null) {
        tempInput.id = id
    }
    if (inputName!==null) {
        tempInput.setAttribute("name",inputName)
    }
    if (inputPlaceholder!==null) {
        tempInput.setAttribute("placeholder", inputPlaceholder)
    }
    if (inputValue!==null) {
        tempInput.setAttribute("value", inputValue)
    }
    if (inputFor!==null) {
        tempInput.setAttribute("for", inputFor)
    }
    if (text!== null) {
        tempInput.innerHTML = text
    }

    return tempInput
}


const $user = new _modules_user__WEBPACK_IMPORTED_MODULE_1__.User

var tempTask = new _modules_task__WEBPACK_IMPORTED_MODULE_2__.Task('temp title','temp description','2021-07-23',false)
$user.addTask(tempTask)

;(0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.renderNav)();
(0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.renderSidebar)();
(0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.renderTasks)();
(0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();


window.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.id === 'add-new-task' || e.target.id === 'add-task-overlay') {
        (0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.toggleAddTask)()
    }
    if (e.target.id === 'add-task') {
        (0,_modules_task__WEBPACK_IMPORTED_MODULE_2__.addTask)()
        ;(0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.renderTaskList)()
    }
    if (Number.parseInt(e.target.id)!==NaN) {
        (0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.toggleTaskDescription)(Number.parseInt(e.target.id))
    }
})

const $addTaskOverlay = document.getElementsByClassName('add-task-overlay')
const $addTaskContainer= document.getElementsByClassName('add-task-container')
const $taskListContainer = document.getElementById('task-list-container')
const $taskName = document.getElementById('task-name')
const $taskDesc = document.getElementById('task-desc')
const $taskDate = document.getElementById('task-date')

// renderTaskList()



/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTask": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../index */ "./src/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './main-container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



class Task {
    constructor(title,description,date,status) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
    }

    updateStatus() {
        if (this.status === false) {
            this.status = true
        } else {
            this.status = false
        }
    }
}

function addTask() {
    if (_index__WEBPACK_IMPORTED_MODULE_0__.$taskName.value === "") {
        alert('Task Name is required')
    } else {
        var tempTask = new Task(_index__WEBPACK_IMPORTED_MODULE_0__.$taskName.value, _index__WEBPACK_IMPORTED_MODULE_0__.$taskDesc.value, _index__WEBPACK_IMPORTED_MODULE_0__.$taskDate.value, false)
        _index__WEBPACK_IMPORTED_MODULE_0__.$user.addTask(tempTask)
        
        _index__WEBPACK_IMPORTED_MODULE_0__.$taskName.value = "";
        _index__WEBPACK_IMPORTED_MODULE_0__.$taskDesc.value = "";
        _index__WEBPACK_IMPORTED_MODULE_0__.$taskDate.value = "2021-07-31"
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './main-container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
    }
}



/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ renderNav),
/* harmony export */   "renderFooter": () => (/* binding */ renderFooter),
/* harmony export */   "renderSidebar": () => (/* binding */ renderSidebar),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "renderTaskList": () => (/* binding */ renderTaskList),
/* harmony export */   "toggleAddTask": () => (/* binding */ toggleAddTask),
/* harmony export */   "toggleTaskDescription": () => (/* binding */ toggleTaskDescription)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");


const defaultMenu = [
    {icon:"home", text:"Inbox", id:"inbox"},
    {icon:"event", text:"Today", id:"today"},
    {icon:"date_range", text:"This Week", id:"this-week"},
]

function renderNav() {
    var nav = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','topnav-container',null,'done_outline','To-Do List')
    _index_js__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild(nav)
}

function renderFooter() {
    var footer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','footer',null,null,'Created by Hewny')
    _index_js__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild(footer)
}

function renderSidebar() {
    var sidebar = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','sidebar-container',null,null,null)

    defaultMenu.forEach ((menu) => {
        var tempMenu = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button',null,menu.id,menu.icon,menu.text)
        sidebar.appendChild(tempMenu)
    })

    var tempBar = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2',null,null,null,'Projects')
    sidebar.appendChild(tempBar)

    var tempBar2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button',null,'add-new-project','add','Add new Project')
    sidebar.appendChild(tempBar2)

    _index_js__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild(sidebar)
}

function renderTasks() {
    var mainContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','main-container',null,null,null)

    mainContainer.appendChild(_createAddTaskOverlay())
    mainContainer.appendChild(_createAddTaskContainer())
    mainContainer.appendChild(_createMainHeader())
    mainContainer.appendChild(_createTaskListContainer())

    _index_js__WEBPACK_IMPORTED_MODULE_0__.$container.appendChild(mainContainer)
}

function _createAddTaskOverlay() {
    var addTaskOverlay = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','add-task-overlay','add-task-overlay',null,null)
    return addTaskOverlay
}

function _createAddTaskContainer() {
    var addTaskContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','add-task-container',null,null,null)

    addTaskContainer.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('label',null,null,null,null,null,'task-name','Name:*'))
    addTaskContainer.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('input','text','task-name','task-name',"eg. Clean my room",null,null))
    addTaskContainer.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('label',null,null,null,null,null,'task-desc','Details:'))
    addTaskContainer.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('textarea','text','task-desc','task-desc',"eg. Vacuum floor and change bedsheets",null,null,null))
    addTaskContainer.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('label',null,null,null,null,null,'task-date','Due Date:'))
    addTaskContainer.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('input','date','task-date','task-date',null,"2021-07-31",null,null))
    addTaskContainer.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button',null,'add-task','add','Add Task'))

    return addTaskContainer
}

function _createTaskListContainer() {
    var taskListContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','task-list-container','task-list-container',null,null)

    return taskListContainer
}

function _createMainHeader() {
    var mainHeader = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','main-header',null,null,null)
    mainHeader.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3',null,null,null,'Inbox'))
    mainHeader.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button',null,'add-new-task','add','Add new task'))

    return mainHeader
}

function renderTaskList() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.$taskListContainer.innerHTML = ""

    for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.$user.tasks.length; i++) {
        var task = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','task',i,null,null)
        var taskLeft = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','task-left',null,null,null)
        var taskRight = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','task-right',null,null,null)
        var taskDetails = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','task-details',null,null,null)

        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.$user.tasks[i].status === true) {
            taskLeft.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createIcon)('check_circle',i))
        } else {
            taskLeft.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createIcon)('radio_button_unchecked',i))
        }
        taskLeft.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',null,i,null,_index_js__WEBPACK_IMPORTED_MODULE_0__.$user.tasks[i].title))
        taskRight.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',null,i,null,_index_js__WEBPACK_IMPORTED_MODULE_0__.$user.tasks[i].date))
        taskRight.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createIcon)('delete',i))
        taskDetails.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',null,i,null,_index_js__WEBPACK_IMPORTED_MODULE_0__.$user.tasks[i].description))
        
        task.appendChild(taskLeft)
        task.appendChild(taskRight)
        task.appendChild(taskDetails)

        _index_js__WEBPACK_IMPORTED_MODULE_0__.$taskListContainer.appendChild(task)
    }
}

function toggleAddTask() {
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.$addTaskOverlay[0].classList.contains('show-div')) {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.$addTaskOverlay[0].classList.remove('show-div')
        _index_js__WEBPACK_IMPORTED_MODULE_0__.$addTaskContainer[0].classList.remove('show-div')
    } else {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.$addTaskOverlay[0].classList.add('show-div')
        _index_js__WEBPACK_IMPORTED_MODULE_0__.$addTaskContainer[0].classList.add('show-div')
    }
}

function toggleTaskDescription(index) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.$user.tasks[index].updateStatus()
    renderTaskList()
}




/***/ }),

/***/ "./src/modules/user.js":
/*!*****************************!*\
  !*** ./src/modules/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor() {
        this.tasks = []
        this.projects = []
    }

    addTask(obj) {
        this.tasks.push(obj)
    }

    removeTask(index) {
        this.tasks.splice(index,1)
    }

    addProject(name) {
        this.projects.push(name)
    }

    removeProject(index) {
        this.projects.splice(index,1)
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWQpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4udG9wbmF2LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50b3BuYXYtY29udGFpbmVyIC5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5tYWluLWhlYWRlciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XFxufVxcblxcbi5hZGQtdGFzay1vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC40KTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzay1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzay1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG4gICAgcGFkZGluZzogOHB4IDE1cHggOHB4IDI1cHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xcbn1cXG5cXG4ubGluZS10aHJvdWdoIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stbGVmdCBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGFzay1sZWZ0IGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2stcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stcmlnaHQgaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLnRhc2stcmlnaHQgaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG59XFxuXFxuLnRhc2stZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5zaG93LWRpdiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXRlcmlhbCtJY29ucytPdXRsaW5lZCcpO1xcblxcbioge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjs7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi50b3BuYXYtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnRvcG5hdi1jb250YWluZXIgLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDkwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciBidXR0b24ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcXG59XFxuXFxuLm1haW4taGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG59XFxuXFxuLmFkZC10YXNrLW92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGFpbmVyIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNlYWdyZWVuO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbiAgICBwYWRkaW5nOiA4cHggMTVweCA4cHggMjVweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcXG59XFxuXFxuLnRhc2stY29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XFxufVxcblxcbi5saW5lLXRocm91Z2gge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1sZWZ0IGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50YXNrLWxlZnQgaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1yaWdodCBpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4udGFzay1yaWdodCBpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWRldGFpbHMgcCB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnNob3ctZGl2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9tb2R1bGVzL3VzZXInO1xuaW1wb3J0IHsgYWRkVGFzaywgVGFzayB9IGZyb20gJy4vbW9kdWxlcy90YXNrJztcbmltcG9ydCB7IHJlbmRlck5hdiwgcmVuZGVyRm9vdGVyLCByZW5kZXJTaWRlYmFyLCByZW5kZXJUYXNrcywgcmVuZGVyVGFza0xpc3QsIHRvZ2dsZUFkZFRhc2ssIHRvZ2dsZVRhc2tEZXNjcmlwdGlvbiB9IGZyb20gJy4vbW9kdWxlcy91aSc7XG5cbnZhciBjcmVhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNyZWF0ZUNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250YWluZXIpO1xuXG5jb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBjcmVhdGVJY29uKG5hbWUsIGlkKSB7XG4gICAgdmFyIG5ld0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbmV3SWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCcpO1xuICAgIG5ld0ljb24udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgaWYgKGlkIT09bnVsbCkge1xuICAgICAgICBuZXdJY29uLmlkID0gaWRcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3SWNvblxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsY2xhc3NlcyxpZCxpY29uLHRleHQpIHtcbiAgICB2YXIgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgaWYgKGNsYXNzZXMhPT1udWxsKSB7XG4gICAgICAgIHRlbXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NlcylcbiAgICB9XG4gICAgaWYgKGlkIT09bnVsbCkge1xuICAgICAgICB0ZW1wRWxlbWVudC5pZCA9IGlkXG4gICAgfVxuICAgIGlmIChpY29uIT09bnVsbCkge1xuICAgICAgICB2YXIgdGVtcEljb24gPSBjcmVhdGVJY29uKGljb24pXG4gICAgICAgIHRlbXBFbGVtZW50LmFwcGVuZCh0ZW1wSWNvbilcbiAgICB9XG4gICAgaWYgKHRleHQhPT1udWxsKSB7XG4gICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCArPSB0ZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KHR5cGUsIGlucHV0VHlwZSwgaWQsIGlucHV0TmFtZSwgaW5wdXRQbGFjZWhvbGRlciwgaW5wdXRWYWx1ZSwgaW5wdXRGb3IsIHRleHQpIHtcbiAgICB2YXIgdGVtcElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICAgIGlmIChpbnB1dFR5cGUhPT1udWxsKSB7XG4gICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLGlucHV0VHlwZSlcbiAgICB9XG4gICAgaWYgKGlkIT09bnVsbCkge1xuICAgICAgICB0ZW1wSW5wdXQuaWQgPSBpZFxuICAgIH1cbiAgICBpZiAoaW5wdXROYW1lIT09bnVsbCkge1xuICAgICAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLGlucHV0TmFtZSlcbiAgICB9XG4gICAgaWYgKGlucHV0UGxhY2Vob2xkZXIhPT1udWxsKSB7XG4gICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpbnB1dFBsYWNlaG9sZGVyKVxuICAgIH1cbiAgICBpZiAoaW5wdXRWYWx1ZSE9PW51bGwpIHtcbiAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGlucHV0VmFsdWUpXG4gICAgfVxuICAgIGlmIChpbnB1dEZvciE9PW51bGwpIHtcbiAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dEZvcilcbiAgICB9XG4gICAgaWYgKHRleHQhPT0gbnVsbCkge1xuICAgICAgICB0ZW1wSW5wdXQuaW5uZXJIVE1MID0gdGV4dFxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wSW5wdXRcbn1cblxuXG5jb25zdCAkdXNlciA9IG5ldyBVc2VyXG5cbnZhciB0ZW1wVGFzayA9IG5ldyBUYXNrKCd0ZW1wIHRpdGxlJywndGVtcCBkZXNjcmlwdGlvbicsJzIwMjEtMDctMjMnLGZhbHNlKVxuJHVzZXIuYWRkVGFzayh0ZW1wVGFzaylcblxucmVuZGVyTmF2KCk7XG5yZW5kZXJTaWRlYmFyKCk7XG5yZW5kZXJUYXNrcygpO1xucmVuZGVyRm9vdGVyKCk7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdhZGQtbmV3LXRhc2snIHx8IGUudGFyZ2V0LmlkID09PSAnYWRkLXRhc2stb3ZlcmxheScpIHtcbiAgICAgICAgdG9nZ2xlQWRkVGFzaygpXG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2FkZC10YXNrJykge1xuICAgICAgICBhZGRUYXNrKClcbiAgICAgICAgcmVuZGVyVGFza0xpc3QoKVxuICAgIH1cbiAgICBpZiAoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LmlkKSE9PU5hTikge1xuICAgICAgICB0b2dnbGVUYXNrRGVzY3JpcHRpb24oTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LmlkKSlcbiAgICB9XG59KVxuXG5jb25zdCAkYWRkVGFza092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGQtdGFzay1vdmVybGF5JylcbmNvbnN0ICRhZGRUYXNrQ29udGFpbmVyPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGQtdGFzay1jb250YWluZXInKVxuY29uc3QgJHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdC1jb250YWluZXInKVxuY29uc3QgJHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpXG5jb25zdCAkdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjJylcbmNvbnN0ICR0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUnKVxuXG4vLyByZW5kZXJUYXNrTGlzdCgpXG5cbmV4cG9ydCB7JGNvbnRhaW5lciwgY3JlYXRlSWNvbiwgY3JlYXRlRWxlbWVudCwgY3JlYXRlSW5wdXQsICR1c2VyLCAkYWRkVGFza092ZXJsYXksICRhZGRUYXNrQ29udGFpbmVyLCAkdGFza0xpc3RDb250YWluZXIsICR0YXNrTmFtZSwgJHRhc2tEZXNjLCAkdGFza0RhdGV9IiwiaW1wb3J0IHskdGFza05hbWUsICR0YXNrRGVzYywgJHRhc2tEYXRlLCAkdXNlcn0gZnJvbSBcIi4vLi4vaW5kZXhcIjtcbmltcG9ydCB7IHRvZ2dsZUFkZFRhc2sgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lclwiO1xuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkYXRlLHN0YXR1cykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdHVzKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBpZiAoJHRhc2tOYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KCdUYXNrIE5hbWUgaXMgcmVxdWlyZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0ZW1wVGFzayA9IG5ldyBUYXNrKCR0YXNrTmFtZS52YWx1ZSwgJHRhc2tEZXNjLnZhbHVlLCAkdGFza0RhdGUudmFsdWUsIGZhbHNlKVxuICAgICAgICAkdXNlci5hZGRUYXNrKHRlbXBUYXNrKVxuICAgICAgICBcbiAgICAgICAgJHRhc2tOYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgJHRhc2tEZXNjLnZhbHVlID0gXCJcIjtcbiAgICAgICAgJHRhc2tEYXRlLnZhbHVlID0gXCIyMDIxLTA3LTMxXCJcbiAgICAgICAgdG9nZ2xlQWRkVGFzaygpXG4gICAgfVxufVxuXG5leHBvcnQge1Rhc2ssIGFkZFRhc2t9IiwiaW1wb3J0IHsgJGNvbnRhaW5lciwgY3JlYXRlRWxlbWVudCwgY3JlYXRlSW5wdXQsIGNyZWF0ZUljb24sICR1c2VyLCAkdGFza0xpc3RDb250YWluZXIsICRhZGRUYXNrT3ZlcmxheSwgJGFkZFRhc2tDb250YWluZXIgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcblxuY29uc3QgZGVmYXVsdE1lbnUgPSBbXG4gICAge2ljb246XCJob21lXCIsIHRleHQ6XCJJbmJveFwiLCBpZDpcImluYm94XCJ9LFxuICAgIHtpY29uOlwiZXZlbnRcIiwgdGV4dDpcIlRvZGF5XCIsIGlkOlwidG9kYXlcIn0sXG4gICAge2ljb246XCJkYXRlX3JhbmdlXCIsIHRleHQ6XCJUaGlzIFdlZWtcIiwgaWQ6XCJ0aGlzLXdlZWtcIn0sXG5dXG5cbmZ1bmN0aW9uIHJlbmRlck5hdigpIHtcbiAgICB2YXIgbmF2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywndG9wbmF2LWNvbnRhaW5lcicsbnVsbCwnZG9uZV9vdXRsaW5lJywnVG8tRG8gTGlzdCcpXG4gICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpXG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcbiAgICB2YXIgZm9vdGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZm9vdGVyJyxudWxsLG51bGwsJ0NyZWF0ZWQgYnkgSGV3bnknKVxuICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKVxufVxuXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyKCkge1xuICAgIHZhciBzaWRlYmFyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywnc2lkZWJhci1jb250YWluZXInLG51bGwsbnVsbCxudWxsKVxuXG4gICAgZGVmYXVsdE1lbnUuZm9yRWFjaCAoKG1lbnUpID0+IHtcbiAgICAgICAgdmFyIHRlbXBNZW51ID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyxudWxsLG1lbnUuaWQsbWVudS5pY29uLG1lbnUudGV4dClcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0ZW1wTWVudSlcbiAgICB9KVxuXG4gICAgdmFyIHRlbXBCYXIgPSBjcmVhdGVFbGVtZW50KCdoMicsbnVsbCxudWxsLG51bGwsJ1Byb2plY3RzJylcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRlbXBCYXIpXG5cbiAgICB2YXIgdGVtcEJhcjIgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLG51bGwsJ2FkZC1uZXctcHJvamVjdCcsJ2FkZCcsJ0FkZCBuZXcgUHJvamVjdCcpXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0ZW1wQmFyMilcblxuICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcilcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gICAgdmFyIG1haW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdtYWluLWNvbnRhaW5lcicsbnVsbCxudWxsLG51bGwpXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVBZGRUYXNrT3ZlcmxheSgpKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZUFkZFRhc2tDb250YWluZXIoKSlcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVNYWluSGVhZGVyKCkpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlVGFza0xpc3RDb250YWluZXIoKSlcblxuICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUFkZFRhc2tPdmVybGF5KCkge1xuICAgIHZhciBhZGRUYXNrT3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2FkZC10YXNrLW92ZXJsYXknLCdhZGQtdGFzay1vdmVybGF5JyxudWxsLG51bGwpXG4gICAgcmV0dXJuIGFkZFRhc2tPdmVybGF5XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVBZGRUYXNrQ29udGFpbmVyKCkge1xuICAgIHZhciBhZGRUYXNrQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywnYWRkLXRhc2stY29udGFpbmVyJyxudWxsLG51bGwsbnVsbClcblxuICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoJ2xhYmVsJyxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsJ3Rhc2stbmFtZScsJ05hbWU6KicpKVxuICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoJ2lucHV0JywndGV4dCcsJ3Rhc2stbmFtZScsJ3Rhc2stbmFtZScsXCJlZy4gQ2xlYW4gbXkgcm9vbVwiLG51bGwsbnVsbCkpXG4gICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dCgnbGFiZWwnLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwndGFzay1kZXNjJywnRGV0YWlsczonKSlcbiAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KCd0ZXh0YXJlYScsJ3RleHQnLCd0YXNrLWRlc2MnLCd0YXNrLWRlc2MnLFwiZWcuIFZhY3V1bSBmbG9vciBhbmQgY2hhbmdlIGJlZHNoZWV0c1wiLG51bGwsbnVsbCxudWxsKSlcbiAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KCdsYWJlbCcsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCd0YXNrLWRhdGUnLCdEdWUgRGF0ZTonKSlcbiAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KCdpbnB1dCcsJ2RhdGUnLCd0YXNrLWRhdGUnLCd0YXNrLWRhdGUnLG51bGwsXCIyMDIxLTA3LTMxXCIsbnVsbCxudWxsKSlcbiAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsbnVsbCwnYWRkLXRhc2snLCdhZGQnLCdBZGQgVGFzaycpKVxuXG4gICAgcmV0dXJuIGFkZFRhc2tDb250YWluZXJcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVRhc2tMaXN0Q29udGFpbmVyKCkge1xuICAgIHZhciB0YXNrTGlzdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ3Rhc2stbGlzdC1jb250YWluZXInLCd0YXNrLWxpc3QtY29udGFpbmVyJyxudWxsLG51bGwpXG5cbiAgICByZXR1cm4gdGFza0xpc3RDb250YWluZXJcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZU1haW5IZWFkZXIoKSB7XG4gICAgdmFyIG1haW5IZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdtYWluLWhlYWRlcicsbnVsbCxudWxsLG51bGwpXG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMycsbnVsbCxudWxsLG51bGwsJ0luYm94JykpXG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdidXR0b24nLG51bGwsJ2FkZC1uZXctdGFzaycsJ2FkZCcsJ0FkZCBuZXcgdGFzaycpKVxuXG4gICAgcmV0dXJuIG1haW5IZWFkZXJcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza0xpc3QoKSB7XG4gICAgJHRhc2tMaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcblxuICAgIGZvciAobGV0IGk9MDsgaTwkdXNlci50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdGFzayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ3Rhc2snLGksbnVsbCxudWxsKVxuICAgICAgICB2YXIgdGFza0xlZnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCd0YXNrLWxlZnQnLG51bGwsbnVsbCxudWxsKVxuICAgICAgICB2YXIgdGFza1JpZ2h0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywndGFzay1yaWdodCcsbnVsbCxudWxsLG51bGwpXG4gICAgICAgIHZhciB0YXNrRGV0YWlscyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ3Rhc2stZGV0YWlscycsbnVsbCxudWxsLG51bGwpXG5cbiAgICAgICAgaWYgKCR1c2VyLnRhc2tzW2ldLnN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFza0xlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlSWNvbignY2hlY2tfY2lyY2xlJyxpKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZUljb24oJ3JhZGlvX2J1dHRvbl91bmNoZWNrZWQnLGkpKVxuICAgICAgICB9XG4gICAgICAgIHRhc2tMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLG51bGwsaSxudWxsLCR1c2VyLnRhc2tzW2ldLnRpdGxlKSlcbiAgICAgICAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLG51bGwsaSxudWxsLCR1c2VyLnRhc2tzW2ldLmRhdGUpKVxuICAgICAgICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlSWNvbignZGVsZXRlJyxpKSlcbiAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsbnVsbCxpLG51bGwsJHVzZXIudGFza3NbaV0uZGVzY3JpcHRpb24pKVxuICAgICAgICBcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrTGVmdClcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrUmlnaHQpXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpXG5cbiAgICAgICAgJHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVBZGRUYXNrKCkge1xuICAgIGlmICgkYWRkVGFza092ZXJsYXlbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93LWRpdicpKSB7XG4gICAgICAgICRhZGRUYXNrT3ZlcmxheVswXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWRpdicpXG4gICAgICAgICRhZGRUYXNrQ29udGFpbmVyWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctZGl2JylcbiAgICB9IGVsc2Uge1xuICAgICAgICAkYWRkVGFza092ZXJsYXlbMF0uY2xhc3NMaXN0LmFkZCgnc2hvdy1kaXYnKVxuICAgICAgICAkYWRkVGFza0NvbnRhaW5lclswXS5jbGFzc0xpc3QuYWRkKCdzaG93LWRpdicpXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrRGVzY3JpcHRpb24oaW5kZXgpIHtcbiAgICAkdXNlci50YXNrc1tpbmRleF0udXBkYXRlU3RhdHVzKClcbiAgICByZW5kZXJUYXNrTGlzdCgpXG59XG5cblxuZXhwb3J0IHtyZW5kZXJOYXYsIHJlbmRlckZvb3RlciwgcmVuZGVyU2lkZWJhciwgcmVuZGVyVGFza3MsIHJlbmRlclRhc2tMaXN0LCB0b2dnbGVBZGRUYXNrLCB0b2dnbGVUYXNrRGVzY3JpcHRpb259IiwiY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cbiAgICB9XG5cbiAgICBhZGRUYXNrKG9iaikge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gob2JqKVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsMSlcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5hbWUpXG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwxKVxuICAgIH1cbn1cblxuZXhwb3J0IHtVc2VyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==