function sliderScroll() {
    const slides = document.querySelectorAll('.slider__slide'),
          slidesField = document.querySelector('.slider__content'),
          slidesWrapper = document.querySelector('.slider__content-inner'),
          prevArrow = document.querySelector('#left'),
          nextArrow = document.querySelector('#right'),
          width = window.getComputedStyle(slidesField).width;
    let offset = 0;
    let slideCount = slides.length;
    slidesWrapper.style.width = 100 * slideCount + '%';
    slidesField.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    });
    prevArrow.addEventListener('click', ()=>{
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slideCount - 1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }
        slidesWrapper.style.transform = `translateX(-${offset}px)`;
    });
    nextArrow.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (slideCount - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }
        slidesWrapper.style.transform = `translateX(-${offset}px)`;
    });
}
export default sliderScroll;