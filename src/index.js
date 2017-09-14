import Debounce from '../utilities/util-debounce';
import GUID from '../utilities/util-guid';

import ScrollClass from './components/ScrollClass';
import MenuToggle from './components/MenuToggle';


const bullets = {
    init: () => {
        const nodes = document.querySelectorAll('[data-js]');

        for (let i = 0; i < nodes.length; i++) {
            let component = nodes[i].getAttribute('data-js'),
                optionsNo = nodes[i].getAttribute('data-options'),
                options = [];

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
    }
}

bullets.init();


