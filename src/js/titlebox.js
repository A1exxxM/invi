function animateBtn() {
    const navBlack = document.querySelector('.titlebox__btn');
    function btnClass() {
        navBlack.classList.remove('visible');
        navBlack.classList.add('animate__animated');
        navBlack.classList.add('animate__fadeInUp');
    }
    setTimeout(btnClass, 1500);
    const btn = document.querySelector('.titlebox__btn'),
          sliderWrapper = document.querySelector('.slider__content-inner');
    btn.addEventListener('click',()=>{
        sliderWrapper.scrollIntoView({behavior: "smooth"});
    });
}
export default animateBtn;