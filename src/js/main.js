import animateHeader from "./header";
import animateBtn from "./titlebox";
import products from './products';
import showDescr from "./accordion";
import pageUp from "./pageup";
import modal from "./modal";
document.addEventListener('DOMContentLoaded',() => {
"use strict";
animateHeader();
animateBtn();
products();
showDescr();
pageUp();
modal();
});