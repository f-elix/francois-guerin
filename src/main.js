import './assets/css/global.scss';

export default function(Vue, { head }) {
	head.htmlAttrs = { lang: 'fr' };
	head.link.push({
		rel: 'stylesheet',
		href: "https://fonts.googleapis.com/css?family=Alex+Brush&display=swap"
	});
}
