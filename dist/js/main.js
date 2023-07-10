/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var checkAccordion = document.querySelector(".accordion");
  if (checkAccordion) {
    var btns = document.querySelectorAll(".accordion__h4");
    btns.forEach(function (btn) {
      console.log('click');
      btn.addEventListener("click", function () {
        if (!this.classList.contains("acc-active")) {
          btns.forEach(function (btn) {
            btn.classList.remove("acc-active");
          });
          this.classList.add("acc-active");
        } else {
          this.classList.remove("acc-active");
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/customSelect/customSelect.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/customSelect/customSelect.js ***!
  \*********************************************************/
/***/ (() => {

// Получаем все кастомные селекты
var customSelects = document.querySelectorAll('.custom-select');

// Проходимся по каждому кастомному селекту
customSelects.forEach(function (select) {
  // Получаем нужные элементы внутри каждого кастомного селекта
  var selectedOption = select.querySelector('.select-selected');
  var dropdown = select.querySelector('.select-dropdown');
  var options = select.querySelectorAll('.select-option');

  // Обработчик клика для открытия/закрытия выпадающего списка и выбора опции
  selectedOption.addEventListener('click', function (event) {
    event.stopPropagation(); // Останавливаем всплытие события
    selectedOption.classList.toggle('show');
    dropdown.classList.toggle('show');
  });

  // Обработчик клика для выбора опции
  options.forEach(function (option) {
    option.addEventListener('click', function (event) {
      event.stopPropagation(); // Останавливаем всплытие события
      var value = option.getAttribute('data-value');
      var text = option.innerText;
      if (document.querySelector('.linkWithIcon')) {
        var iconClass = option.querySelector('span').classList[1]; // Получаем второй класс у span
        selectedOption.innerHTML = "<span class=\"linkWithIcon ".concat(iconClass, "\">").concat(text, "</span>");
      } else {
        selectedOption.innerHTML = "".concat(text);
      }

      // Закрываем выпадающий список
      dropdown.classList.remove('show');
      selectedOption.classList.remove('show');
    });
  });

  // Закрываем выпадающий список при клике вне его области
  window.addEventListener('click', function () {
    dropdown.classList.remove('show');
    selectedOption.classList.remove('show');
  });
});

/***/ }),

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

/***/ "./src/blocks/modules/pagePrices/pagePrices.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/pagePrices/pagePrices.js ***!
  \*****************************************************/
/***/ (() => {

var buttons = document.querySelectorAll('.btn_pricesTableOpenHidden');
var buttonSpans = document.querySelectorAll('.btn_pricesTableOpenHidden .btn__span');
var rows = document.querySelectorAll('.pricesTable__row_openHidden');
buttons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    rows.forEach(function (row) {
      row.classList.toggle('hide');
    });
    var buttonText = buttonSpans[index].textContent.trim();
    buttonSpans[index].textContent = buttonText === 'Свернуть' ? 'Развернуть все' : 'Свернуть';
  });
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
  delay: 2000,
  loop: true,
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
      slidesPerView: 4,
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
if (arrowsWrapper) {
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
}

/***/ }),

/***/ "./src/blocks/modules/popups/popups.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/popups/popups.js ***!
  \*********************************************/
/***/ (() => {

function modalContent(trigger, item) {
  var btn = document.querySelectorAll(trigger),
    pop = document.querySelector(item),
    close = document.querySelectorAll('.popup-close'),
    closeBack = document.querySelectorAll('.popup'),
    activeClass = 'show',
    hideClass = 'hide';
  function showContent() {
    pop.classList.add(activeClass);
    pop.classList.remove(hideClass);
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('resize'));
  }
  function hideContent() {
    pop.classList.remove(activeClass);
    pop.classList.add(hideClass);
    document.body.style.overflow = '';
  }
  function showHideContent(trigger, func) {
    trigger.forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target && e.target.className === item.className) {
          e.preventDefault();
          func();
        }
      });
    });
  }
  showHideContent(btn, showContent);
  showHideContent(close, hideContent);
  showHideContent(closeBack, hideContent);
}
modalContent('.callback-btn', '.popup_callback');
modalContent('.done-btn', '.popup_done');
modalContent('.demo-btn', '.popup_demo');

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
if (document.querySelector('.swiperReviews')) {
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
}

