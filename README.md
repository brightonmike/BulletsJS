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



Using the components
====================

Elements need the following HTML attributes:
	
	data-options - Required. The number of options you're passing.

	data-option-1, data-option-2 etc... The options. 
		Order must match the order the component reads options. 
		Check the component's constructor function or see below.


Component options by component.

ScrollClass:
- data-option-1 The scroll class.
- data-option-2 An offset. If none is provided, the element's offset 
	will be used by default.





