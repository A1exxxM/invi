function pageUp() {
    const pageUpElem = document.querySelector('.pageup');
    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1600){
            pageUpElem.classList.add('pageup__active');
        } else {
            pageUpElem.classList.remove('pageup__active');
        }
    });
    const header = document.querySelector('header');
    pageUpElem.addEventListener('click', function(){
        if(this.classList.contains('pageup__active')){
            header.scrollIntoView({behavior: "smooth"});
        }
    });
}
export default pageUp;