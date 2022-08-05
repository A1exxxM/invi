import animateHeader from "./header";
import animateBtn from "./titlebox";
import changeColor from './products';
import showDescr from "./accordion";
import pageUp from "./pageup";
document.addEventListener('DOMContentLoaded',() => {
animateHeader();
animateBtn();
changeColor();
showDescr();
pageUp();
});