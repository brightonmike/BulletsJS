import extend from "extend";
export default class MenuToggle {
	constructor(element, options) {
		this.button = element;
		this.options = extend(MenuToggle.defaults, options);
		this.activeClass = this.options['activeClass'];			
		this.handleButtonClick();
	}

	handleButtonClick() {
		const body = document.body,
			{ activeClass } = this;

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

MenuToggle.defaults = {
	activeClass: 'menu-is-open'
};
