function animateHeader() {
    const navbar = document.querySelector('nav');
    function headerClass() {
        navbar.classList.remove('visible');
        navbar.classList.add('animate__animated');
        navbar.classList.add('animate__fadeInDown');
    }
    setTimeout(headerClass, 1500);
    const photo = document.querySelector('#photo'),
          products = document.querySelector('#products'),
          contacts = document.querySelector('#contacts'),
          photoScrollPoint = document.querySelector('.slider'),
          productsScrollPoint = document.querySelector('.products'),
          contactsScrollPoint = document.querySelector('.contacts'),
          links = document.querySelectorAll('.header__list-item');
    function scrollWeb(selector, scrollPoint) {
        selector.addEventListener('mouseenter', ()=> {
            links.forEach(item =>{
                item.style.color = '#000';
            });
            navbar.style.backgroundColor = '#fff';
        });
        selector.addEventListener('mouseleave', ()=> {
            links.forEach(item =>{
                item.style.color = '#fff';
            });
            navbar.style.backgroundColor = '#000';
        });
        selector.addEventListener('click', ()=>{
            scrollPoint.scrollIntoView({behavior: "smooth"});
        });
    }
    scrollWeb(photo, photoScrollPoint);
    scrollWeb(products, productsScrollPoint);
    scrollWeb(contacts, contactsScrollPoint);
}

export default animateHeader;