/***/ }),

/***/ "./src/blocks/modules/screen1/screen1.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/screen1/screen1.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Breakpoints, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]);
var swiperscreen1 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiperscreen1', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

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

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/***/ (() => {

var tabs = function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
  var header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach(function (item) {
      item.style.display = "none";
    });
    tab.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    content[i].style.display = "block";
    tab[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  header.addEventListener("click", function (e) {
    var target = e.target;
    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach(function (item, i) {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Получаем все кастомные селекты
  var selects = document.querySelectorAll(".custom-select_qa, .custom-select_help, .custom-select_prices");

  // Обработчик клика для выбора опции в каждом селекте
  selects.forEach(function (select) {
    var selectDropdown = select.querySelector(".select-dropdown");
    var selectOptions = select.querySelectorAll(".select-option");
    selectOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        var selectedValue = option.getAttribute("data-value");
        var tabContent = document.querySelector("#".concat(selectedValue));
        function hideTabContent() {
          content.forEach(function (item) {
            item.style.display = "none";
          });
          tab.forEach(function (item) {
            item.classList.remove(activeClass);
          });
        }
        hideTabContent();
        tabContent.style.display = "block";
      });
    });
  });

  // Закрываем выпадающий список при клике вне его области
  document.addEventListener("click", function (event) {
    if (!event.target.matches(".select-selected")) {
      selects.forEach(function (select) {
        var selectDropdown = select.querySelector(".select-dropdown");
        selectDropdown.classList.remove("show");
      });
    }
  });
};
var qaTabs = document.querySelector(".qaTabs");
if (qaTabs) {
  tabs(".qaTabs__titles", ".qaTabs__title", ".qaTabs__item", "qaTabs__title_active");
}
var helpTabs = document.querySelector(".helpTabs");
if (helpTabs) {
  tabs(".helpTabs__titles", ".helpTabs__title", ".helpTabs__item", "helpTabs__title_active");
}
var pricesTabs = document.querySelector(".pricesTabs");
if (pricesTabs) {
  tabs(".pricesTabs__titles", ".pricesTabs__title", ".pricesTabs__item", "pricesTabs__title_active");
}

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
/* harmony import */ var _modules_screen1_screen1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/screen1/screen1 */ "./src/blocks/modules/screen1/screen1.js");
/* harmony import */ var _modules_partnersIntegrations_partnersIntegrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/partnersIntegrations/partnersIntegrations */ "./src/blocks/modules/partnersIntegrations/partnersIntegrations.js");
/* harmony import */ var _modules_getReadyShop_getReadyShop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/getReadyShop/getReadyShop */ "./src/blocks/modules/getReadyShop/getReadyShop.js");
/* harmony import */ var _modules_startSteps_startSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/startSteps/startSteps */ "./src/blocks/modules/startSteps/startSteps.js");
/* harmony import */ var _modules_startSteps_startSteps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_startSteps_startSteps__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/customSelect/customSelect */ "./src/blocks/modules/customSelect/customSelect.js");
/* harmony import */ var _modules_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_popups_popups__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/popups/popups */ "./src/blocks/modules/popups/popups.js");
/* harmony import */ var _modules_popups_popups__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_popups_popups__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_pagePrices_pagePrices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/pagePrices/pagePrices */ "./src/blocks/modules/pagePrices/pagePrices.js");
/* harmony import */ var _modules_pagePrices_pagePrices__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_pagePrices_pagePrices__WEBPACK_IMPORTED_MODULE_11__);













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