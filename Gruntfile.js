module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['**/*.js']
            },
        },
        copy: {
            files:
            // SystemJS und Phaser kopieren
            {
                expand: true,
                src: ['node_modules/systemjs/dist/system.js',
                    'node_modules/phaser/build/phaser.min.js'],
                dest: 'www/js/vendor/',
                flatten: true
            }
        },
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

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy', 'connect:server']);
};