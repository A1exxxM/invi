function about() {
    const titles = document.querySelectorAll('.about__item-title'),
          descrs = document.querySelectorAll('.about__item-descr'),
          buttons = document.querySelectorAll('.about__item-btn');

    function showElem(array,activeClass,numberOfElem) {
        array.forEach((item,i)=> {
            item.classList.remove(activeClass);
            if (i == numberOfElem) {
                item.classList.add(activeClass);
            }
        });
    }

    buttons.forEach((button,i) => {
        button.addEventListener('click',() => {
            showElem(titles,'about__item-title_active',i);
            showElem(descrs,'about__item-descr_active',i);
        });
    });

}

export default about;