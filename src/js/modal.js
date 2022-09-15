import data from "./data";
import {modalTogal} from './slider';
function modal() {
    const title = document.querySelector('.modal__title'),
          descr = document.querySelector('.modal__descr span'),
          composition = document.querySelector('.modal__materials'),
          price = document.querySelector('.modal__price'),
          mainPrice = document.querySelector('.modal__mainPrice'),
          srcSlider = document.querySelectorAll('.modal__slider-wrapper img'),
          srcTabs = document.querySelectorAll('.modal__tabs-item img'),
          form = document.querySelector('.modal__links form'),
          products = document.querySelectorAll('.products__item'),
          header = document.querySelector('.header'),
          modal = document.querySelector('.modal'),
          modalBlock = document.querySelector('.modal__wrapper'),
          modalClose = document.querySelector('.modal__close');

    
          
    function setInfo(array,i,arg,selector) {
        selector.textContent = array[i][`${arg}`];
    }
    
    function setSrc(selector,arg,array,numberOfElement) {
        selector.forEach((item,i) => {
            item.src = array[numberOfElement][`${arg}`][i];
        });
    }
    


    products.forEach((product,i) => {
        product.addEventListener('click', ()=> {
            setInfo(data,i,"name",title);
            setInfo(data,i,"descr",descr);
            setInfo(data,i,"composition",composition);
            setInfo(data,i,"price",price);
            setInfo(data,i,"mainPrice",mainPrice);
            setSrc(srcSlider,"modalSrc",data,i);
            setSrc(srcTabs,"modalSrc",data,i);
            form.action = data[i].link;
            modalTogal(modal,modalBlock,header,'modal__active','modal__wrapper-active');
        });
    });

    modalClose.addEventListener('click', ()=>{
        modalTogal(modal,modalBlock,header,'modal__active','modal__wrapper-active');
    });

    modal.addEventListener('click', (e)=>{
        if (e.target == modal) {
            modalTogal(modal,modalBlock,header,'modal__active','modal__wrapper-active');
        }
    });
    
    const images = document.querySelectorAll('.modal__slider-wrapper img'),
          next = document.querySelector('.modal__slider-next'),
          prev = document.querySelector('.modal__slider-prev'),
          tabs = document.querySelectorAll('.modal__tabs-item');

    let counter = 0;


    function sliderInitial() {
        images.forEach((item,i) => {
            
            item.classList.add('imgHide');
            if (counter == i) {
                item.classList.remove('imgHide');
                
            }
            
        });
    }
    sliderInitial();
    prev.addEventListener('click', ()=> {
        if (counter == 0) {
            counter = images.length - 1;
        } else {
            counter--;
        }
        sliderInitial();
    });
    next.addEventListener('click', ()=> {
        if (counter == images.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        sliderInitial();
    });
    tabs.forEach((tab,i) => {
        tab.addEventListener('click', () => {
            counter = i;
            sliderInitial();
            return counter;
        });
    });

}

export default modal;