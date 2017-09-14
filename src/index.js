import symbol from "core-js/es6/symbol";

import Debounce from '../utilities/util-debounce';
import GUID from '../utilities/util-guid';

import ScrollClass from './components/ScrollClass';


const bullets = {
    init: () => {
        const $nodes = $('[data-js]');

        const nodes = document.querySelectorAll('[data-js]');

        for (let node of nodes) {
            let component = node.getAttribute('data-js'),
                optionsNo = node.getAttribute('data-options');

            if ( optionsNo && bullets.hasOwnProperty(component) ) {
                let options = [],
                    optionsCount = 0;

                while (optionsNo > options.length) {
                    optionsCount++;
                    options.push(node.getAttribute(`data-option-${optionsCount}`));
                }

                bullets[component](node, options);
            }
        }
    },

    ScrollClass: ($node, options) => {
        const Component = new ScrollClass($node, options);
    }
}

bullets.init();


