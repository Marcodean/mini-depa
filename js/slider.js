
(function(){
    const sliders= [...document.querySelectorAll('.slider-body')];
    const arrowNext= document.querySelector('#next');
    const arrowBefore= document.querySelector('#before');
    let value;
    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));
    console.log(sliders)
    function changePosition(change){
        const currentElement= Number(document.querySelector('.slider-body-show').dataset.id);
        value=currentElement;
        value += change;
        console.log(value)
        console.log(sliders.length)
        if(value===0 || value == sliders.length+1){
            value= value ===0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider-body-show');
        sliders[value-1].classList.toggle('slider-body-show');
    }
    //////////////////

    const sliders2= [...document.querySelectorAll('.slider-body2')];
    const arrowNext2= document.querySelector('#next2');
    const arrowBefore2= document.querySelector('#before2');
    let value2;
    arrowNext2.addEventListener('click', () => changePosition2(1));
    arrowBefore2.addEventListener('click', () => changePosition2(-1));
    console.log(sliders2)
    function changePosition2(change2){
        const currentElement2= Number(document.querySelector('.slider-body-show2').dataset.id);
        value2=currentElement2;
        value2 += change2;
        console.log(value2)
        console.log(sliders.length)
        if(value2===0 || value2 == sliders2.length+1){
            value2= value2 ===0 ? sliders2.length : 1;
        }

        sliders2[currentElement2-1].classList.toggle('slider-body-show2');
        sliders2[value2-1].classList.toggle('slider-body-show2');
    }
})()

