/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sass/main.sass */ \"./sass/main.sass\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/dropdown.js */ \"./js/dropdown.js\");\n/* harmony import */ var _js_dropdown_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/dropdown-input.js */ \"./js/dropdown-input.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/dropdown-input.js":
/*!******************************!*\
  !*** ./js/dropdown-input.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown-input\").on(\"mouseover\", function(){\r\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__menu\").css(\"display\") == \"none\")\r\n        jquery__WEBPACK_IMPORTED_MODULE_0__(this).children().css(\"border-color\", \"#8F90A0\")\r\n})\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown-input\").on(\"mouseleave\", function(){\r\n    if (jquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__menu\").css(\"display\") == \"none\")\r\n        jquery__WEBPACK_IMPORTED_MODULE_0__(this).children().css(\"border-color\", \"#C7C7CF\")\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./js/dropdown-input.js?");

/***/ }),

/***/ "./js/dropdown.js":
/*!************************!*\
  !*** ./js/dropdown.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet itemsAmount = {\r\n    totalSum() {\r\n        let sum = 0;\r\n        for(let value in this){\r\n            if(typeof this[value] == \"number\")\r\n                sum += this[value]\r\n        }\r\n        return sum\r\n    },\r\n    resetToZero() {\r\n        for(let value in this){\r\n            if(typeof this[value] == \"number\")\r\n                this[value] = 0\r\n        }\r\n    }\r\n}\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown-input__expnd-more\").on(\"click\", function() {\r\n    let isOpened = jquery__WEBPACK_IMPORTED_MODULE_0__(this).parent().next().css(\"display\") == \"none\" \r\n    let borderColor = isOpened ? \"#8F90A0\" : \"#C7C7CF\"\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).parent().next().slideToggle(\"fast\")\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).prev().css(\"border-color\", borderColor)\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).css(\"border-color\", borderColor)\r\n})\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__inc\").each((indx, element) => {\r\n    itemsAmount[jquery__WEBPACK_IMPORTED_MODULE_0__(element).attr(\"data-item\")] = 0\r\n})\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__inc\").on(\"click\", function(){\r\n    if(itemsAmount.totalSum() == 0)\r\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__btns-clear\").css(\"visibility\", \"visible\")\r\n    if(itemsAmount[jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"data-item\")] == 0)\r\n        jquery__WEBPACK_IMPORTED_MODULE_0__(this).siblings(\".dropdown__dec\").css(\"opacity\", \"1\")\r\n    itemsAmount[jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"data-item\")]++\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).prev().html(itemsAmount[jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"data-item\")])\r\n})\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__dec\").on(\"click\", function(){\r\n    if(itemsAmount[jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"data-item\")] == 1)\r\n        jquery__WEBPACK_IMPORTED_MODULE_0__(this).css(\"opacity\", \"0.38\")\r\n    if(itemsAmount[jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"data-item\")] != 0){\r\n        itemsAmount[jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"data-item\")]--\r\n        jquery__WEBPACK_IMPORTED_MODULE_0__(this).next().html(itemsAmount[jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr(\"data-item\")])\r\n        if(itemsAmount.totalSum() == 0)\r\n            jquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__btns-clear\").css(\"visibility\", \"hidden\")\r\n    }\r\n})\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__btns-clear\").on(\"click\", function(){\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__count\").html(\"0\")\r\n    itemsAmount.resetToZero()\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__dec\").css(\"opacity\", \"0.38\")\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).css(\"visibility\", \"hidden\")\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents(\".dropdown\").find(\".dropdown-input__inp\").attr(\"placeholder\", \"Сколько гостей\")\r\n})\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".dropdown__btns-accept\").on(\"click\", function(){\r\n    if(itemsAmount.totalSum != 0){\r\n        if(jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents(\".dropdown\").attr(\"data-name\") == \"dropdown-guests\"){\r\n            jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents(\".dropdown\").find(\".dropdown-input__inp\").attr(\"placeholder\", showItemsAmount())\r\n        }\r\n            \r\n    }\r\n})\r\n\r\nfunction showItemsAmount(){\r\n    if(itemsAmount.totalSum() != 0){\r\n        let outputStr = \"\"\r\n        if(itemsAmount.adult != 0){\r\n            if(itemsAmount.adult == 1)\r\n            outputStr = \"1 гость\"\r\n            else{\r\n                if(itemsAmount.adult == 2 || itemsAmount.adult == 3 || itemsAmount.adult == 4)\r\n                    outputStr = `${itemsAmount.adult} гостя`\r\n                else\r\n                    outputStr = `${itemsAmount.adult} гостей`\r\n            }\r\n            if(itemsAmount.adult != itemsAmount.totalSum())\r\n                outputStr += \", \"\r\n        }\r\n        if(itemsAmount.kids != 0){\r\n            if(itemsAmount.kids == 1)\r\n            outputStr += \"1 ребенок\"\r\n            else{\r\n                if(itemsAmount.kids == 2 || itemsAmount.kids == 3 || itemsAmount.kids == 4)\r\n                outputStr += `${itemsAmount.kids} ребенка`\r\n                else\r\n                    outputStr += `${itemsAmount.kids} детей`\r\n            }\r\n            if((itemsAmount.adult + itemsAmount.kids) != itemsAmount.totalSum())\r\n                outputStr += \", \"\r\n        }\r\n        if(itemsAmount.babyes != 0){\r\n            if(itemsAmount.babyes == 1)\r\n                outputStr += \"1 младенец\"\r\n            else{\r\n                if(itemsAmount.babyes == 2 || itemsAmount.babyes == 3 || itemsAmount.babyes == 4)\r\n                outputStr += `${itemsAmount.babyes} младенца`\r\n                else\r\n                    outputStr += `${itemsAmount.babyes} младенцев`\r\n            }\r\n        }\r\n        return outputStr\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/dropdown.js?");

/***/ }),

/***/ "./sass/main.sass":
/*!************************!*\
  !*** ./sass/main.sass ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./sass/main.sass?");

/***/ })

/******/ });