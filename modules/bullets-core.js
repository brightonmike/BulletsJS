import Debounce from '../utilities/util-debounce';
import GUID from '../utilities/util-guid';

import Menu from './bullets-menu';
import ClassOnScroll from './bullets-class-on-scroll';

var BulletsJS = {
    Menu: function(_this) {
        var menuplugin = new Menu(_this);
        menuplugin;  
    },
    ClassOnScroll: function(_this, options) {
        var scrollplugin = new ClassOnScroll(_this, options);
        scrollplugin;  
    },
};

Bullets.invoke = function () {
  var nodes = document.querySelectorAll('[data-bullets-js]'),
      node,
      func;

  for (var i = 0, j = nodes.length; i < j; i++) {
    node = nodes[i];
    func = node.getAttribute('data-bullets-js');
    if (this[func]) {
      console.log('fired ' + func);
      this[func](node);
    }
  }
};


Bullets.invoke();