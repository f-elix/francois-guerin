const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	plugins: [
		postcssImport(),
		postcssNested(),
		// Some plugins, like postcss-nested, need to run before Tailwind

		tailwindcss(),

		// But others, like autoprefixer, need to run after

		autoprefixer(),

		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};
