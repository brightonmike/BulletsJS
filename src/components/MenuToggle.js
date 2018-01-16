import extend from "../../utilities/util-extend";
export default class MenuToggle {
	constructor(element, options) {
		this.button = element;
		this.menu = document.getElementById(element.getAttribute('aria-controls'));
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
				this.menu.setAttribute('aria-hidden', 'true');
				this.button.setAttribute('aria-expanded', 'false');
				body.classList.remove(activeClass);
			} else {
				this.menu.setAttribute('aria-hidden', 'false');
				this.button.setAttribute('aria-expanded', 'true');
				body.classList.add(activeClass);
			}
		}
	}
}

MenuToggle.defaults = {
	activeClass: 'menu-is-open'
};