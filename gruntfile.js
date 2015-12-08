module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-scss-lint");

	grunt.initConfig({
		/**
		 * Lints scss.
		 */
		scsslint: {
			allFiles: [
				"src/scss/**/*.scss"
			],
			options: {
				config: "config/build/scsslint.yml",
				colorizeOutput: true,
				maxBuffer: 3000 * 1024
			}
		},

		/**
		 * Lints javascript.
		 */
		jshint: {
			options: {
				"jshintrc": "config/build/.jshintrc"
			},
			all: ["src/js/**/*.js"]
		},

		/**
		 * Cleans folders to be rebuilt.
		 */
		clean: {
			css: [
				"resources/css"
			],
			js: [
				"resources/js"
			]
		},

		/**
		 * Builds scss.
		 */
		sass: {
			options: {
				sourceMap: true,
				outputStyle: "compressed"
			},
			website: {
				files: {
					"resources/css/main.min.css" : "src/scss/init.scss"
				}
			}
		},

		/**
		 * Concatenates and uglifies javascript.
		 */
		uglify: {
			options: {
				sourceMap: true,
				mangle: {
					except: ["jQuery"]
				},
				compress: true
			},
			js: {
				files: {
					"resources/js/main.min.js": [
						"bower_components/jquery/dist/jquery.min.js",
						"src/js/**/*.js"
					]
				}
			}
		}
	});

	grunt.registerTask("build-css", ["scsslint", "clean:css", "sass:website"]);
	grunt.registerTask("build-js", ["jshint", "clean:js", "uglify:js"]);

	grunt.registerTask("travis", ["build-css", "build-js"]);
};
