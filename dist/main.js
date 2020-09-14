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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navigation */ \"./src/js/navigation.js\");\n/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home */ \"./src/js/home.js\");\n/* harmony import */ var _js_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/about */ \"./src/js/about.js\");\n/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/contact */ \"./src/js/contact.js\");\n/* harmony import */ var _js_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/footer */ \"./src/js/footer.js\");\n\n\n // import { menu } from './js/menu';\n\n\n // console.log(\"Hello World\")\n\nvar content = document.querySelector('#content');\ncontent.appendChild(_js_navigation__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"]);\ncontent.appendChild(_js_home__WEBPACK_IMPORTED_MODULE_1__[\"home\"]);\ncontent.appendChild(_js_about__WEBPACK_IMPORTED_MODULE_2__[\"about\"]); // content.appendChild(menu);\n\ncontent.appendChild(_js_contact__WEBPACK_IMPORTED_MODULE_3__[\"contact\"]);\ncontent.appendChild(_js_footer__WEBPACK_IMPORTED_MODULE_4__[\"footer\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/*! exports provided: contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\nvar contact = function () {\n  var content = document.createElement('div');\n  content.setAttribute('id', 'contactContent');\n  var contactInfo = document.createElement('div');\n  contactInfo.setAttribute('id', 'contactInfo');\n  var contactH2 = document.createElement('h2');\n  contactH2.textContent = 'CONTACT';\n  var itemOne = document.createElement('div');\n  itemOne.classList.add('contactItem');\n  var p1 = document.createElement('p');\n  p1.innerHTML = \"72 Fani Kayode Street<br> Ikeja GRA, Lagos.\";\n  itemOne.appendChild(p1);\n  var itemTwo = document.createElement('div');\n  itemTwo.classList.add('contactItem');\n  var p2 = document.createElement('p');\n  p2.innerHTML = \"<strong class='name'>Sun-Thurs:</strong> 9am-9pm <br><strong class='name'>Fri-Sun: </strong> 12pm-6pm \";\n  itemTwo.appendChild(p2);\n  var itemThree = document.createElement('div');\n  itemThree.classList.add('contactItem');\n  var p3 = document.createElement('p');\n  p3.setAttribute('id', 'numberFont');\n  p3.textContent = \"333.545.232\";\n  itemThree.appendChild(p3);\n  var itemFour = document.createElement('div');\n  itemFour.classList.add('contactItem');\n  var p4 = document.createElement('h3');\n  p4.textContent = 'MESSAGE US';\n  itemFour.appendChild(p4);\n  var item5 = document.createElement('div');\n  item5.setAttribute('id', 'emailSender');\n  var form = document.createElement('form');\n  form.setAttribute('action', 'mailto:jstloyalty@gmail.com');\n  form.setAttribute('autocomplete', 'off');\n  form.setAttribute('method', 'post');\n  form.setAttribute('enctype', 'text/plain');\n  var input1 = document.createElement('input');\n  input1.setAttribute('type', 'text');\n  input1.setAttribute('id', 'name');\n  input1.setAttribute('size', '25');\n  input1.setAttribute('placeholder', 'Name');\n  var input2 = document.createElement('input');\n  input2.setAttribute('type', 'text');\n  input2.setAttribute('id', 'name');\n  input2.setAttribute('size', '25');\n  input2.setAttribute('placeholder', 'Phone Number');\n  var input3 = document.createElement('input');\n  input3.setAttribute('type', 'text');\n  input3.setAttribute('id', 'name');\n  input3.setAttribute('size', '25');\n  input3.setAttribute('placeholder', 'Email Address');\n  var textarea = document.createElement('textarea');\n  textarea.setAttribute('name', 'message');\n  textarea.setAttribute('id', 'message');\n  textarea.setAttribute('cols', '25');\n  textarea.setAttribute('rows', '4');\n  textarea.setAttribute('placeholder', 'Message');\n  textarea.setAttribute('resize', 'none');\n  var input4 = document.createElement('input');\n  input4.setAttribute('type', 'submit');\n  input4.setAttribute('value', 'Send message');\n  input4.setAttribute('id', 'send');\n  form.appendChild(input1);\n  form.appendChild(input2);\n  form.appendChild(input3);\n  form.appendChild(textarea);\n  form.appendChild(input4);\n  item5.appendChild(form);\n  contactInfo.appendChild(contactH2);\n  contactInfo.appendChild(itemOne);\n  contactInfo.appendChild(itemTwo);\n  contactInfo.appendChild(itemThree);\n  contactInfo.appendChild(itemFour);\n  contactInfo.appendChild(item5);\n  var contactMaps = document.createElement('div');\n  contactMaps.setAttribute('id', 'contactMaps');\n  var map = document.createElement('div');\n  map.setAttribute('id', 'map');\n  map.innerHTML = \"<iframe src=\\\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5760673018394!2d3.3514878147709815!3d6.575063595244777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b920dd121957b%3A0xca91e3d5938c14af!2sRemi%20Fani-Kayode%20Ave%2C%20Ikeja%20GRA%2C%20Lagos!5e0!3m2!1sen!2sng!4v1600072884661!5m2!1sen!2sng\\\" width=\\\"800\\\" height=\\\"600\\\" frameborder=\\\"0\\\" style=\\\"border:0;\\\" allowfullscreen=\\\"\\\" aria-hidden=\\\"false\\\" tabindex=\\\"0\\\"></iframe>\";\n  contactMaps.appendChild(map);\n  content.appendChild(contactInfo);\n  content.appendChild(contactMaps);\n  return content;\n}();\n\n//# sourceURL=webpack:///./src/js/contact.js?");

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