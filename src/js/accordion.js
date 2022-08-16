function showDescr() {
    const itemAccordion = document.querySelectorAll('.accordion__item'),
          itemHeaders = document.querySelectorAll('.accordion__item-header'), // item.firstChild
          itemDescrs = document.querySelectorAll('.accordion__item-descr'), // item.lastChild
          itemCloses = document.querySelectorAll('.accordion__item-close'), //item.firstChild.lastChild
          itemTexts = document.querySelectorAll('.accordion__item-text'), //item.lastChild.firstChild
          itemSpans = document.querySelectorAll('.accordion__item-close span'); //item.firstChild.lastChild.firstChild

    function toggleClassesHeader(mainSelector,firstArray,item,secondArray,thirdArray) {
        mainSelector.forEach((elem,i) => {
            elem.addEventListener('click', ()=>{
                if (item.contains(elem)) {
                    if (!thirdArray[i].classList.contains('accordion__item-text_active')) {
                        firstArray[i].classList.toggle('accordion__item-visible');
                        secondArray[i].classList.toggle('accordion__item-transformSquare');
                        setTimeout(function() {
                            thirdArray[i].classList.toggle('accordion__item-text_active');
                        },700);
                    } else {
                        thirdArray[i].classList.toggle('accordion__item-text_active');
                        setTimeout(function() {
                            firstArray[i].classList.toggle('accordion__item-visible');
                            secondArray[i].classList.toggle('accordion__item-transformSquare');
                        },700);
                    }
                }
            });
        });
    }

    function toggleClassesBody(mainSelector,array,item,arrayText,arrayParent = undefined) {
        mainSelector.forEach((elem,i) => {
            elem.addEventListener('click', (e)=>{
                if (item.contains(elem)) {
                    if (arrayParent == undefined) {
                        if (e.target.classList.contains('accordion__item-visible')){
                            arrayText[i].classList.toggle('accordion__item-text_active');
                            setTimeout(function() {
                                e.target.classList.toggle('accordion__item-visible');
                                array[i].classList.toggle('accordion__item-transformSquare');
                            },700);
                        }
                    } else {
                        if (arrayParent[i].classList.contains('accordion__item-visible')) {
                            arrayText[i].classList.toggle('accordion__item-text_active');
                            setTimeout(function() {
                                arrayParent[i].classList.toggle('accordion__item-visible');
                                array[i].classList.toggle('accordion__item-transformSquare');
                            },700);
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
        toggleClassesHeader(itemHeaders,itemDescrs,item,itemCloses,itemTexts);
        toggleClassesBody(itemDescrs,itemCloses,item,itemTexts);
        toggleClassesBody(itemTexts,itemCloses,item,itemTexts,itemDescrs);
        hoverPlus(itemHeaders,'#000','mouseover',itemSpans,itemCloses,item);
        hoverPlus(itemHeaders,'#fff','mouseout',itemSpans,itemCloses,item);
    });
}
export default showDescr;