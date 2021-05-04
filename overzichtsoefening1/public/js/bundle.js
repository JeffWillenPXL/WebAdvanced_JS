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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _school_Course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school/Course */ \"./src/js/school/Course.js\");\n/* harmony import */ var _school_Student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school/Student */ \"./src/js/school/Student.js\");\n\n\n\n\nwindow.addEventListener(\"load\", function () {\n  var student = new _school_Student__WEBPACK_IMPORTED_MODULE_1__.default(1);\n  var course = new _school_Course__WEBPACK_IMPORTED_MODULE_0__.default(101);\n  course.completed = true;\n  course.grade = 12;\n  student.addCourse(course);\n  var course2 = new _school_Course__WEBPACK_IMPORTED_MODULE_0__.default(111);\n  course2.completed = true;\n  course2.grade = 13;\n  student.addCourse(course2);\n  var course3 = new _school_Course__WEBPACK_IMPORTED_MODULE_0__.default(121);\n  student.addCourse(course3);\n  var grade = student.calculateGrade();\n  document.getElementById(\"output\").appendChild(document.createTextNode(grade));\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/school/Course.js":
/*!*********************************!*\
  !*** ./src/js/school/Course.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Course)\n/* harmony export */ });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Course = /*#__PURE__*/function () {\n  function Course(id) {\n    _classCallCheck(this, Course);\n\n    this._id = id;\n    this._grade = 0;\n    this._completed = false;\n  }\n\n  _createClass(Course, [{\n    key: \"id\",\n    get: function get() {\n      return this._id;\n    },\n    set: function set(value) {\n      this._id = value;\n    }\n  }, {\n    key: \"grade\",\n    get: function get() {\n      return this._grade;\n    },\n    set: function set(value) {\n      this._grade = value;\n    }\n  }, {\n    key: \"completed\",\n    get: function get() {\n      return this._completed;\n    },\n    set: function set(value) {\n      this._completed = value;\n    }\n  }]);\n\n  return Course;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/school/Course.js?");

/***/ }),

/***/ "./src/js/school/Student.js":
/*!**********************************!*\
  !*** ./src/js/school/Student.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Student)\n/* harmony export */ });\n/* harmony import */ var _Course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Course */ \"./src/js/school/Course.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Student = /*#__PURE__*/function () {\n  function Student(id) {\n    _classCallCheck(this, Student);\n\n    this._id = id;\n    this._courses = [];\n  }\n\n  _createClass(Student, [{\n    key: \"addCourse\",\n    value: function addCourse(course) {\n      if (!(course instanceof _Course__WEBPACK_IMPORTED_MODULE_0__.default)) {\n        throw new Error('course is not an instance of the Course class!');\n      }\n\n      this._courses.push(course);\n    }\n  }, {\n    key: \"calculateGrade\",\n    value: function calculateGrade() {\n      var completedCourses = this._courses.filter(function (course) {\n        return course.completed === true;\n      });\n\n      var sum = 0;\n\n      if (completedCourses.length <= 0) {\n        throw new Error('no courses in _courses array!');\n      }\n\n      completedCourses.forEach(function (course) {\n        return sum += course.grade;\n      });\n      return sum / completedCourses.length;\n    }\n  }]);\n\n  return Student;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/school/Student.js?");

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