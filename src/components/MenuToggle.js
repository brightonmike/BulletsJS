export default class MenuToggle {
	constructor(element, options) {
		this.button = element;
		this.activeClass = options[0];
		this.handleButtonClick();
	}

	handleButtonClick() {
		const body = document.body,
			activeClass = this.activeClass,
			button = this.button;

		const isOpenNav = () => {
			return body.classList.contains(activeClass);
		}

		button.onclick = () => {
			if (activeClass && isOpenNav()) {
				body.classList.remove(activeClass);
			} else {
				body.classList.add(activeClass);
			}
		}
	}
}