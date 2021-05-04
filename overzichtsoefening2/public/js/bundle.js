/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cargo_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cargo/Container */ \"./src/js/cargo/Container.js\");\n/* harmony import */ var _cargo_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cargo/Product */ \"./src/js/cargo/Product.js\");\n\n\n\n\n\ntry {\n  var product1 = new _cargo_Product__WEBPACK_IMPORTED_MODULE_1__.default(1, 200);\n  var product2 = new _cargo_Product__WEBPACK_IMPORTED_MODULE_1__.default(2, 100);\n  var product3 = new _cargo_Product__WEBPACK_IMPORTED_MODULE_1__.default(3, 400);\n  var container = new _cargo_Container__WEBPACK_IMPORTED_MODULE_0__.default(700);\n  container.addProduct(product1);\n  container.addProduct(product2);\n  console.log(container.getProductAtIndex(1).weight);\n  container.addProduct(product3);\n} catch (error) {\n  console.log(error.message);\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/cargo/Container.js":
/*!***********************************!*\
  !*** ./src/js/cargo/Container.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ \"./src/js/cargo/Product.js\");\n // naam:\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Container = /*#__PURE__*/function () {\n  function Container(maxWeight) {\n    _classCallCheck(this, Container);\n\n    if (typeof maxWeight != 'number' || maxWeight <= 0) {\n      throw new Error('maxWeight must be a number greater than 0!');\n    }\n\n    this._maxWeight = maxWeight;\n    this._products = [];\n  }\n\n  _createClass(Container, [{\n    key: \"addProduct\",\n    value: function addProduct(product) {\n      var sum = product.weight;\n\n      this._products.forEach(function (element) {\n        return sum += element.weight;\n      });\n\n      var isIdUsed = this._products.some(function (element) {\n        return element.id === product.id;\n      });\n\n      if (!(product instanceof _Product__WEBPACK_IMPORTED_MODULE_0__.default)) {\n        throw new Error(\"the product argument isn't an instance of Product!\");\n      } else if (isIdUsed) {\n        throw new Error('the container already contains a product with the same id');\n      } else if (sum >= this._maxWeight) {\n        throw new Error('you can\\'t add this product. The maxWeight of the container would be exceeded by adding this product');\n      }\n\n      this._products.push(product);\n    }\n  }, {\n    key: \"getProductAtIndex\",\n    value: function getProductAtIndex(index) {\n      if (!Number.isInteger(index) || index < 0 || index >= this._products.length) {\n        throw new Error(\"index must be an integer greater than 0 and smaller than the length of the _products array\");\n      }\n\n      return this._products[index];\n    }\n  }]);\n\n  return Container;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/cargo/Container.js?");

/***/ }),

/***/ "./src/js/cargo/Product.js":
/*!*********************************!*\
  !*** ./src/js/cargo/Product.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Product)\n/* harmony export */ });\n // naam\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Product = /*#__PURE__*/function () {\n  function Product(id, weight) {\n    _classCallCheck(this, Product);\n\n    if (!Number.isInteger(id) || id <= 0) {\n      throw new Error(\"id must be an integer greater than 0!\");\n    }\n\n    if (typeof weight != 'number' || weight <= 0) {\n      throw new Error(\"weight must be a number greater than 0!\");\n    }\n\n    this._id = id;\n    this._weight = weight;\n  }\n\n  _createClass(Product, [{\n    key: \"id\",\n    get: function get() {\n      return this._id;\n    }\n  }, {\n    key: \"weight\",\n    get: function get() {\n      return this._weight;\n    }\n  }]);\n\n  return Product;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/cargo/Product.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;