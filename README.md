# BulletsJS
A simple library for common functions.

[![Build Status](https://travis-ci.org/brightonmike/BulletsJS.svg?branch=master)](https://travis-ci.org/brightonmike/BulletsJS)

To Do
======

- Split each function into individual file
- Create Gulpfile.js
- Create app.js with invoke function
- Create utils functions and split


Future
======

- Remove jQuery dependancy
- Add to NPM.




Development
===========

For general developement, use the following command:

npm run serve


NOTE:
When testing on older devices (with Browser Stack for example) you might see:

SyntaxError: Unexpected token 'const'

Webpack Dev Server isn't serving babelified code.

It's a pain but I currently do the following (3 separate console tabs):

npm run watch

http-server

(optional)
gulp browsersync

public/index.html then pulls in fully babelified code via a script tag.



Using the components
====================

Elements need the following HTML attributes:
	
	data-options - Required. The number of options you're passing.

	data-option-1, data-option-2 etc... The options. 
		Order must match the order the component reads options. 
		Check the component's constructor function or see below.


Component options by component:


ScrollClass:

- data-option-1 Required. The scroll class.

- data-option-2 An offset. If none is provided, the element's offset 
	will be used by default.



MenuToggle:

- data-option-1 Required. The active class.

- Active class will be toggled on the body.



FormValidator:

- Doesn't take any options.

- Input elements must have the class 'js-data-input'. The script only collects values from fields with this class.

- All inputs should have appropriate name, type and class attributes.

- REQUIRED FIELDS: please use the class 'is-required'. For radio inputs please apply this class to their container element.

- RADIO INPUTS: please use a container element with the class 'js-data-input' and type 'radio-group'. The radio inputs must be children of that container. The container could just be a div element.

- SELECT ELEMENTS: must have the attribute type="select". The select element itself should carry the class 'js-data-input' and 'is-required'. Blank option element must have the value 'placeholder'. This tells the script not to collect the value and invalidate the form if the select is required. Without a blank placeholder option the form will collect the first option element's value. 



Modal:

- data-option-1 Required. The active class.

- Required elements: modal, overlay (suggested as last children of body element) and toggle button. The button takes the data-js attribute.

- Clicking the overlay hides the modal and overlay.



ACCORDION:

- Doesn't take any options.

- Attaches click event handler to elements with the class 'js-accordion-trigger'.

- The trigger will acquire the class 'is-open-panel' when clicked.

- The height of the next element can then be 'auto' (CSS).



TESTING
=======

Tested across all devices and browsers finding strong compatibility. ScrollClass may not work on IE11, but it works on Edge 14 up.





