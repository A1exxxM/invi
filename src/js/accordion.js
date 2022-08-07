function showDescr() {
    const itemAccordion = document.querySelectorAll('.accordion__item'),
          itemHeaders = document.querySelectorAll('.accordion__item-header'), // item.firstChild
          itemDescrs = document.querySelectorAll('.accordion__item-descr'), // item.lastChild
          itemCloses = document.querySelectorAll('.accordion__item-close'), //item.firstChild.lastChild
          itemTexts = document.querySelectorAll('.accordion__item-text'), //item.lastChild.firstChild
          itemSpans = document.querySelectorAll('.accordion__item-close span'); //item.firstChild.lastChild.firstChild

    function toggleClassesHeader(mainSelector,firstArray,item,secondArray) {
        mainSelector.forEach((elem,i) => {
            elem.addEventListener('click', ()=>{
                if (item.contains(elem)) {
                    firstArray[i].classList.toggle('accordion__item-visible');
                    secondArray[i].classList.toggle('accordion__item-transformSquare');
                }
            });
        });
    }

    function toggleClassesBody(mainSelector,array,item,arrayParent = undefined) {
        mainSelector.forEach((elem,i) => {
            elem.addEventListener('click', (e)=>{
                if (item.contains(elem)) {
                    if (arrayParent == undefined) {
                        if (e.target.classList.contains('accordion__item-visible')){
                            e.target.classList.toggle('accordion__item-visible');
                            array[i].classList.toggle('accordion__item-transformSquare');
                        }
                    } else {
                        if (arrayParent[i].classList.contains('accordion__item-visible')) {
                            arrayParent[i].classList.toggle('accordion__item-visible');
                            array[i].classList.toggle('accordion__item-transformSquare');
                        }
                    }
                }
            });
        });
    }
    
    function hoverPlus(mainSelector, color,typeOfHoverListener, arraySpans, arrayParent,item) {
        mainSelector.forEach((elem,i) => {
            if(item.contains(elem)) {
                elem.addEventListener(typeOfHoverListener,()=>{
                    arrayParent[i].classList.toggle('changePlus');
                    arraySpans.forEach(span => {
                        if (arrayParent[i].contains(span)) {
                            span.style.backgroundColor = color;
                        }
                    });
                });
            }
        });
    }

    itemAccordion.forEach(item=> {
        toggleClassesHeader(itemHeaders,itemDescrs,item,itemCloses);
        toggleClassesBody(itemDescrs,itemCloses,item);
        toggleClassesBody(itemTexts,itemCloses,item,itemDescrs);
        hoverPlus(itemHeaders,'#000','mouseover',itemSpans,itemCloses,item);
        hoverPlus(itemHeaders,'#fff','mouseout',itemSpans,itemCloses,item);
    });
}
export default showDescr;