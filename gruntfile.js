module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      website: {
        files: {
          'resources/css/danpaquette.min.css' : 'resources/src/scss/init.scss'
        }
      }
    },
    clean: {
      css: [
        'resources/css'
      ],
      js: [
        'resources/js'
      ]
    },
    uglify: {
      options: {
        sourceMap: true,
        mangle: {
          except: ['jQuery']
        },
        compress: true
      },
      js: {
        files: {
          'resources/js/danpaquette.min.js': [
            'resources/src/lib/jquery/jquery-2.1.4.min.js',
            'resources/src/js/**/*.js'
          ]
        }
      }
    },
    jshint: {
      all: ['resources/src/js/**/*.js']
    }
  });

  grunt.registerTask('build-css', ['clean:css','sass:website']);
  grunt.registerTask('build-js', ['jshint','clean:js', 'uglify:js']);

  grunt.registerTask('travis', ['build-css', 'build-js']);
};
