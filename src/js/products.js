import data from "./data";
function products() {
    
    const items = document.querySelectorAll('.products__item'),
          itemPrices = document.querySelectorAll('.products__item-price'),
          itemNames = document.querySelectorAll('.products__item-name'),
          itemMainPrices = document.querySelectorAll('.products__item-mainPrice'),
          itemPriceWrapper = document.querySelectorAll('.products__item-wrapper'),
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

    function togglePriceWrapperActive(selector,element) {
        selector.forEach((item,i) => {
            if (element.contains(item)) {
                itemMainPrices[i].style.opacity = '0';
                setTimeout(function() {
                    item.classList.toggle('products__item-wrapper_active');
                    setMainPrice(data,itemMainPrices,element,"mainPrice",item);
                },400);
            }
        });
    }

    function setMainPrice(array,selector,element,arg,item) {
        selector.forEach((elem,i) => {
            if (element.contains(elem)) {
                if (!item.classList.contains('products__item-wrapper_active')) {
                        elem.textContent = array[i][`${arg}`];
                        elem.style.opacity = '1';
                } else {
                        elem.textContent = '';
                        elem.style.opacity = '1';
                }
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

    items.forEach((item,i) => {
        setInfo(data,itemNames,item,"name");
        setInfo(data,itemPrices,item,"price");
        setInfo(data,itemMainPrices,item,"mainPrice");
        item.addEventListener('mouseenter', ()=>{
            setSrc(data,srcPaths,item,"hoverSrc");
            setHoverInfo(data,itemPrices,item,"colection");
            setHoverInfo(data,itemNames,item,"tagline");
            togglePriceWrapperActive(itemPriceWrapper,item);
        });
        item.addEventListener('mouseleave', ()=>{
            setSrc(data,srcPaths,item,"mainSrc");
            setHoverInfo(data,itemNames,item,"name");
            setHoverInfo(data,itemPrices,item,"price");
            togglePriceWrapperActive(itemPriceWrapper,item);
        });
    });  
}

export default products;