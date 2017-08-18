export default class ClassOnScroll {
  constructor(element, options){
    this.element = $(element);
    var opt = this.element.attr('data-bullets-options');           
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