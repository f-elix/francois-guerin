import { createMachine, assign, interpret } from '@xstate/fsm';

const siteScrollMachine = createMachine(
	{
		id: 'siteScroll',
		initial: 'unlocked',
		states: {
			unlocked: {
				on: {
					LOCK: {
						target: 'locked',
						actions: ['lockScroll']
					}
				}
			},
			locked: {
				on: {
					UNLOCK: {
						target: 'unlocked',
						actions: ['unlockScroll']
					}
				}
			}
		}
	},
	{
		actions: {
			lockScroll: () => {
				const html = document.documentElement;
				html.style.setProperty('--scroll-padding', `${window.innerWidth - html.clientWidth}`);
				html.dataset.siteScroll = 'locked';
			},
			unlockScroll: () => {
				const html = document.documentElement;
				delete html.dataset.siteScroll;
			}
		}
	}
);

export const siteScroll = interpret(siteScrollMachine).start();
