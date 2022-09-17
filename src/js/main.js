import animateHeader from "./header";
import animateBtn from "./titlebox";
import products from './products';
import showDescr from "./accordion";
import modal from "./modal";
import images from "./images";
import about from "./about";
document.addEventListener('DOMContentLoaded',() => {
"use strict";
animateHeader();
animateBtn();
products();
showDescr();
modal();
images();
about();
});