export default class MenuToggle {
	constructor(element, options) {
		this.button = element;
		this.activeClass = options[0];
		this.handleButtonClick();
	}

	handleButtonClick() {
		const body = document.body,
			activeClass = this.activeClass;

		const isOpenNav = () => {
			return body.classList.contains(activeClass);
		}

		this.button.onclick = () => {
			if (activeClass && isOpenNav()) {
				body.classList.remove(activeClass);
			} else {
				body.classList.add(activeClass);
			}
		}
	}
}