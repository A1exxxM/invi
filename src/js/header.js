function animateHeader() {
    const navBlack = document.querySelector('nav');
    function headerClass() {
        navBlack.classList.remove('visible');
        navBlack.classList.add('animate__animated');
        navBlack.classList.add('animate__fadeInDown');
    }
    setTimeout(headerClass, 1500);
}

export default animateHeader;