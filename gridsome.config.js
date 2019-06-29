// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

function addStyleResource(rule) {
	rule
		.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/assets/css/variables.scss')]
		});
}

module.exports = {
	chainWebpack(config) {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

		types.forEach(type => {
			addStyleResource(config.module.rule('scss').oneOf(type));
		});
	},
	siteName: 'Auteur',
	siteDescription:
		"François Guérin est un prolifique auteur Montréalais. Avec plusieurs romans à son actif, il aborde divers aspects de l'être humain à travers d'incroyables histoires et personnages!",
	siteUrl: 'https://www.francoisguerin.com',
	icon: './src/assets/img/favicon.png',
	plugins: []
};
