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


Component options by component.

ScrollClass:
- data-option-1 The scroll class.
- data-option-2 An offset. If none is provided, the element's offset 
	will be used by default.





