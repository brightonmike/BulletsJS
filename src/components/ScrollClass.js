import extend from "extend";
var debounce = require('lodash/debounce');
export default class ScrollClass {
	constructor(element, options) {
		this.element = element;
		this.options = extend(ScrollClass.defaults, options);
		this.scrollClass = this.options['scrolledclass'];
		this.offset = this.options['offset'];
		this.handleScroll();
	}

	handleScroll() {
		const { element, scrollClass } = this,
			offset = this.offset || element.offsetTop;

		let _this = this;

		const trigger = debounce(function() {
			let scroll = window.scrollY;
			if (scroll >= offset) {
				_this._AddClassonScroll(scrollClass);
			} else {
				_this._RemoveClassonScroll(scrollClass);
			}
		}, 250);

		window.addEventListener('scroll', () => {
			trigger();
		});

	}

  	_AddClassonScroll(){	
  		const { element, scrollClass } = this;
  		element.classList.add(scrollClass);
  	}

  	_RemoveClassonScroll(){
  		const { element, scrollClass } = this;  		
  		element.classList.remove(scrollClass);
  	}	

}

ScrollClass.defaults = {
	scrolledclass: 'is-scrolled-to',
	offset: 200
};