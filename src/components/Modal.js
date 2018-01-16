import extend from "../../utilities/util-extend";
export default class Modal {
	constructor(button, options) {
		this.button = button;
		this.options = extend(Modal.defaults, options);
		this.activeClass = this.options['activeClass'];				
		this.modal = document.querySelector(this.options['targetModal']);
		this.modalClose = document.querySelectorAll(this.options['targetModal'] + ' .js-modal-close');	
		this.initModal();
	}

	initModal() {
		const { button, activeClass, modal, modalClose } = this,
			body = document.body;

		if (!activeClass) return;

		let content = modal.querySelector('[role="document"]');

		let focusable = content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]');
		let firstFocusable = focusable[0];
		let lastFocusable = focusable[focusable.length - 1];

		button.onclick = () => {
			this.openModal();
		}

		modalClose[0].onclick = () => {
			this.closeModal();
		}

		// trap tabbing in the modal

		lastFocusable.addEventListener('keydown', (e) => {
			if ((e.keyCode || e.which) === 9) {
				firstFocusable.focus();
				e.preventDefault();
			}
		});

		// allow escape key to close modal

		modal.addEventListener('keydown', (e) => {
			if (e.keyCode == 27) {
				this.closeModal();
			}
		});

	}

	openModal(){
		const { button, activeClass, modal, modalClose } = this,
			body = document.body;

		body.classList.add('modal-is-open');
		modal.classList.add(activeClass);
		modal.setAttribute('aria-hidden', 'false');
		modalClose[0].focus();
	}

	closeModal(){
		const { button, activeClass, modal } = this,
			body = document.body;

		body.classList.remove('modal-is-open');
		modal.classList.remove(activeClass);
		modal.setAttribute('aria-hidden', 'true');
		modal.setAttribute('tabindex', '-1');
		button.focus();
	}

}

Modal.defaults = {
	activeClass: 'is-open',
	targetModal: '.js-modal'
};