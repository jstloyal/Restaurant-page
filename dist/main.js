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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navigation */ \"./src/js/navigation.js\");\n/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home */ \"./src/js/home.js\");\n/* harmony import */ var _js_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/about */ \"./src/js/about.js\");\n/* harmony import */ var _js_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/footer */ \"./src/js/footer.js\");\n\n\n\n // console.log(\"Hello World\")\n\nvar content = document.querySelector('#content');\ncontent.appendChild(_js_navigation__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"]);\ncontent.appendChild(_js_home__WEBPACK_IMPORTED_MODULE_1__[\"home\"]);\ncontent.appendChild(_js_about__WEBPACK_IMPORTED_MODULE_2__[\"about\"]);\ncontent.appendChild(_js_footer__WEBPACK_IMPORTED_MODULE_3__[\"footer\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/*! exports provided: about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about\", function() { return about; });\nvar about = function () {\n  var section = document.createElement('section');\n  section.setAttribute('id', 'aboutContent');\n  var aboutImages = document.createElement('div');\n  aboutImages.setAttribute('id', 'aboutImg');\n  var firstImg = document.createElement('img');\n  firstImg.setAttribute('src', './images/recipe.jpg');\n  firstImg.setAttribute('id', 'kitchen');\n  firstImg.setAttribute('alt', 'making your dish');\n  var secondImg = document.createElement('img');\n  secondImg.setAttribute('id', 'meal');\n  secondImg.setAttribute('src', 'images/Afang.jpg');\n  secondImg.setAttribute('alt', 'afang soup');\n  aboutImages.appendChild(firstImg); // aboutImages.appendChild(secondImg);\n\n  var aboutText = document.createElement('div');\n  aboutText.setAttribute('id', 'aboutText');\n  var aboutHeader = document.createElement('div');\n  aboutHeader.setAttribute('id', 'aboutHeader');\n  var h2 = document.createElement('h2');\n  h2.textContent = 'ABOUT US';\n  aboutHeader.appendChild(h2);\n  var firstPara = document.createElement('p');\n  firstPara.innerHTML = 'When we open MamaPut in April 2019, our vision was to create an unassuming watering holes for locals and foreigners. In a town with endless options, we found it challenging to find a friendly location, good food, and non-gaming/non-smoking. We want to provide friends and neighbors alike with the original form of Afican delicacies. Our staunch belief in providing exceptional quality meals with a friendly service in a clean and welcoming settings has helped us earn the reputation among the locals as one of the best hidden gems in Lagos.';\n  var secondPara = document.createElement('p');\n  secondPara.innerHTML = 'MamaPut is a culmination of giving our best to the community through our food, service, and atmosphere. Tucked inside one of the premier location in Lagos, this collaboration project allows us another opportunity to create a memorable setting for you to catch up with friends and make new ones over tasty bites and a refreshing meal.';\n  aboutText.appendChild(aboutHeader);\n  aboutText.appendChild(firstPara);\n  aboutText.appendChild(secondPara);\n  section.appendChild(aboutText);\n  section.appendChild(aboutImages);\n  return section;\n}();\n\n//# sourceURL=webpack:///./src/js/about.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/*! exports provided: footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\nvar footer = function () {\n  var footer = document.createElement('footer');\n  var myFooter = document.createElement('div');\n  myFooter.textContent = 'Copyright | MamaPut | 2020';\n  footer.appendChild(myFooter);\n  return footer;\n}();\n\n//# sourceURL=webpack:///./src/js/footer.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! exports provided: home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\nvar home = function () {\n  var homePage = document.createElement('div');\n  homePage.setAttribute('id', 'mySlogan');\n  var myMotto = document.createElement('h1');\n  myMotto.setAttribute('id', 'myMotto');\n  myMotto.textContent = 'HEALTHY HOME-MADE MEAL FOR YOU';\n  var info = document.createElement('div');\n  info.setAttribute('id', 'homeInfo');\n  var paragraph = document.createElement('p');\n  paragraph.textContent = 'Every meal starts with locally sourced ingredients. Real taste of African dish is guaranteed!';\n  homePage.appendChild(myMotto);\n  info.appendChild(paragraph);\n  homePage.appendChild(info);\n  return homePage;\n}();\n\n//# sourceURL=webpack:///./src/js/home.js?");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! exports provided: navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navbar\", function() { return navbar; });\nvar navbar = function () {\n  var navigationMenu = document.createElement('nav');\n  navigationMenu.setAttribute('id', 'mainNav');\n  var ul = document.createElement('ul');\n  var listOne = document.createElement('li');\n  listOne.textContent = 'Home';\n  listOne.setAttribute('id', 'homeList');\n  var listTwo = document.createElement('li');\n  listTwo.textContent = 'Menu';\n  listTwo.setAttribute('id', 'menuList');\n  var listThree = document.createElement('li');\n  listThree.textContent = 'Contact';\n  listThree.setAttribute('id', 'contactList');\n  var listFour = document.createElement('li');\n  listFour.textContent = 'About';\n  listFour.setAttribute('id', 'aboutList');\n  ul.appendChild(listOne);\n  ul.appendChild(listTwo);\n  ul.appendChild(listThree);\n  ul.appendChild(listFour);\n  navigationMenu.appendChild(ul);\n  return navigationMenu;\n}();\n\n//# sourceURL=webpack:///./src/js/navigation.js?");

/***/ })

/******/ });