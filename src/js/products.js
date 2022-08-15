import data from "./data";
function products() {
    
    const items = document.querySelectorAll('.products__item'),
          itemPrices = document.querySelectorAll('.products__item-price'),
          itemNames = document.querySelectorAll('.products__item-name'),
          srcPaths = document.querySelectorAll('.products__item-photo img'),
          collectionInfo = document.querySelector('.products__collection');

    window.addEventListener('scroll', ()=> {
        if (window.scrollY >= 700) {
            collectionInfo.classList.add('products__collection-active');
        }
    });
    

    function setInfo(array, selector, element, arg) {
        
            selector.forEach((item,i) => {
                if (element.contains(item)) {
                    item.textContent = array[i][`${arg}`];
                }
            });
        
        
    }

    function setHoverInfo(array,selector,element,arg) {
        selector.forEach((item, i) => {
            if (element.contains(item)) {
                item.style.opacity = '0';
                setTimeout(function(){
                    item.textContent = array[i][`${arg}`];
                    item.style.opacity = '1';
                },400);
            }
        });
    }

    function setSrc(array,selector,element,arg) {
        selector.forEach((item, i) => {
            if (element.contains(item)) {
                item.style.opacity = '0';
                setTimeout(function(){
                    item.src = array[i][`${arg}`];
                    item.style.opacity = '1';
                },400);
            }
        });
    }

    items.forEach(item => {
        setInfo(data,itemNames,item,"name");
        setInfo(data,itemPrices,item,"price");
        item.addEventListener('mouseenter', ()=>{
            setSrc(data,srcPaths,item,"hoverSrc");
            setHoverInfo(data,itemPrices,item,"colection");
            setHoverInfo(data,itemNames,item,"tagline");
        });
        item.addEventListener('mouseleave', ()=>{
            setSrc(data,srcPaths,item,"mainSrc");
            setHoverInfo(data,itemNames,item,"name");
            setHoverInfo(data,itemPrices,item,"price");
        });
    });  
}

export default products;