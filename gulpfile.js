// Grab our gulp packages
var gulp  = require('gulp'),
    browserSync = require('browser-sync').create();

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function() {
    // Watch files
    var files = [
    	'./public/bullets.js',
        './public/index.html'
    ];

    browserSync.init(files, {
	    // Replace with URL of your local site
	    proxy: "http://localhost:8080",
    });
    
    gulp.watch(files).on('change', browserSync.reload);

});