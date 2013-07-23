module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({

  	copy: {
  		css : {
  			files: {
          '_site/assets/css/main.css': 'assets/css/main.css',
          '_site/assets/js/main.js': 'assets/js/main.js'
  			}
  		}
  	},

  	shell: {
  		jekyll: {
  			command: 'rm -rf _site/*; jekyll build',
  			stdout: true
  		}
  	},

  	compass: {
  		options: {
  			sassDir: 'assets/scss',
  			cssDir: 'assets/css',
  			generatedImagesDir: 'assets/css/images/generated',
  			imagesDir: 'assets/images',
  			javascriptsDir: 'assets/scripts',
  			importPath: 'components',
  			httpImagesPath: 'assets/images',
  			httpGeneratedImagesPath: 'assets/images/generated',
  			relativeAssets: false
  		},
  		dist: {},
  		server: {
  			options: {
  				debugInfo: true
  			}
  		}
  	},

  	watch: {
  		options: {
  			livereload: true
  		},

  		compass: {
  		files: ['assets/scss/{,*/}*.{scss,sass}'],
  		tasks: ['compass:server', 'copy:css']
  	},
  	
  	jekyllSources: {
  		files: [
          // capture all except css and /_site content
          '*.html', '*.yml', 'assets/js/**.js', 'performance/**', '_layouts/**', '_includes/**', '**/*.markdown', '!_site/**'
          ],
          tasks: ['shell:jekyll']
      }
  },

  connect: {
  	server: {
  		options: {
  			base: '_site/',
  			port: 9009
  		}
  	}
  },
  open: {
  	server: {
  		path: 'http://localhost:<%= connect.server.options.port %>/'
  	}
  }
});

  grunt.registerTask('server', [
  	'connect:server',
  	'open:server',
  	'copy:css',
  	'watch'
  	]);

  // Default task.
  grunt.registerTask('default', 'server');

};