/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/2015/day_01.js":
/*!****************************!*\
  !*** ./src/2015/day_01.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction fifteenOne(input) {\n  var part1 = 0;\n  var part2 = null;\n  input.split(\"\").forEach(function (char, index) {\n    if (char === \"(\") part1 += 1;else if (char === \")\") part1 -= 1;\n    if (part1 === -1 && part2 === null) part2 = index + 1;\n  });\n  return [part1, part2];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fifteenOne);\n\n//# sourceURL=webpack:///./src/2015/day_01.js?");

/***/ }),

/***/ "./src/2015/day_02.js":
/*!****************************!*\
  !*** ./src/2015/day_02.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction fifteenTwo(input) {\n  function computeDimensions(_ref) {\n    var _ref2 = _slicedToArray(_ref, 3),\n        l = _ref2[0],\n        w = _ref2[1],\n        h = _ref2[2];\n\n    return 2 * l * w + 2 * h * l + 2 * w * h + Math.min(l * w, w * h, h * l);\n  }\n\n  function computeRibbon(_ref3) {\n    var _ref4 = _slicedToArray(_ref3, 3),\n        l = _ref4[0],\n        w = _ref4[1],\n        h = _ref4[2];\n\n    return 2 * Math.min(l + w, w + h, h + l) + l * w * h;\n  }\n\n  var part1 = input.split(\"\\n\").filter(function (line) {\n    return line;\n  }).map(function (boxDimensions) {\n    return computeDimensions(boxDimensions.split(\"x\"));\n  }).reduce(function (acc, val) {\n    return acc + val;\n  }, 0);\n  var part2 = input.split(\"\\n\").filter(function (line) {\n    return line;\n  }).map(function (boxDimensions) {\n    return computeRibbon(boxDimensions.split(\"x\").map(function (el) {\n      return parseInt(el, 10);\n    }));\n  }).reduce(function (acc, val) {\n    return acc + val;\n  }, 0);\n  return [part1, part2];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fifteenTwo);\n\n//# sourceURL=webpack:///./src/2015/day_02.js?");

/***/ }),

/***/ "./src/2015/day_03.js":
/*!****************************!*\
  !*** ./src/2015/day_03.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction fifteenThree(input) {\n  function part1(directions) {\n    var locX = 0;\n    var locY = 0;\n    var visitedLocs = [[0, 0]];\n    directions.split(\"\").forEach(function (char) {\n      if (char === \"^\") locX += 1;else if (char === \"v\") locX -= 1;else if (char === \">\") locY += 1;else if (char === \"<\") locY -= 1;\n      visitedLocs.push([locX, locY]);\n    });\n    return new Set(visitedLocs.map(JSON.stringify)).size;\n  }\n\n  function part2(directions) {\n    var locX = 0;\n    var locY = 0;\n    var roboLocX = 0;\n    var roboLocY = 0;\n    var roboTurn = false;\n    var visitedLocs = [[0, 0]];\n    directions.split(\"\").forEach(function (char) {\n      if (char === \"^\") roboTurn ? roboLocX += 1 : locX += 1;else if (char === \"v\") roboTurn ? roboLocX -= 1 : locX -= 1;else if (char === \">\") roboTurn ? roboLocY += 1 : locY += 1;else if (char === \"<\") roboTurn ? roboLocY -= 1 : locY -= 1;\n      roboTurn ? visitedLocs.push([roboLocX, roboLocY]) : visitedLocs.push([locX, locY]);\n      roboTurn = !roboTurn;\n    });\n    return new Set(visitedLocs.map(JSON.stringify)).size;\n  }\n\n  return [part1(input), part2(input)];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fifteenThree);\n\n//# sourceURL=webpack:///./src/2015/day_03.js?");

/***/ }),

/***/ "./src/2015/day_04.js":
/*!****************************!*\
  !*** ./src/2015/day_04.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction fifteenFour(input) {\n  var part1 = 0;\n  var part2 = null;\n  input.split(\"\").forEach(function (char, index) {\n    if (char === \"(\") part1 += 1;else if (char === \")\") part1 -= 1;\n    if (part1 === -1 && part2 === null) part2 = index + 1;\n  });\n  return [0, 0];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fifteenFour);\n\n//# sourceURL=webpack:///./src/2015/day_04.js?");

/***/ }),

/***/ "./src/2015/day_10.js":
/*!****************************!*\
  !*** ./src/2015/day_10.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction fifteenTen(input) {\n  var part1 = input;\n\n  function lookAndSay(string) {\n    var newString = \"\";\n    var prevChar = \"\";\n    var count = 0;\n\n    _toConsumableArray(string).forEach(function (char) {\n      if (char === prevChar) {\n        count += 1;\n      } else {\n        if (count !== 0) {\n          newString += count + prevChar;\n        }\n\n        prevChar = char;\n        count = 1;\n      }\n    });\n\n    newString += count + prevChar;\n    return newString;\n  }\n\n  for (var i = 0; i < 40; i += 1) {\n    part1 = lookAndSay(part1);\n  }\n\n  var part2 = part1;\n\n  for (var _i = 0; _i < 10; _i += 1) {\n    part2 = lookAndSay(part2);\n  }\n\n  return [part1.length, part2.length];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fifteenTen);\n\n//# sourceURL=webpack:///./src/2015/day_10.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _2015_day_01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2015/day_01 */ \"./src/2015/day_01.js\");\n/* harmony import */ var _2015_day_02__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2015/day_02 */ \"./src/2015/day_02.js\");\n/* harmony import */ var _2015_day_03__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2015/day_03 */ \"./src/2015/day_03.js\");\n/* harmony import */ var _2015_day_04__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./2015/day_04 */ \"./src/2015/day_04.js\");\n/* harmony import */ var _2015_day_10__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./2015/day_10 */ \"./src/2015/day_10.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar solutions = {\n  2015: {\n    1: _2015_day_01__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    2: _2015_day_02__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    3: _2015_day_03__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    4: _2015_day_04__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    10: _2015_day_10__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }\n};\ndocument.getElementById(\"submit\").addEventListener(\"click\", function () {\n  var year = document.querySelector(\"input[name='year']:checked\").value;\n  var day = document.querySelector(\"input[name='day']:checked\").value;\n  var input = document.getElementById(\"input\").value;\n\n  var _ref = solutions[year][parseInt(day, 10)] ? solutions[year][parseInt(day, 10)](input) : [\"Not available!\", \"Not available!\"],\n      _ref2 = _slicedToArray(_ref, 2),\n      part1 = _ref2[0],\n      part2 = _ref2[1];\n\n  document.getElementById(\"answer\").innerHTML = \"Part 1: \".concat(part1, \" <br> Part 2: \").concat(part2);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });