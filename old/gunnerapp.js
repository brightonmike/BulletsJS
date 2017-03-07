(function( root, $, undefined ) {
  "use strict";

  var GunnerApp = {
    name: "GunnerApp",
    // this init is not really being used, probably redundant.
	 	init: function(plugins) {
        plugins.forEach(function(plugin) {
        	var _this = $(this);       		
            GunnerApp[plugin].call(_this);
        });   			
  	},
    Menu: function(_this) {
        var menuplugin = new Menu(_this);
        menuplugin;  
    },
    Gallery: function(_this, options) {
        var galleryplugin = new Gallery(_this, options);
        galleryplugin;         
    },
    ClassOnScroll: function(_this, options) {
        var scrollplugin = new ClassOnScroll(_this, options);
        scrollplugin;  
    },
    Filters: function(_this) {
        var filtersplugin = new Filters(_this);
        filtersplugin;  
    },
    CategoryFilter: function(_this) {
        var categoryfilterplugin = new CategoryFilter(_this);
        categoryfilterplugin;  
    },    
    Accordion: function(_this) {
        var accordionplugin = new Accordion(_this);
        accordionplugin;  
    }
  }


  class Accordion {

    constructor(element) {
      this.element = element;
      this._init();
    }

    _init(){      
      var _this = this;
      var _panels = $(this.element).find('.js-accordion-panel');

      _panels.each(function(){
        var link = $(this).find('.js-accordion-toggle');

        link.on('click', function(e){
          e.preventDefault();
          var parent = link.parent();
          if(!parent.hasClass('is-active')){            
            _panels.removeClass('is-active');
            parent.addClass('is-active');
          }      
        });
      });
    }


  }

  class Menu {  

  	constructor(element, options) {
  		this.element = element;
  		this._init();
      this.body = $('body');
  	}

  	_init(){
			var activeClass = 'menu-is-active';			
			var navToggle = $(this.element);
			var _this = this;     

			navToggle.on('click', function(e){
				e.preventDefault();
				_this._toggle(activeClass);				
			});
  	}

  	_toggle(activeClass) {  		
  		var _this = this;
			if (this.body.hasClass(activeClass)) {
				_this._closeNav(activeClass);
			} else {
				_this._openNav(activeClass);
			}  		
  	}

  	_openNav(activeClass) {
  		this.body.addClass(activeClass);
  	}

  	_closeNav(activeClass) {
  		this.body.removeClass(activeClass);
  	}

  	destroy(){
  		// don't think this is needed
  	}

  }

  // Gallery depends on Slick. We could just init Slick on page load but this way makes things a bit...Slicker. //

  class Gallery {
  	constructor(element, options){
  		this.element = element;
  		this.options = $.extend({}, Gallery.defaults, options);
      this.body = $('body');
      this.slider = $(this.element).find(".js-slider");
      this.sliderNav = $(this.element).find(".js-slider-nav");
  		this._init();
  	}

  	_init(){
  		var activeClass = 'gallery-is-active';		
  		var galleryToggle = $('.js-gallery-toggle'); 
  		var _this = this;

  		galleryToggle.on('click', function(){
  			_this._toggle(activeClass);	
  		});

      galleryToggle.keypress(function(e) {
        if (e.which === 32) {
          e.preventDefault();
          _this._toggle(activeClass); 
        }
      });  

      $(this.slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        speed: 500,
        asNavFor: this.sliderNav,
        lazyLoad: 'ondemand',          
      });

      $(this.sliderNav).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: this.slider,
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true         
      });

  	} 

  	_toggle(activeClass) {  		
  		var _this = this;
			if (this.body.hasClass(activeClass)) {
				_this._closeGallery(activeClass);
			} else {
				_this._openGallery(activeClass);
			}  		
  	}

  	_openGallery(activeClass){
  		this.body.addClass(activeClass);
  	}

  	_closeGallery(activeClass) {
  		this.body.removeClass(activeClass);
  	}  

  }

  Gallery.defaults = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: false,
		speed: 500
  };

  class ClassOnScroll {
  	constructor(element, options){
  		this.element = $(element);
      var opt = this.element.attr('data-gunner-options');           
      if(opt) {
        opt = opt.split(',').reduce((acc, cur) => {
          var data = cur.split(':');
          acc[data[0]] = data[1];
          return acc;
        }, {});
      }    
  		this.options = $.extend({}, ClassOnScroll.defaults, opt);      
		  this._init();
  	}

  	_init(){
  		var _this = this;
      var _window = $(window);
  		var _offset = this.options.offset;
  		var _activeclass = this.options.activeclass;


      // we might want the offset to be based off another element
      if(this.options.reference) {
        var _reference = this.options.reference;  
        if($(_reference).length > 0){
          _offset = $(_reference).outerHeight() - this.element.outerHeight()*2;
        }
      }

      var trigger = debounce(function() {
        var scroll = _window.scrollTop();
        if (scroll >= _offset) {
          _this._AddClassonScroll(_activeclass);
        } else {
          _this._RemoveClassonScroll(_activeclass);
        }
      }, 250);

  		_window.scroll(function() {
        trigger();
  		});		
  	}  	

  	_AddClassonScroll(_activeclass){	
  		this.element.addClass(_activeclass);
  	}

  	_RemoveClassonScroll(_activeclass){
  		this.element.removeClass(_activeclass);
  	}	
  }

  ClassOnScroll.defaults = {
		offset: 500,
		activeclass: 'element-in-view',
  };

  class Filters {
  	constructor(element, options){
   		this.element = element;
  		this.options = $.extend({}, Filters.defaults, options);
		  this._init(); 		
  	}

  	_init(){
  		var _this = this;
  		var filterElement = $(this.element).attr('data-filter-element');
      var parent = $(this.element);
      var filtered = {};
      var joined = '';

      // var activeFilter = $(this.element).attr('data-filters-active');
      // var regex = new RegExp(',', 'g');
      // activeFilter = activeFilter.replace(regex, ' ');

      // $('.'+filterElement).find('li').each(function() {
      //   console.log(activeFilter);

      //     if($(this).hasClass(activeFilter)) {
      //       console.log('yes');
      //       list.classList.remove('inactive');
      //       list.classList.add('active');
      //     }        
      // });

      $('.filters__list').on('change', function(e) {  
        var $this = $(this);
        var $val = $this.val();
        var $type = $this.data('filter-type');  
        var minCount = parent.find('select').length;

        filtered[$type] = $val || {}; 
        
        joined = Object.keys(filtered).reduce(function(acc, filter) {
          acc.push(filter + '-' + filtered[filter]);
          return acc;
        }, []);     

        var path = '?filter=' + joined;
        history.pushState(path, "page 2", path);
                 
        $('.'+filterElement).find('li').each(function(index, list) {
          var hasAllClasses = joined.every(function(item) {
            return list.classList.contains(item);
          }) && joined.length === minCount;

          if(hasAllClasses) {
            list.classList.remove('inactive');
            list.classList.add('active');
          } else {
            list.classList.remove('active');
            list.classList.add('inactive');
          }
        });
      });

  	}
  }

  Filters.defaults = {

  };

  class CategoryFilter {
    constructor(element, options){
      this.element = element;
      this._init();     
    }

    _init(){
      var _this = this;
      var _dropdown = $(this.element).find('select');

      $(_dropdown).on('change', function(e) {
        _this._onCatChange(_dropdown);
      });
    }  

    _onCatChange(_dropdown) {
        location.href = $(_dropdown).val();
    }   
  }

  window.GunnerApp = GunnerApp;

} ( this, jQuery ));

GunnerApp.invoke = function() {
    var nodes = document.querySelectorAll('[data-gunner-js]'),
        node,
        func;

    for (var i = 0, j = nodes.length; i < j; i++) {
        node = nodes[i];
        func = node.getAttribute('data-gunner-js'); 
        if (this[func]) {
        	 console.log('fired '+func);
            this[func](node);
        }
    }
};

// Utilities

function debounce(func, wait, immediate) {
  var timeout;

  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function guid() {
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

jQuery(document).on('ready', function() {
	GunnerApp.invoke();

  jQuery('.input__field').on('blur', function(){
     if(!jQuery(this).val() ) {
      jQuery(this).parent('span').parent('.input').removeClass('input--focus');
    }
  }).on('focus', function(){
    jQuery(this).parent('span').parent('.input').addClass('input--focus');
  });

});