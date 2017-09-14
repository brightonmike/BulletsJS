export default class MenuToggle {
	constructor(element, options) {
		this.element = element;
		this.activeClass = options[0];
		this.handleButtonClick();
	}

	handleButtonClick() {
		const body = document.body,
			activeClass = this.activeClass,
			button = this.element;

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