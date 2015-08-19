module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      website: {
        files: {
          'public/css/danpaquette.min.css' : 'src/scss/init.scss'
        }
      }
    },
    clean: {
      css: [
        'public/css'
      ],
      js: [
        'public/js'
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
          'public/js/danpaquette.min.js': [
            'src/lib/jquery/jquery-2.1.4.min.js',
            'src/js/**/*.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('build-css', ['clean:css','sass:website']);
  grunt.registerTask('build-javascript', ['clean:js', 'uglify:js']);
};
