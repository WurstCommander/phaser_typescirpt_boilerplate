module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
    server: {
      options: {
        port: 9000,
        base: 'www',
        keepalive: true,
	      https: true,
		open: {
          target: 'http://localhost:9000'
        }
	
      }
    }
  }
	});	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', 'connect:server');

};