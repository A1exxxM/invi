import animateHeader from "./header";
import animateBtn from "./titlebox";
import products from './products';
import showDescr from "./accordion";
import pageUp from "./pageup";
document.addEventListener('DOMContentLoaded',() => {
animateHeader();
animateBtn();
products();
showDescr();
pageUp();
});