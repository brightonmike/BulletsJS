import symbol from "core-js/es6/symbol";

import Debounce from '../utilities/util-debounce';
import GUID from '../utilities/util-guid';

import ScrollClass from './components/ScrollClass';
import MenuToggle from './components/MenuToggle';
import FormValidator from './components/FormValidator';
import Modal from './components/Modal';
import Accordion from './components/Accordion';


const bullets = {
    init: () => {
        const nodes = document.querySelectorAll('[data-js]');

        // querySelectorAll bug in IOS - can't use 'for of' loop
        for (let i = 0; i < nodes.length; i++) {
            let component = nodes[i].getAttribute('data-bullets-js'),
                optionsNo = nodes[i].getAttribute('data-bullets-options'),
                options = [];

            // get options from data-option-<number>
            if (optionsNo) {
                let optionsCount = 0;
                while (optionsNo > options.length) {
                    optionsCount++;
                    options.push(nodes[i].getAttribute(`data-option-${optionsCount}`));
                }
            }

            if (bullets.hasOwnProperty(component)) {
                bullets[component](nodes[i], options);
            }
        }            
    },

    ScrollClass: (element, options) => {
        const Component = new ScrollClass(element, options);
    },

    MenuToggle: (element, options) => {
        const Component = new MenuToggle(element, options);
    },

    FormValidator: (element, options) => {
        const Component = new FormValidator(element, options);
    },

    Modal: (element, options) => {
        const Component = new Modal(element, options);
    },

    Accordion: (element, options) => {
        const Component = new Accordion(element);
    }
}

bullets.init();


