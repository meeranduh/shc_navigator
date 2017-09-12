var gulp = require('gulp'),
  connect = require('gulp-connect');
 
var webserver = require('gulp-webserver');

var server = {
  host: '0.0.0.0',
  port: '8001'
}

gulp.task('webserver', function() {
	gulp.src( '.' )
	.pipe(webserver({
		host:             server.host,
		port:             server.port,
		livereload:       true,
		directoryListing: false
	}));
});
 
gulp.task('default', ['webserver']);
