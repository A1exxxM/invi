function products() {
    const name = ['Модель 1', 'Модель 2', 'Модель 3'],
          price = ['Цена 1', 'Цена 2', 'Цена 3'],
          src = ['../img/tshirt_hover.png','../img/tshirt_hover.png','../img/tshirt_hover.png'],
          srcMain = ['../img/tshirt_main.png','../img/tshirt_main.png','../img/tshirt_main.png'],
          itemPricesChange = ['Текст 1', 'Текст 2', 'Текст 3'],
          itemNamesChange = ['Коллекция 1','Коллекция 1','Коллекция 1'],
          items = document.querySelectorAll('.products__item'),
          itemPrices = document.querySelectorAll('.products__item-price'),
          itemNames = document.querySelectorAll('.products__item-name'),
          srcPaths = document.querySelectorAll('.products__item-photo img');

    function setInfo(array, selector, element) {
        selector.forEach((item, i) => {
            if (element.contains(item)) {
                item.textContent = array[i];
            }
        });
    }

    function setHoverInfo(array,selector,element) {
        selector.forEach((item, i) => {
            if (element.contains(item)) {
                item.style.opacity = '0';
                setTimeout(function(){
                    item.textContent = array[i];
                    item.style.opacity = '1';
                },300);
            }
        });
    }

    function setSrc(array,selector,element) {
        selector.forEach((item, i) => {
            if (element.contains(item)) {
                item.style.opacity = '0';
                setTimeout(function(){
                    item.src = array[i];
                    item.style.opacity = '1';
                },300);
            }
        });
    }
    items.forEach(item => {
        setInfo(name,itemNames,item);
        setInfo(price,itemPrices,item);
        item.addEventListener('mouseover', ()=>{
            setSrc(src,srcPaths,item);
            setHoverInfo(itemPricesChange,itemPrices,item);
            setHoverInfo(itemNamesChange,itemNames,item);
        });
        item.addEventListener('mouseout', ()=>{
            setSrc(srcMain,srcPaths,item);
            setHoverInfo(name,itemNames,item);
            setHoverInfo(price,itemPrices,item);
        });
    });  
    
}
export default products;