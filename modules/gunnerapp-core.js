var GunnerApp = {
    name: "GunnerApp",
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