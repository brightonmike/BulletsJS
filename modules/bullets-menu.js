export default class Menu {  

  constructor(element, options) {
    this.element = element;    
    this.body = $('body');
    this._init();
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

  }

}