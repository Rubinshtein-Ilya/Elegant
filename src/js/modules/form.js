import Modal from "./modal";

function form(){

    const form = document.querySelector('form');
    
    const message = {
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };


    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        let json = JSON.stringify(Object.fromEntries(formData.entries()));
        
        fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
        .then(data => {
            if(data.ok){
                new Modal(message.success, '.contacts-container').render();
            } else {
                new Modal(message.failure, '.contacts-container').render();
            }
        })
        .finally(() => {
            setTimeout(() => {
                form.reset();
                document.querySelector('.modal').remove();
            }, 2000);
        });
      
    });

    
    

}

export default form;