import extend from "../../utilities/util-extend";
export default class Modal {
	constructor(button, options) {
		this.button = button;
		this.options = extend(Modal.defaults, options);
		this.activeClass = this.options['activeClass'];				
		this.modal = document.querySelector(this.options['targetModal']);
		this.modalClose = document.querySelectorAll(this.options['targetModal'] + ' .js-modal-close');		
		this.handleClick();
	}

	handleClick() {
		const { button, activeClass, modal, modalClose } = this,
			body = document.body;

		if (!activeClass) return;

		button.onclick = () => {
			body.classList.add('modal-is-open');
			modal.classList.add(activeClass);
		}

		modalClose[0].onclick = () => {
			body.classList.remove('modal-is-open');
			modal.classList.remove(activeClass);
		}
	}
}

Modal.defaults = {
	activeClass: 'is-open',
	targetModal: '.js-modal'
};