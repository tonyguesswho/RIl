const purgecss = require('@fullhuman/postcss-purgecss')({

	// Specify the paths to all of the template files in your project
	content: [
	  './public/**/*.html',
	  './src/**/*.js',
	  // etc.
	],
  
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})
  
  module.exports = {
	plugins: [
	  require('tailwindcss'),
	  require('autoprefixer'),
	  process.env.NODE_ENV === 'production' && purgecss
	]
  }