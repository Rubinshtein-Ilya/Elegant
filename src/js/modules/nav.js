function nav(){
    
    const icon = document.querySelector('.nav__icon-image'),
          iconWraper = document.querySelector('source'),
          nav = document.querySelector('.nav'),
          navLink = document.querySelectorAll('a.nav__link'),
          section = document.querySelectorAll('section'),
          navBtn = document.querySelector('.nav__btn'),
          navCloseBtn = document.querySelector('.nav__closebtn');


    //change styles on scroll
    function changeNav(){  

        if (window.pageYOffset > 130){
            if (document.documentElement.clientWidth > 960) {
                icon.setAttribute('src', 'images/logo-black.webp');
                iconWraper.setAttribute('srcset', 'images/logo-black.webp');
            }

            nav.style.cssText = `
                background-color: white;
                box-shadow: 0 1px 8px 3px rgba(0, 0, 0, 0.5);
            `; 

            navLink.forEach(item => {
                item.style.color = 'black';
            });
        
        } else {
            icon.setAttribute('src', 'images/logo-white.webp');
            iconWraper.setAttribute('srcset', 'images/logo-white.webp');

            nav.style.cssText = `
                background-color: transparent;
                box-shadow: none;
            `; 

            navLink.forEach(item => {
                item.style.color = 'white';
            });
        }
    }

    //active on scroll
    function changeActiveOnScroll(){
        let current = '';
    
        section.forEach(item => {
            
            if(item.getBoundingClientRect().top <= nav.getBoundingClientRect().height){
                current = item.getAttribute('id');               
            }
            
        });
        navLink.forEach(item => {
            const currentLink = item.getAttribute('href').slice(1);
            item.classList.remove('nav__link-active');
            if(currentLink == current){
                item.classList.add('nav__link-active');
            }
            
        });
    };
    
    //responsive nav
    function responsiveNav(closeBtn, openBtn, navSelector, navResponsClass, btnReponsClass){
        openBtn.addEventListener('click', () => {
            navSelector.classList.add(navResponsClass);
            openBtn.classList.add(btnReponsClass);
        });
        closeBtn.addEventListener('click', () => {
            navSelector.classList.remove(navResponsClass);
            openBtn.classList.remove(btnReponsClass);
        });
        
    }


    responsiveNav(navCloseBtn, navBtn, nav, 'responsive', 'responsive-btn');
    changeNav();
    changeActiveOnScroll();
    document.addEventListener('scroll', changeNav);
    document.addEventListener('scroll', changeActiveOnScroll);

}

export default nav;