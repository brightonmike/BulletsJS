export default class Accordion {
	constructor(element) {
		this.accordion = element;
		this.activeClass = 'is-open-panel';
		this.handleClick();
	}

	handleClick() {
		const { accordion } = this,
			triggers = accordion.getElementsByClassName('js-accordion-trigger');

		for (let i = 0; i < triggers.length; i++) {
			
			triggers[i].onclick = e => {
				this.removeActiveClass(triggers);
				e.target.classList.add(this.activeClass);
			}
		}
	}

	removeActiveClass(triggers) {
		for (let i = 0; i < triggers.length; i++) {
			triggers[i].classList.remove(this.activeClass);
		}
	}
}