import symbol from "core-js/es6/symbol";

import Debounce from '../utilities/util-debounce';
import GUID from '../utilities/util-guid';

import ScrollClass from './components/ScrollClass';


const bullets = {
    init: () => {
        const $components = $('[data-bullets-js]');

        $components.each(function() {
            let componentName = $(this).data('bullets-js');
            bullets[componentName]();
        });
    },

    ScrollClass: () => {
        const Component = new ScrollClass();
    },
}

bullets.init();

