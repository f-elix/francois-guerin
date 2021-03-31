import { createMachine, assign, interpret } from '@xstate/fsm';

const siteScrollMachine = createMachine(
	{
		id: 'siteScroll',
		initial: 'unlocked',
		context: {
			scrollTop: 0
		},
		states: {
			unlocked: {
				on: {
					LOCK: {
						target: 'locked',
						actions: ['setScrollTop']
					}
				}
			},
			locked: {
				on: {
					UNLOCK: {
						target: 'unlocked',
						actions: ['resetScrollPos']
					}
				}
			}
		}
	},
	{
		actions: {
			setScrollTop: assign({
				scrollTop: () => {
					const html = document.documentElement;
					const scrollTop = window.scrollY;
					html.style.setProperty('--scroll-top', `${scrollTop}`);
					html.style.setProperty('--scroll-padding', `${window.innerWidth - html.clientWidth}`);
					html.dataset.siteScroll = 'locked';
					return scrollTop;
				}
			}),
			resetScrollPos: (context) => {
				const html = document.documentElement;
				delete html.dataset.siteScroll;
				if (typeof window !== 'undefined' && context.scrollTop > 0) {
					window.scrollTo({
						top: context.scrollTop
					});
				}
			}
		}
	}
);

export const siteScroll = interpret(siteScrollMachine).start();
