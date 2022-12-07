function slider(){

    const slides = document.querySelectorAll('.slider__item'),
          overlay = document.querySelector('.slider__overlay'),
          btns = document.createElement('div');
          
    btns.classList.add('slider__btns');
    overlay.appendChild(btns);

    slides.forEach(() => {
        const dot = document.createElement('div');
        dot.classList.add('slider__btn');
        btns.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider__btn');
    let slideIndex = 0;
    changeIndex();
    
    function changeIndex() {
        if (slideIndex == dots.length) {
            slideIndex = 0;
        }
        dots.forEach(item => {
            item.classList.remove('slider__btn-active');
        });
        slides.forEach(item => {
            item.classList.remove('slider__item-active');
        });
        dots[slideIndex].classList.add('slider__btn-active');
        slides[slideIndex].classList.add('slider__item-active');
        slideIndex++;
    }
    let timer;
    
    function setTimer(){
        timer = setInterval(changeIndex, 3000);
        
    }
    setTimer();
    
    
    dots.forEach((dot, index) => {
        let current = '';
        
        
        dot.addEventListener('click', (event) => {
            current = index;
            clearInterval(timer);
            dots.forEach(item => {
                item.classList.remove('slider__btn-active');
            });
            if (event.target) {
                event.target.classList.add('slider__btn-active');
            } 
            
            slides.forEach((slide, index) => {
                slide.classList.remove('slider__item-active');
                if (index === current) {
                    slide.classList.add('slider__item-active');
                }
            });
            slideIndex = current + 1;
            setTimer();
        });
    });
    
    
    
    
    

    
}

export default slider;

