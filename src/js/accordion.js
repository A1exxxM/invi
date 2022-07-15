function showDescr() {
    const itemAccordion = document.querySelectorAll('.accordion__item');

    itemAccordion.forEach(item=> {
        item.firstChild.addEventListener('click', () => {
            item.lastChild.classList.toggle('accordion__item-none');
        });
    });
}
export default showDescr;