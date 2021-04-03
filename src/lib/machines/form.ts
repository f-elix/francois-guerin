import { createMachine, interpret } from '@xstate/fsm';

type FormContext = Record<string, never>;

type FormEvent =
	| { type: 'SUBMIT'; form: HTMLFormElement }
	| { type: 'SUCCESS' }
	| { type: 'RESET' }
	| { type: 'ERROR' };

type FormState =
	| { value: 'idle'; context: FormContext }
	| { value: 'submitting'; context: FormContext }
	| { value: 'success'; context: FormContext }
	| { value: 'error'; context: FormContext };

const RESET_DELAY = 10000;

const formMachine = createMachine<FormContext, FormEvent, FormState>(
	{
		id: 'form',
		initial: 'idle',
		states: {
			idle: {
				on: {
					SUBMIT: 'submitting'
				}
			},
			submitting: {
				entry: ['submit'],
				on: {
					SUCCESS: 'success',
					ERROR: 'error'
				}
			},
			success: {
				entry: ['reset'],
				on: {
					RESET: 'idle'
				}
			},
			error: {
				on: {
					SUBMIT: 'submitting'
				}
			}
		}
	},
	{
		actions: {
			submit: async (_, event) => {
				if (event.type !== 'SUBMIT') {
					return;
				}
				const { form } = event;
				try {
					const res = await fetch(form.action, {
						method: form.method,
						body: new FormData(form),
						headers: {
							Accept: 'application/json'
						}
					});
					if (res.ok) {
						form.reset();
						formService.send({ type: 'SUCCESS' });
					}
				} catch (error) {
					console.warn(error);
					formService.send({ type: 'ERROR' });
				}
			},
			reset: (_, event) => {
				if (event.type !== 'SUCCESS') {
					return;
				}
				setTimeout(() => {
					formService.send({ type: 'RESET' });
				}, RESET_DELAY);
			}
		}
	}
);

export const formService = interpret(formMachine).start();
