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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utilDebounce = __webpack_require__(1);

var _utilDebounce2 = _interopRequireDefault(_utilDebounce);

var _utilGuid = __webpack_require__(2);

var _utilGuid2 = _interopRequireDefault(_utilGuid);

var _ScrollClass2 = __webpack_require__(3);

var _ScrollClass3 = _interopRequireDefault(_ScrollClass2);

var _MenuToggle2 = __webpack_require__(4);

var _MenuToggle3 = _interopRequireDefault(_MenuToggle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bullets = {
    init: function init() {
        var nodes = document.querySelectorAll('[data-js]');

        for (var i = 0; i < nodes.length; i++) {
            var component = nodes[i].getAttribute('data-js'),
                optionsNo = nodes[i].getAttribute('data-options'),
                options = [];

            if (optionsNo) {
                var optionsCount = 0;
                while (optionsNo > options.length) {
                    optionsCount++;
                    options.push(nodes[i].getAttribute('data-option-' + optionsCount));
                }
            }

            if (bullets.hasOwnProperty(component)) {
                bullets[component](nodes[i], options);
            }
        }
    },

    ScrollClass: function ScrollClass(element, options) {
        var Component = new _ScrollClass3.default(element, options);
    },

    MenuToggle: function MenuToggle(element, options) {
        var Component = new _MenuToggle3.default(element, options);
    }
};

bullets.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(func, wait, immediate) {
  var timeout;

  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = guid;
function guid() {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollClass = function () {
	function ScrollClass(element, options) {
		_classCallCheck(this, ScrollClass);

		this.element = element;
		this.scrollClass = options[0];
		this.offset = options[1];
		this.handleScroll();
	}

	_createClass(ScrollClass, [{
		key: "handleScroll",
		value: function handleScroll() {
			var body = document.body,
			    element = this.element,
			    scrollClass = this.scrollClass,
			    offset = this.offset || element.offsetTop;

			body.onscroll = function () {
				if (scrollClass && body.scrollTop > offset) {
					element.classList.add(scrollClass);
				}
			};
		}
	}]);

	return ScrollClass;
}();

exports.default = ScrollClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuToggle = function () {
	function MenuToggle(element, options) {
		_classCallCheck(this, MenuToggle);

		this.element = element;
		this.activeClass = options[0];
		this.handleButtonClick();
	}

	_createClass(MenuToggle, [{
		key: "handleButtonClick",
		value: function handleButtonClick() {
			var body = document.body,
			    activeClass = this.activeClass,
			    button = this.element;

			var isOpenNav = function isOpenNav() {
				return body.classList.contains(activeClass);
			};

			button.onclick = function () {
				if (activeClass && isOpenNav()) {
					body.classList.remove(activeClass);
				} else {
					body.classList.add(activeClass);
				}
			};
		}
	}]);

	return MenuToggle;
}();

exports.default = MenuToggle;

/***/ })
/******/ ]);
//# sourceMappingURL=bullets.js.map