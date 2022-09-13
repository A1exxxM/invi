function animateBtn() {
    const navBlack = document.querySelector('.titlebox__btn');
    function btnClass() {
        navBlack.classList.remove('visible');
        navBlack.classList.add('animate__animated');
        navBlack.classList.add('animate__fadeInUp');
    }
    setTimeout(btnClass, 1500);
    const btn = document.querySelector('.titlebox__btn'),
          products = document.querySelector('.products');
    btn.addEventListener('click',()=>{
        products.scrollIntoView({behavior: "smooth"});
    });
    const logo = document.querySelector('.titlebox__logotype');
    setTimeout(function() {
        logo.classList.add('titlebox__logotype-active');
    },1500);
}
export default animateBtn;