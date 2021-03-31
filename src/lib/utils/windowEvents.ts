const listeners = {};

const handleEvents = (event) => {
	const handlers = listeners[event.type];
	handlers.forEach((handler) => {
		handler(event);
	});
};

const on = (event: string, handler: (event: Event) => void): void => {
	if (typeof window === 'undefined') {
		return;
	}
	const evt = listeners[event];
	if (evt) {
		evt.add(handler);
		return;
	}
	listeners[event] = new Set([handler]);
	window.addEventListener(event, handleEvents);
};

const off = (event: string, handler: (event: Event) => void): void => {
	if (typeof window === 'undefined') {
		return;
	}
	const evt = listeners[event];
	if (!evt) {
		return;
	}
	evt.delete(handler);
	if (evt.size === 0) {
		window.removeEventListener(event, handleEvents);
		delete listeners[event];
	}
};

export const globalEvent = (
	event: string,
	handler: (event: Event) => void,
	action = 'on'
): void => {
	if (action === 'off') {
		off(event, handler);
		return;
	}
	on(event, handler);
};
