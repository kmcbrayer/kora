module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            browserify: {
                files: ['src/**/*.jsx'],
                tasks: ['browserify']
            }
        },

        browserify: {
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015', 'react']}]]
                },
                src: ['src/**/*.jsx'],
                dest: 'public/app.js'
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/main.css': 'styles/**/*.scss'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify', 'sass', 'watch']);

};
