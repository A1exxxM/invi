function showDescr() {
    const itemAccordion = document.querySelectorAll('.accordion__item');

    itemAccordion.forEach(item=> {
        item.firstChild.addEventListener('click', () => {
            item.lastChild.classList.toggle('accordion__item-visible');
        });
        item.lastChild.addEventListener('click', (e) => {
            if (e.target.classList.contains('accordion__item-visible')){
                e.target.classList.toggle('accordion__item-visible');
            }
        });
        item.lastChild.firstChild.addEventListener('click', (e) => {
            if (e.target.parentNode.classList.contains('accordion__item-visible')){
                e.target.parentNode.classList.toggle('accordion__item-visible');
            }
        });
        item.firstChild.addEventListener('mouseover', () => {
            item.firstChild.lastChild.classList.add('changePlus');
            item.firstChild.lastChild.firstChild.style.backgroundColor = '#000';
            item.firstChild.lastChild.lastChild.style.backgroundColor = '#000';
        });
        item.firstChild.addEventListener('mouseout', () => {
            item.firstChild.lastChild.classList.remove('changePlus');
            item.firstChild.lastChild.firstChild.style.backgroundColor = '#fff';
            item.firstChild.lastChild.lastChild.style.backgroundColor = '#fff';
        });
    });
}
export default showDescr;