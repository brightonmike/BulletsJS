# BulletsJS
A simple library for common functions.

`npm install bullets-js --save-dev`

[![Build Status](https://travis-ci.org/brightonmike/BulletsJS.svg?branch=master)](https://travis-ci.org/brightonmike/BulletsJS)

Requirements
============

You'll need to write some CSS for BulletsJS components to work. You can change the default classes used by passing through the options.

Development
===========

For general developement, use the following command:

`npm run serve`


NOTE:
When testing on older devices (with Browser Stack for example) you might see:

`SyntaxError: Unexpected token 'const'`

Webpack Dev Server isn't serving babelified code.

It's a pain but I currently do the following (3 separate console tabs):

`npm run watch`

`http-server`

(optional)
`gulp browsersync`

public/index.html then pulls in fully babelified code via a script tag.



Using the components
====================

Attach a `data-bullets-js` attribute to an element to instantiate a class. E.g:

`<button data-bullets-js="Modal" >Open Modal</button>`

You can then pass through options like so:

`<button data-bullets-js="Modal" data-bullets-options="activeClass:open">`

Chain options with a comma:

`<button data-bullets-js="Modal" data-bullets-options="activeClass:open,targetModal:.js-modal-2">`

Modal
-----

The Modal takes two options (default values shown). The class should be instantiated on the button used to trigger the modal.

`activeClass: is-open`
`targetModal: .js-modal`

The activeClass is applied to the modal, and you should use CSS to then show the modal. For example:

```
.modal {
	display: none;
}
.modal.is-open {
	display: block;
}
```

If you want multiple modals on the same page, specify a different `targetModal` for each modal. You should include an overlay element on your page. A class is added to the body which can be used to make your overlay appear/disappear with the modal. The class added to the body is `modal-is-open`.

Modal mark-up should be as follows. The `modal` and `modal__inner` classes are optional but suggested. You only need one overlay element per page.

```
<div class="overlay"></div>

<div class="modal js-modal">		
	<div class="modal__inner">

		<button class="js-modal-close button secondary button--hollow">Close</button>
		<h2>This is a modal!</h2>

	</div>
</div>
```

Menu Toggle
-----------

The Menu Toggle takes one option (default values shown). The class should be instantiated on the button used to trigger the menu.

`activeClass: menu-is-open`

Example CSS might be:

```
.menu {
	display: none;
}

.menu-is-open .menu {
	display: block;
}
```

The menu toggle component requires the following mark-up to be accessible.

```
<button class="menutoggle" data-bullets-js="MenuToggle" id="menu-toggle" aria-label="Menu" aria-expanded="false" aria-controls="menu">
```

The `aria-controls` attribute should match the `id` attribute of the navigation menu. The above button is using `menu` so the navigation is marked-up as follows.

```
<nav class="menu" aria-hidden="true" aria-labelledby="menu-toggle" id="menu"></nav>
```

The behaviour of this component is that it toggles a class on the body element which you can then attach CSS to for making your menu appear and disappear. The component then toggles the necessary aria roles for you to ensure the menu is more accessible.


TESTING
=======

Tested across all devices and browsers finding strong compatibility. ScrollClass may not work on IE11, but it works on Edge 14 up.





