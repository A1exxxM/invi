function changePrice() {
    const productPrice = document.querySelectorAll('.products__item-price'),
          productItem = document.querySelectorAll('.products__item');
    productItem.forEach(item => {
        item.addEventListener('mouseenter', (e)=>{
            e.target.lastChild.textContent = 'Подробнее';
        });
        item.addEventListener('mouseleave', (e)=>{
            e.target.lastChild.textContent = '2000 у.е';
        });
    });
}
export default changePrice;