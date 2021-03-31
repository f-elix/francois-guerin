import type { StateMachine } from '@xstate/fsm/lib/types';
import { createMachine, assign } from '@xstate/fsm';

import { siteScroll } from './siteScroll';

export type ModalContext = {
	el?: HTMLElement;
};

export type ModalState =
	| {
			value: 'idle';
			context: ModalContext & {
				el: undefined;
			};
	  }
	| {
			value: 'open';
			context: ModalContext & {
				el: HTMLElement;
			};
	  }
	| {
			value: 'closed';
			context: ModalContext & {
				el: HTMLElement;
			};
	  };

export type ModalEvent =
	| { type: 'INIT'; data: { el: HTMLElement } }
	| { type: 'OPEN' }
	| { type: 'CLOSE' }
	| { type: 'TOGGLE' };

export const modal = (id: string): StateMachine.Machine<ModalContext, ModalEvent, ModalState> => {
	return createMachine<ModalContext, ModalEvent, ModalState>(
		{
			id,
			initial: 'idle',
			states: {
				idle: {
					on: {
						INIT: {
							target: 'closed',
							actions: ['assignModalEl']
						}
					}
				},
				closed: {
					on: {
						OPEN: {
							target: 'open',
							actions: ['resetModalScroll', 'lockScroll']
						},
						TOGGLE: {
							target: 'open',
							actions: ['resetModalScroll', 'lockScroll']
						}
					}
				},
				open: {
					on: {
						CLOSE: {
							target: 'closed',
							actions: ['unlockScroll']
						},
						TOGGLE: {
							target: 'closed',
							actions: ['unlockScroll']
						}
					}
				}
			}
		},
		{
			actions: {
				assignModalEl: assign({
					el: (_, event) => {
						if (event.type !== 'INIT') {
							return;
						}
						return event.data.el;
					}
				}),
				resetModalScroll: (context, event) => {
					if (event.type !== 'OPEN') {
						return;
					}
					context.el.scrollTop = 0;
				},
				lockScroll: () => {
					siteScroll.send({ type: 'LOCK' });
				},
				unlockScroll: () => {
					siteScroll.send({ type: 'UNLOCK' });
				}
			}
		}
	);
};
