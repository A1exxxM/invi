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
        //   contacts = document.querySelector('#contacts'),
          faq = document.querySelector('#faq'),
          faqScrollPoint = document.querySelector('.accordion'),
          photoScrollPoint = document.querySelector('.photo'),
          productsScrollPoint = document.querySelector('.products'),
          contactsScrollPoint = document.querySelector('.contacts'),
          about = document.querySelector('#about'),
          aboutScrollPoint = document.querySelector('.about');
    function scrollWeb(selector, scrollPoint) {
        // selector.addEventListener('mouseenter', (e)=>{
        //     e.target.classList.add('changeColor');
        // });
        // selector.addEventListener('mouseleave', (e)=>{
        //     e.target.classList.remove('changeColor');
        // });
        selector.addEventListener('click', ()=>{
            scrollPoint.scrollIntoView({behavior: "smooth"});
        });
    }
    scrollWeb(photo, photoScrollPoint);
    scrollWeb(products, productsScrollPoint);
    // scrollWeb(contacts, contactsScrollPoint);
    scrollWeb(faq, faqScrollPoint);
    scrollWeb(about, aboutScrollPoint);


    
    


    function showNavElemActive(firstPoint,secondPoint,navItem) {
        const a = firstPoint.getBoundingClientRect().top - 1,
              b = secondPoint.getBoundingClientRect().top - 1;

        window.addEventListener('scroll', () => {
            if (window.scrollY > a && window.scrollY < b) {
                navItem.classList.add('changeScrollColor');
            } else {
                navItem.classList.remove('changeScrollColor');
            }
        });

    }
    showNavElemActive(productsScrollPoint,photoScrollPoint,products);
    showNavElemActive(photoScrollPoint,aboutScrollPoint,photo);
    showNavElemActive(aboutScrollPoint,faqScrollPoint,about);
    showNavElemActive(faqScrollPoint,contactsScrollPoint,faq);
    
}

export default animateHeader;