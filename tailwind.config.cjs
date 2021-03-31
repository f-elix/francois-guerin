const screenExceptions = ['touch', 'pointer'];

const except = (exceptions, object) => {
	let output = {};

	Object.keys(object).forEach((key) => {
		if (!exceptions.includes(key)) {
			output[key] = object[key];
		}
	});
	return output;
};

module.exports = {
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}']
	},
	darkMode: 'class',
	theme: {
		screens: {
			min: '200px',
			ip: '430px',
			ph: '620px',
			xs: '760px',
			sm: '890px',
			md: '1120px',
			lg: '1260px',
			xl: '1560px',
			hd: '1920px',
			'2k': '2048px',
			'4k': '3840px',
			touch: { raw: '(hover: none)' },
			pointer: { raw: '(any-hover: hover)' }
		},

		spacing: (theme) => ({
			0: '0',
			'1px': '1px',
			30: '2rem',
			40: '4rem',
			45: '6rem',
			50: '8rem',
			55: '10rem',
			60: '12rem',
			70: '16rem',
			80: '20rem',
			90: '24rem',
			100: '30rem',
			110: '36rem',
			120: '40rem',
			130: '44rem',
			140: '48rem',
			150: '56rem',
			160: '64rem',
			170: '72rem',
			180: '84rem',
			190: '96rem',
			200: '108rem',
			210: '120rem',
			220: '140rem',
			230: '160rem',
			240: '180rem',
			250: '200rem',
			260: '240rem',
			270: '280rem',
			280: '320rem',
			285: '340rem',
			290: '360rem',
			300: '400rem',
			310: '440rem',
			320: '480rem',
			325: '500rem',
			330: '540rem',
			340: '600rem',
			350: '660rem',
			360: '700rem',
			370: '800rem',
			380: '900rem',
			390: '1000rem',
			400: '1140rem',
			'1/2': '50%',
			'1/3': 'calc(100% / 3 * 1)',
			'2/3': 'calc(100% / 3 * 2)',
			'1/4': '25%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/10': '10%',
			'3/10': '30%',
			'7/10': '70%',
			'9/10': '90%',
			'1/20': '5%',
			'3/20': '15%',
			'7/20': '35%',
			'9/20': '45%',
			'11/20': '55%',
			'13/20': '65%',
			'17/20': '85%',
			'19/20': '95%',
			full: '100%',
			...except(screenExceptions, theme('screens'))
		}),
		maxWidth: (theme) => ({
			none: 'none',
			auto: 'auto',
			...theme('spacing')
		}),
		minWidth: (theme) => ({
			none: 'none',
			auto: 'auto',
			...theme('spacing')
		}),
		maxHeight: (theme) => ({
			none: 'none',
			auto: 'auto',
			...theme('spacing')
		}),
		minHeight: (theme) => ({
			none: 'none',
			auto: 'auto',
			screen: '100vh',
			...theme('spacing')
		}),
		inset: (theme) => ({
			none: 'none',
			auto: 'auto',
			...theme('spacing')
		}),
		fontFamily: {
			base: ['Anonymous Pro', 'Arial', 'sans-serif']
		},
		fontSize: (theme) => ({
			10: ['14rem', `${theme('lineHeight.40')}`],
			20: ['16rem', `${theme('lineHeight.40')}`],
			30: ['18rem', `${theme('lineHeight.40')}`],
			40: ['21rem', `${theme('lineHeight.40')}`],
			50: ['24rem', `${theme('lineHeight.30')}`],
			60: ['26rem', `${theme('lineHeight.30')}`],
			70: ['32rem', `${theme('lineHeight.20')}`],
			80: ['40rem', `${theme('lineHeight.10')}`],
			90: ['48rem', `${theme('lineHeight.10')}`],
			100: ['60rem', `${theme('lineHeight.30')}`],
			110: ['80rem', `${theme('lineHeight.0')}`],
			120: ['100rem', `${theme('lineHeight.0')}`],
			130: ['120rem', `${theme('lineHeight.0')}`]
		}),
		lineHeight: {
			0: '1.0',
			10: '1.1',
			20: '1.2',
			30: '1.3',
			40: '1.4',
			50: '1.5',
			60: '1.6'
		},
		borderWidth: {
			0: '0',
			10: '1px',
			20: '2px',
			30: '4px',
			40: '6px',
			50: '8px',
			60: '10px',
			70: '20px'
		},
		borderRadius: {
			0: '0',
			5: '3px',
			10: '5px',
			20: '10px',
			25: '14px',
			27: '22px',
			30: '30px',
			40: '75px',
			full: '9999px'
		},
		extend: {
			padding: {
				'1/4': '25%',
				'1/2': '50%',
				'9/16': '56.25%',
				'3/4': '75%',
				full: '100%'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: {
					DEFAULT: '#000000',
					80: 'rgba(0, 0, 0, 0.8)',
					60: 'rgba(0, 0, 0, 0.6)',
					50: 'rgba(0, 0, 0, 0.5)',
					40: 'rgba(0, 0, 0, 0.4)',
					30: 'rgba(0, 0, 0, 0.3)',
					20: 'rgba(0, 0, 0, 0.2)',
					10: 'rgba(0, 0, 0, 0.1)'
				},
				white: {
					DEFAULT: '#FFFFFF',
					pure: '#FFFFFF',
					80: 'rgba(255, 255, 255, 0.8)',
					60: 'rgba(255, 255, 255, 0.6)',
					50: 'rgba(255, 255, 255, 0.5)',
					40: 'rgba(255, 255, 255, 0.4)',
					30: 'rgba(255, 255, 255, 0.3)',
					20: 'rgba(255, 255, 255, 0.2)',
					10: 'rgba(255, 255, 255, 0.1)'
				}
			},
			backgroundColor: (theme) => ({
				main: theme('colors.gray.200'),
				'main-reverse': theme('colors.black')
			}),
			textColor: (theme) => ({
				main: theme('colors.black'),
				'main-reverse': theme('colors.white')
			}),
			borderColor: (theme) => ({
				main: theme('colors.black'),
				'main-reverse': theme('colors.white')
			}),
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('postcss-focus-visible')]
};
