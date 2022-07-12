function animateBtn() {
    const navBlack = document.querySelector('.titlebox__btn');
    function btnClass() {
        navBlack.classList.remove('visible');
        navBlack.classList.add('animate__animated');
        navBlack.classList.add('animate__fadeInUp');
    }
    setTimeout(btnClass, 1500);
}
export default animateBtn;