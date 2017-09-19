export default class FormValidator {
	constructor(element) {
		this.form = element;
		this.handleSubmit();
		this.isSubmitted = false;
		this.data = {};
		this.errorClass = 'js-form-error';
		this.isValid = false;
	}

	// loop through inputs
		// validation required depends on type

	handleSubmit() {
		const _FormValidator = this,
			{ form } = this;

		form.addEventListener('submit', e => {
			e.preventDefault();
			
			if (_FormValidator.isSubmitted)  
				return;

			this.collectData();
			console.log(this.isValid ? 'Form is valid' : 'Form is not valid');
			console.log(this.data);

			// prevent form submitting twice from double click.
			_FormValidator.isSubmitted = true;
			setTimeout(() => {
				_FormValidator.isSubmitted = false;
			}, 1000);
		});
	}

	collectData() {
		const { form } = this,
			dataInputs = form.querySelectorAll('.js-data-input');

		for (var i = 0; i < dataInputs.length; i++) {
			this.validateByType(dataInputs[i]);
		}
	}

	validateByType(input) {
		const type = input.getAttribute('type');

		switch (type) {
			case 'radio-group': 
				this.validateRadioGroup(input);
				break;

			case 'checkbox': 
				this.setData(input.getAttribute('name'), input.checked);
				break;
							
			case 'text': 
				this.validateText(input);
				break;

			case 'select':
				this.validateSelect(input) 
				break;
											
			case 'email': 
				this.validateEmail(input);			

			default:
				return null;
		}
	}

	validateRadioGroup(group) {
		const inputs = group.getElementsByTagName('input');
		let isFoundValue = false;

		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].checked) {
				isFoundValue = true;
				this.setData(inputs[i].getAttribute('name'), inputs[i].value);
				group.classList.remove(this.errorClass);			
			}
		}

		if (!isFoundValue && this.isRequired(group)) {
			this.handleError(group); 
		}
	}

	validateText(input) {
		if (input.value.length) {
			this.approveInput(input);

		} else if (this.isRequired(input)) {
			this.handleError(input);
		}
	}

	validateEmail(input, key) {
		const pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
		
		if (pattern.test(input.value)) {
			this.approveInput(input);

		} else if (this.isRequired(input)) {
			this.handleError(input);
		}
	}

	validateSelect(select) {
		if (select.value == 'placeholder') {
			if (this.isRequired(select)) this.handleError(select);
		} else {
			this.approveInput(select);
		}
	}

	isRequired(input) {
		return input.classList.contains('is-required');
	}

	approveInput(input) {
		this.isValid = true;
		this.setData(input.getAttribute('name'), input.value);
		input.classList.remove(this.errorClass);
	}

	handleError(element) {
		this.isValid = false;
		element.classList.add(this.errorClass);
	}

	setData(key, value) {
		this.data[key] = value;
	}
}
