export default class Modal {
	constructor(button, options) {
		this.button = button;
		this.activeClass = options[0];

		this.handleClick();
	}

	handleClick() {
		const { button, activeClass } = this,
			body = document.body,
			overlay = document.getElementById('overlay');

		if (!activeClass) return;

		button.onclick = () => {
			body.classList.add(activeClass);
		}

		overlay.onclick = () => {
			body.classList.remove(activeClass);
		}
	}
}