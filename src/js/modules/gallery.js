function gallery(){
    //gallery filtering
    
    const parent = document.querySelector('.works-btns'),
          btns = document.querySelectorAll('.works-btns__item'),
          images = document.querySelectorAll('.works__image-container');


    if(localStorage.getItem('filter')){
        btns.forEach(item => {
            item.classList.remove('works-btns__item-active');
            if(item.getAttribute('data-filter') == localStorage.getItem('filter')){
                item.classList.add('works-btns__item-active');
            }
        });
        images.forEach(item => {
            item.classList.add('hidden');
            if(item.getAttribute('data-filter') == localStorage.getItem('filter')){
                item.classList.remove('hidden');
            }
        });
    } else {
        btns.forEach(item => {
            if(item.getAttribute('data-filter') == 'all'){
                item.classList.add('works-btns__item-active');
            }
        });
        images.forEach(item => {
            item.classList.remove('hidden');
        });
    }

    parent.addEventListener('click', event => {
        let target = event.target;

        if(target && target.classList.contains('works-btns__item')){
            let filter = target.getAttribute('data-filter');

            btns.forEach(item => {
                item.classList.remove('works-btns__item-active');
            });
            target.classList.add('works-btns__item-active');
            
            images.forEach(item => {
                item.classList.add('hidden');
            });

            
            if(filter == 'all'){
                images.forEach(item => {
                    item.classList.remove('hidden');
                });
                localStorage.clear();
            }
            images.forEach(item => {
                if(item.getAttribute('data-filter') == filter){
                    item.classList.remove('hidden');
                    localStorage.setItem('filter', filter);
                }
            });
            
        }
    });
}

export default gallery;