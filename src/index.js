// import symbol from "core-js/es6/symbol";

import Debounce from '../utilities/util-debounce';
import GUID from '../utilities/util-guid';

import ScrollClass from './components/ScrollClass';
import MenuToggle from './components/MenuToggle';
import FormValidator from './components/FormValidator';
import Modal from './components/Modal';
import Accordion from './components/Accordion';

const bullets = {
    init: () => {
        const nodes = document.querySelectorAll('[data-bullets-js]');

        // querySelectorAll bug in IOS - can't use 'for of' loop
        for (let i = 0; i < nodes.length; i++) {
            let component = nodes[i].getAttribute('data-bullets-js'),
                options = nodes[i].getAttribute('data-bullets-options');


              if(options) {
                options = options.split(',').reduce((acc, cur) => {
                  var data = cur.split(':');
                  acc[data[0]] = data[1];
                  return acc;
                }, {});
              } 

            if (bullets.hasOwnProperty(component)) {
                bullets[component](nodes[i], options);
                console.log('fired '+component);
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


