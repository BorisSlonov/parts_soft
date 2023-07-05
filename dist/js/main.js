/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/getReadyShop/getReadyShop.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/getReadyShop/getReadyShop.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
var swiperGetReadyShop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiperGetReadyShop', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

//burger
window.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".header__list"),
    menuItem = document.querySelectorAll(".header__link"),
    hamburger = document.querySelector(".header__burger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
  });
  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
    });
  });

  //Hidden header
  var headerTag = document.querySelector(".header");
  var scrollPrev = 0;
  window.addEventListener("scroll", function () {
    var scrolled = window.scrollY;
    if (scrolled > 100 && scrolled > scrollPrev) {
      headerTag.classList.add("out");
    } else {
      headerTag.classList.remove("out");
    }
    scrollPrev = scrolled;
  });
  function setMainPaddingTop() {
    var headerHeight = document.querySelector('.header').offsetHeight;
    document.querySelector('.main').style.paddingTop = headerHeight + 'px';
  }
  setMainPaddingTop();
});

/***/ }),

/***/ "./src/blocks/modules/page1/page1.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/page1/page1.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
var swiperPage1 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiperPage1', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

/***/ }),

/***/ "./src/blocks/modules/partnersIntegrations/partnersIntegrations.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/modules/partnersIntegrations/partnersIntegrations.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Breakpoints, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]);
var swiperPartnersIntegrations = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiperPartnersIntegrations', {
  autoplay: true,
  // https://swiperjs.com/swiper-api#param-loop
  //     loop: true,
  //     Set to true to enable continuous loop mode
  // Because of nature of how the loop mode works(it will rearrange slides), total number of slides must be >= slidesPerView * 2
  navigation: {
    nextEl: '.swiper-button-next-part-int',
    prevEl: '.swiper-button-prev-part-int'
  },
  // Опции для разных разрешений
  breakpoints: {
    // Когда ширина экрана больше или равна 1000px
    1000: {
      slidesPerView: 5,
      loop: true,
      loopAdditionalSlides: 2
    },
    // Когда ширина экрана больше или равна 768px
    768: {
      slidesPerView: 4,
      loop: true,
      loopAdditionalSlides: 2
    },
    // Когда ширина экрана меньше 768px
    0: {
      slidesPerView: 1,
      loop: true,
      loopAdditionalSlides: 2
    }
  }
});
var breakpoint = window.matchMedia('(max-width: 767px)');
var arrowsWrapper = document.querySelector('.partnersIntegrations__arrowsWrapper');
var moveArrowsWrapper = function moveArrowsWrapper() {
  var itemContainerFirst = document.querySelector('.partnersIntegrations__item_arrows');
  var itemContainerLast = document.querySelector('.partnersIntegrations__item:last-child');
  if (breakpoint.matches) {
    // Переместить в partnersIntegrations__item:last-child
    itemContainerLast.appendChild(arrowsWrapper);
  } else {
    // Переместить в partnersIntegrations__item:first-child
    itemContainerFirst.appendChild(arrowsWrapper);
  }
};
moveArrowsWrapper(); // Выполнить в начале, чтобы инициализировать положение

breakpoint.addEventListener('change', moveArrowsWrapper);

/***/ }),

/***/ "./src/blocks/modules/reviews/reviews.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/reviews/reviews.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Breakpoints]);
var breakpoint = window.matchMedia('(max-width: 999px)');
var swiperReviews = null;
var breakpointChecker = function breakpointChecker() {
  if (breakpoint.matches) {
    if (swiperReviews === null) {
      swiperReviews = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiperReviews', {
        autoHeight: true,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          }
        }
      });
    }
  } else {
    if (swiperReviews !== null) {
      swiperReviews.destroy();
      swiperReviews = null;
    }
  }
};
breakpointChecker();
breakpoint.addEventListener('change', breakpointChecker);

/***/ }),

/***/ "./src/blocks/modules/startSteps/startSteps.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/startSteps/startSteps.js ***!
  \*****************************************************/
/***/ (() => {

var steps = document.querySelectorAll('.startSteps__num');
var viewportHeight = window.innerHeight;
var activeStepIndex = -1;
function setActiveStep(index) {
  if (activeStepIndex !== index) {
    var _steps$activeStepInde, _steps$index;
    (_steps$activeStepInde = steps[activeStepIndex]) === null || _steps$activeStepInde === void 0 ? void 0 : _steps$activeStepInde.classList.remove('startSteps__num_active');
    (_steps$index = steps[index]) === null || _steps$index === void 0 ? void 0 : _steps$index.classList.add('startSteps__num_active');
    activeStepIndex = index;
  }
}
function updateActiveStep() {
  var scrollPosition = window.scrollY;
  for (var i = 0; i < steps.length; i++) {
    var rect = steps[i].getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    if (scrollPosition >= 0 && elemTop <= viewportHeight / 2) {
      setActiveStep(i);
    } else if (scrollPosition <= 0 && elemBottom >= viewportHeight / 2) {
      setActiveStep(i);
    }
  }
}
window.addEventListener('scroll', updateActiveStep);

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_page1_page1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/page1/page1 */ "./src/blocks/modules/page1/page1.js");
/* harmony import */ var _modules_partnersIntegrations_partnersIntegrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/partnersIntegrations/partnersIntegrations */ "./src/blocks/modules/partnersIntegrations/partnersIntegrations.js");
/* harmony import */ var _modules_getReadyShop_getReadyShop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/getReadyShop/getReadyShop */ "./src/blocks/modules/getReadyShop/getReadyShop.js");
/* harmony import */ var _modules_startSteps_startSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/startSteps/startSteps */ "./src/blocks/modules/startSteps/startSteps.js");
/* harmony import */ var _modules_startSteps_startSteps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_startSteps_startSteps__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map