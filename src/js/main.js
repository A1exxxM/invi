import animateHeader from "./header";
import sliderScroll from "./slider";
import animateBtn from "./titlebox";
import changeColor from './products';
import showDescr from "./accordion";
document.addEventListener('DOMContentLoaded',() => {
animateHeader();
animateBtn();
sliderScroll();
changeColor();
showDescr();
});