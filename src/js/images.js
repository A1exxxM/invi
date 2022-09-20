import {modalTogal} from './slider';
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
    let items =[];
    for (let i = 0; i < srcArray.length; i++) {
        let item = document.createElement('img');
        item.src = srcArray[i];
        item.alt = `number of photo: ${i}`;
        items.push(item);
        wrapper.append(item);
    }

    let counter = 0;

    function sliderInitial() {
        items.forEach((item,i) => {
            
            item.classList.add('imgHide');
            if (counter == i) {
                if (i == 1 || i == 2 || i == 5 || i == 9) {
                    wrapper.classList.add('images__wrapper-changeSize');
                } else {
                    wrapper.classList.remove('images__wrapper-changeSize');
                }
                item.classList.remove('imgHide');
            }
            
        });
    }

    prev.addEventListener('click', ()=> {
        if (counter == 0) {
            counter = items.length - 1;
        } else {
            counter--;
        }
        sliderInitial();
    });

    next.addEventListener('click', ()=> {
        if (counter == items.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        sliderInitial();
    });

    photos.forEach((photo,i) => {
        photo.addEventListener('click', ()=>{
            counter = i;
            sliderInitial();
            modalTogal(images,wrapper,header,'images__active','images__wrapper-active');
        });
    });
    images.addEventListener('click', (e)=>{
        if (e.target == images) {
            modalTogal(images,wrapper,header,'images__active','images__wrapper-active');
        }
    });

}

export default images;