function counterIncrease(array) {

    if (counter == array.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    return counter;

}

const counterDecrease = (array) => {
    if (counter == 0) {
        counter = array.length - 1;
    } else {
        counter--;
    }
    return counter;
}

function modalTogal(modal,modalWrapper,header,activeClass,wrapperActiveClass) {
    modal.classList.toggle(activeClass);
    header.classList.toggle('header__hide');
        if (document.body.style.overflow == "hidden") {
            document.body.style.overflow = "";
            modalWrapper.classList.toggle(wrapperActiveClass);
        } else {
            document.body.style.overflow = "hidden";
            setTimeout(function(){
                modalWrapper.classList.toggle(wrapperActiveClass);
            },300);
        }
}

export {modalTogal,counterIncrease,counterDecrease};