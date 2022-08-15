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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function about() {
  const titles = document.querySelectorAll('.about__item-title'),
        descrs = document.querySelectorAll('.about__item-descr'),
        buttons = document.querySelectorAll('.about__item-btn');

  function showElem(array, activeClass, numberOfElem) {
    array.forEach((item, i) => {
      item.classList.remove(activeClass);

      if (i == numberOfElem) {
        item.classList.add(activeClass);
      }
    });
  }

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      showElem(titles, 'about__item-title_active', i);
      showElem(descrs, 'about__item-descr_active', i);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showDescr() {
  const itemAccordion = document.querySelectorAll('.accordion__item'),
        itemHeaders = document.querySelectorAll('.accordion__item-header'),
        // item.firstChild
  itemDescrs = document.querySelectorAll('.accordion__item-descr'),
        // item.lastChild
  itemCloses = document.querySelectorAll('.accordion__item-close'),
        //item.firstChild.lastChild
  itemTexts = document.querySelectorAll('.accordion__item-text'),
        //item.lastChild.firstChild
  itemSpans = document.querySelectorAll('.accordion__item-close span'); //item.firstChild.lastChild.firstChild

  function toggleClassesHeader(mainSelector, firstArray, item, secondArray) {
    mainSelector.forEach((elem, i) => {
      elem.addEventListener('click', () => {
        if (item.contains(elem)) {
          firstArray[i].classList.toggle('accordion__item-visible');
          secondArray[i].classList.toggle('accordion__item-transformSquare');
        }
      });
    });
  }

  function toggleClassesBody(mainSelector, array, item) {
    let arrayParent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    mainSelector.forEach((elem, i) => {
      elem.addEventListener('click', e => {
        if (item.contains(elem)) {
          if (arrayParent == undefined) {
            if (e.target.classList.contains('accordion__item-visible')) {
              e.target.classList.toggle('accordion__item-visible');
              array[i].classList.toggle('accordion__item-transformSquare');
            }
          } else {
            if (arrayParent[i].classList.contains('accordion__item-visible')) {
              arrayParent[i].classList.toggle('accordion__item-visible');
              array[i].classList.toggle('accordion__item-transformSquare');
            }
          }
        }
      });
    });
  }

  function hoverPlus(mainSelector, color, typeOfHoverListener, arraySpans, arrayParent, item) {
    mainSelector.forEach((elem, i) => {
      if (item.contains(elem)) {
        elem.addEventListener(typeOfHoverListener, () => {
          arrayParent[i].classList.toggle('changePlus');
          arraySpans.forEach(span => {
            if (arrayParent[i].contains(span)) {
              span.style.backgroundColor = color;
            }
          });
        });
      }
    });
  }

  itemAccordion.forEach(item => {
    toggleClassesHeader(itemHeaders, itemDescrs, item, itemCloses);
    toggleClassesBody(itemDescrs, itemCloses, item);
    toggleClassesBody(itemTexts, itemCloses, item, itemDescrs);
    hoverPlus(itemHeaders, '#000', 'mouseover', itemSpans, itemCloses, item);
    hoverPlus(itemHeaders, '#fff', 'mouseout', itemSpans, itemCloses, item);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (showDescr);

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = [{
  name: 'Fool"s Desperation',
  price: 'Цена 1',
  hoverSrc: 'img/tshirt_hover.png',
  mainSrc: 'img/tshirt_main.png',
  tagline: 'Текст 1',
  colection: 'The Ascendance of Darkness',
  modalSrc: ['img/tshirt_hover.png', 'img/tshirt_main.png', 'img/tshirt_main.png'],
  descr: 'Глупость - вершина человеческого общетва. В неведении легче жить и не замечать бесполезности бытия.Вот мой первый подарок - познай же красоту знаний, дарованную тьмой...',
  composition: 'Кулирка : 92% Лайкра : 8%'
}, {
  name: 'Decepton Beauty',
  price: 'Цена 2',
  hoverSrc: 'img/tshirt_hover.png',
  mainSrc: 'img/tshirt_main.png',
  tagline: 'Текст 2',
  colection: 'The Ascendance of Darkness',
  modalSrc: ['img/tshirt_main.png', 'img/tshirt_main.png', 'img/tshirt_hover.png'],
  descr: 'А вот и мой следущий подарок. Он избавит тебя от навязанных толпами невежд качеств. Во тьме ты сможешь узреть истинную красоту и уродство...',
  composition: 'Кулирка : 92% Лайкра : 8%'
}, {
  name: 'Supressed Feelings',
  price: 'Цена 3',
  hoverSrc: 'img/tshirt_hover.png',
  mainSrc: 'img/tshirt_main.png',
  tagline: 'Текст 3',
  colection: 'The Ascendance of Darkness',
  modalSrc: ['img/tshirt_main.png', 'img/tshirt_main.png', 'img/tshirt_main.png'],
  descr: 'Чтобы сохранить статус в обществе ты привык гасить переполняющия тебя чувства. Прими мой третий подарок и сделай выбор: выплеснуть весь океан этих эмоций или же навсегда от них отказаться. В любом случае тьма способна удовлетворить твой выбор...',
  composition: 'Кулирка : 92% Лайкра : 8%'
}, {
  name: 'Unformed Darkness',
  price: 'Цена 4',
  hoverSrc: 'img/tshirt_hover.png',
  mainSrc: 'img/tshirt_main.png',
  tagline: 'Текст 4',
  colection: 'The Ascendance of Darkness',
  modalSrc: ['img/tshirt_hover.png', 'img/tshirt_hover.png', 'img/tshirt_hover.png'],
  descr: 'Теперь ты готов к моему последнему подарку. Прими его и приблизься к совершенству. Но помни о главном - тьма может принимать любую форму. Теперь иди и погрузи ещё больше людей в нашу веру...',
  composition: 'Кулирка : 92% Лайкра : 8%'
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function animateHeader() {
  const navbar = document.querySelector('nav');

  function headerClass() {
    navbar.classList.remove('visible');
    navbar.classList.add('animate__animated');
    navbar.classList.add('animate__fadeInDown');
  }

  setTimeout(headerClass, 1500);
  const photo = document.querySelector('#photo'),
        products = document.querySelector('#products'),
        //   contacts = document.querySelector('#contacts'),
  faq = document.querySelector('#faq'),
        faqScrollPoint = document.querySelector('.accordion'),
        photoScrollPoint = document.querySelector('.photo'),
        productsScrollPoint = document.querySelector('.products'),
        contactsScrollPoint = document.querySelector('.contacts'),
        about = document.querySelector('#about'),
        aboutScrollPoint = document.querySelector('.about');

  function scrollWeb(selector, scrollPoint) {
    // selector.addEventListener('mouseenter', (e)=>{
    //     e.target.classList.add('changeColor');
    // });
    // selector.addEventListener('mouseleave', (e)=>{
    //     e.target.classList.remove('changeColor');
    // });
    selector.addEventListener('click', () => {
      scrollPoint.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  scrollWeb(photo, photoScrollPoint);
  scrollWeb(products, productsScrollPoint); // scrollWeb(contacts, contactsScrollPoint);

  scrollWeb(faq, faqScrollPoint);
  scrollWeb(about, aboutScrollPoint);

  function showNavElemActive(firstPoint, secondPoint, navItem) {
    const a = firstPoint.getBoundingClientRect().top - 1,
          b = secondPoint.getBoundingClientRect().top;
    window.addEventListener('scroll', () => {
      if (window.scrollY > a && window.scrollY < b) {
        navItem.classList.add('changeScrollColor');
      } else {
        navItem.classList.remove('changeScrollColor');
      }
    });
  }

  showNavElemActive(productsScrollPoint, photoScrollPoint, products);
  showNavElemActive(photoScrollPoint, aboutScrollPoint, photo);
  showNavElemActive(aboutScrollPoint, faqScrollPoint, about);
  showNavElemActive(faqScrollPoint, contactsScrollPoint, faq);
}

/* harmony default export */ __webpack_exports__["default"] = (animateHeader);

/***/ }),

/***/ "./src/js/images.js":
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");


function images() {
  const photos = document.querySelectorAll('.photo__item img'),
        wrapper = document.querySelector('.images__wrapper'),
        prev = document.querySelector('.images__wrapper-prev'),
        next = document.querySelector('.images__wrapper-next'),
        images = document.querySelector('.images'),
        header = document.querySelector('.header');
  let srcArray = [];

  for (let i = 0; i < photos.length; i++) {
    srcArray.push(photos[i].src.replace('http://localhost:3000/', ''));
  }

  let items = [];

  for (let i = 0; i < srcArray.length; i++) {
    let item = document.createElement('img');
    item.src = srcArray[i];
    item.alt = `number of photo: ${i}`;
    items.push(item);
    wrapper.append(item);
  }

  let counter = 0;

  function sliderInitial() {
    items.forEach((item, i) => {
      item.classList.add('imgHide');

      if (counter == i) {
        item.classList.remove('imgHide');
      }
    });
  }

  prev.addEventListener('click', () => {
    if (counter == 0) {
      counter = items.length - 1;
    } else {
      counter--;
    }

    sliderInitial();
  });
  next.addEventListener('click', () => {
    if (counter == items.length - 1) {
      counter = 0;
    } else {
      counter++;
    }

    sliderInitial();
  });
  photos.forEach((photo, i) => {
    photo.addEventListener('click', () => {
      counter = i;
      sliderInitial();
      Object(_slider__WEBPACK_IMPORTED_MODULE_0__["modalTogal"])(images, wrapper, header, 'images__active', 'images__wrapper-active');
    });
  });
  images.addEventListener('click', e => {
    if (e.target == images) {
      Object(_slider__WEBPACK_IMPORTED_MODULE_0__["modalTogal"])(images, wrapper, header, 'images__active', 'images__wrapper-active');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/js/header.js");
/* harmony import */ var _titlebox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titlebox */ "./src/js/titlebox.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ "./src/js/products.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ "./src/js/accordion.js");
/* harmony import */ var _pageup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageup */ "./src/js/pageup.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images */ "./src/js/images.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about */ "./src/js/about.js");








document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  Object(_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_titlebox__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_products__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_accordion__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_pageup__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modal__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_images__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_about__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");



function modal() {
  const title = document.querySelector('.modal__title'),
        descr = document.querySelector('.modal__descr span'),
        composition = document.querySelector('.modal__materials'),
        price = document.querySelector('.modal__price'),
        srcSlider = document.querySelectorAll('.modal__slider-wrapper img'),
        srcTabs = document.querySelectorAll('.modal__tabs-item img'),
        products = document.querySelectorAll('.products__item'),
        header = document.querySelector('.header'),
        modal = document.querySelector('.modal'),
        modalBlock = document.querySelector('.modal__wrapper'),
        modalClose = document.querySelector('.modal__close');

  function setInfo(array, i, arg, selector) {
    selector.textContent = array[i][`${arg}`];
  }

  function setSrc(selector, arg, array, numberOfElement) {
    selector.forEach((item, i) => {
      item.src = array[numberOfElement][`${arg}`][i];
    });
  }

  products.forEach((product, i) => {
    product.addEventListener('click', () => {
      setInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], i, "name", title);
      setInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], i, "descr", descr);
      setInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], i, "composition", composition);
      setInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], i, "price", price);
      setSrc(srcSlider, "modalSrc", _data__WEBPACK_IMPORTED_MODULE_0__["default"], i);
      setSrc(srcTabs, "modalSrc", _data__WEBPACK_IMPORTED_MODULE_0__["default"], i);
      Object(_slider__WEBPACK_IMPORTED_MODULE_1__["modalTogal"])(modal, modalBlock, header, 'modal__active', 'modal__wrapper-active');
    });
  });
  modalClose.addEventListener('click', () => {
    Object(_slider__WEBPACK_IMPORTED_MODULE_1__["modalTogal"])(modal, modalBlock, header, 'modal__active', 'modal__wrapper-active');
  });
  modal.addEventListener('click', e => {
    if (e.target == modal) {
      Object(_slider__WEBPACK_IMPORTED_MODULE_1__["modalTogal"])(modal, modalBlock, header, 'modal__active', 'modal__wrapper-active');
    }
  });
  const images = document.querySelectorAll('.modal__slider-wrapper img'),
        next = document.querySelector('.modal__slider-next'),
        prev = document.querySelector('.modal__slider-prev'),
        tabs = document.querySelectorAll('.modal__tabs-item');
  let counter = 0;

  function sliderInitial() {
    images.forEach((item, i) => {
      item.classList.add('imgHide');

      if (counter == i) {
        item.classList.remove('imgHide');
      }
    });
  }

  sliderInitial();
  prev.addEventListener('click', () => {
    if (counter == 0) {
      counter = images.length - 1;
    } else {
      counter--;
    }

    sliderInitial();
  });
  next.addEventListener('click', () => {
    if (counter == images.length - 1) {
      counter = 0;
    } else {
      counter++;
    }

    sliderInitial();
  });
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      counter = i;
      sliderInitial();
      return counter;
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/pageup.js":
/*!**************************!*\
  !*** ./src/js/pageup.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function pageUp() {
  const pageUpElem = document.querySelector('.pageup');
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 3000) {
      pageUpElem.classList.add('pageup__active');
    } else {
      pageUpElem.classList.remove('pageup__active');
    }
  });
  const header = document.querySelector('header');
  pageUpElem.addEventListener('click', function () {
    if (this.classList.contains('pageup__active')) {
      header.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (pageUp);

/***/ }),

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");


function products() {
  const items = document.querySelectorAll('.products__item'),
        itemPrices = document.querySelectorAll('.products__item-price'),
        itemNames = document.querySelectorAll('.products__item-name'),
        srcPaths = document.querySelectorAll('.products__item-photo img'),
        collectionInfo = document.querySelector('.products__collection');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 700) {
      collectionInfo.classList.add('products__collection-active');
    }
  });

  function setInfo(array, selector, element, arg) {
    selector.forEach((item, i) => {
      if (element.contains(item)) {
        item.textContent = array[i][`${arg}`];
      }
    });
  }

  function setHoverInfo(array, selector, element, arg) {
    selector.forEach((item, i) => {
      if (element.contains(item)) {
        item.style.opacity = '0';
        setTimeout(function () {
          item.textContent = array[i][`${arg}`];
          item.style.opacity = '1';
        }, 400);
      }
    });
  }

  function setSrc(array, selector, element, arg) {
    selector.forEach((item, i) => {
      if (element.contains(item)) {
        item.style.opacity = '0';
        setTimeout(function () {
          item.src = array[i][`${arg}`];
          item.style.opacity = '1';
        }, 400);
      }
    });
  }

  items.forEach(item => {
    setInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], itemNames, item, "name");
    setInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], itemPrices, item, "price");
    item.addEventListener('mouseenter', () => {
      setSrc(_data__WEBPACK_IMPORTED_MODULE_0__["default"], srcPaths, item, "hoverSrc");
      setHoverInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], itemPrices, item, "colection");
      setHoverInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], itemNames, item, "tagline");
    });
    item.addEventListener('mouseleave', () => {
      setSrc(_data__WEBPACK_IMPORTED_MODULE_0__["default"], srcPaths, item, "mainSrc");
      setHoverInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], itemNames, item, "name");
      setHoverInfo(_data__WEBPACK_IMPORTED_MODULE_0__["default"], itemPrices, item, "price");
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! exports provided: modalTogal, counterIncrease, counterDecrease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalTogal", function() { return modalTogal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterIncrease", function() { return counterIncrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterDecrease", function() { return counterDecrease; });
function counterIncrease(array) {
  if (counter == array.length - 1) {
    counter = 0;
  } else {
    counter++;
  }

  return counter;
}

const counterDecrease = array => {
  if (counter == 0) {
    counter = array.length - 1;
  } else {
    counter--;
  }

  return counter;
};

function modalTogal(modal, modalWrapper, header, activeClass, wrapperActiveClass) {
  modal.classList.toggle(activeClass);
  header.classList.toggle('header__hide');

  if (document.body.style.overflow == "hidden") {
    document.body.style.overflow = "";
    modalWrapper.classList.toggle(wrapperActiveClass);
  } else {
    document.body.style.overflow = "hidden";
    setTimeout(function () {
      modalWrapper.classList.toggle(wrapperActiveClass);
    }, 300);
  }
}



/***/ }),

/***/ "./src/js/titlebox.js":
/*!****************************!*\
  !*** ./src/js/titlebox.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function animateBtn() {
  const navBlack = document.querySelector('.titlebox__btn');

  function btnClass() {
    navBlack.classList.remove('visible');
    navBlack.classList.add('animate__animated');
    navBlack.classList.add('animate__fadeInUp');
  }

  setTimeout(btnClass, 1500);
  const btn = document.querySelector('.titlebox__btn'),
        products = document.querySelector('.products');
  btn.addEventListener('click', () => {
    products.scrollIntoView({
      behavior: "smooth"
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (animateBtn);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map