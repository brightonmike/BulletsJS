import Debounce from '../utilities/util-debounce';
import GUID from '../utilities/util-guid';

import ScrollClass from './components/ScrollClass';


const bullets = {
    init: () => {
        const $nodes = $('[data-js]');

        const nodes = document.querySelectorAll('[data-js]');

        for (let i = 0; i < nodes.length; i++) {
            let component = nodes[i].getAttribute('data-js'),
                optionsNo = nodes[i].getAttribute('data-options');

            if ( optionsNo && bullets.hasOwnProperty(component) ) {
                let options = [],
                    optionsCount = 0;

                while (optionsNo > options.length) {
                    optionsCount++;
                    options.push(nodes[i].getAttribute(`data-option-${optionsCount}`));
                }

                bullets[component](nodes[i], options);
            }
        }
    },

    ScrollClass: ($node, options) => {
        const Component = new ScrollClass($node, options);
    }
}

bullets.init();


