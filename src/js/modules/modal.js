
class Modal {
    constructor(message, parentSelector){
        this.message = message;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');

        element.classList.add('modal');

        element.innerHTML = `
            <span class="modal__text">${this.message}</span>
        `;

        this.parent.append(element);
        
    }
}



export default Modal;