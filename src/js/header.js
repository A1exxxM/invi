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
          faq = document.querySelector('#faq'),
          faqScrollPoint = document.querySelector('.accordion__item'),
          photoScrollPoint = document.querySelector('.photo'),
          productsScrollPoint = document.querySelector('.products'),
          contactsScrollPoint = document.querySelector('.contacts'),
          about = document.querySelector('#about'),
          aboutScrollPoint = document.querySelector('.about');
    function scrollWeb(selector, scrollPoint) {
        selector.addEventListener('mouseenter', (e)=>{
            e.target.classList.add('changeColor');
        });
        selector.addEventListener('mouseleave', (e)=>{
            e.target.classList.remove('changeColor');
        });
        selector.addEventListener('click', ()=>{
            scrollPoint.scrollIntoView({behavior: "smooth"});
        });
    }
    scrollWeb(photo, photoScrollPoint);
    scrollWeb(products, productsScrollPoint);
    scrollWeb(contacts, contactsScrollPoint);
    scrollWeb(faq, faqScrollPoint);
    scrollWeb(about, aboutScrollPoint);
}

export default animateHeader;