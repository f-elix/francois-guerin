<script lang="ts">
	import type { StateMachine } from '@xstate/fsm/lib/types';
	import type { ModalContext, ModalState, ModalEvent } from '$lib/machines/modal';
	import { interpret } from '@xstate/fsm';
	import { modal } from '$lib/machines/modal';

	import { onMount } from 'svelte';

	import { trapFocus } from '$lib/utils/trapFocus';
	import { globalEvent } from '$lib/utils/windowEvents';

	import { site } from '$lib/data/site';

	import IconClose from './IconClose.svelte';

	export let id: string;

	let modalEl: HTMLElement;
	export let service: StateMachine.Service<ModalContext, ModalEvent, ModalState> = interpret(
		modal(id)
	).start();

	const closeUrl = `#${id}-`;

	onMount(() => {
		service.send({ type: 'INIT', data: { el: modalEl } });
	});

	const onKeydown = (e) => {
		if (e.which !== 27) {
			return;
		}
		service.send({ type: 'CLOSE' });
	};

	const onClose = (e) => {
		e.preventDefault();
		service.send({ type: 'CLOSE' });
	};

	const onModalScroll = (e) => {
		if ($service.value !== 'open') {
			return;
		}
		const scrollTop = modalEl.scrollTop;
		const height = modalEl.offsetHeight;
		const scrollHeight = modalEl.scrollHeight;
		if (scrollTop + height >= scrollHeight) {
			service.send({ type: 'CLOSE' });
		}
	};

	globalEvent('keydown', onKeydown);
</script>

<div
	bind:this={modalEl}
	use:trapFocus
	class="_modal invisible _grid-stack fixed z-50 top-0 left-0 w-full h-screen opacity-0 overflow-hidden"
	role="dialog"
	aria-modal="true"
	data-state={$service.value}
	on:scroll={onModalScroll}
	{id}
>
	<a
		on:click={onClose}
		href={closeUrl}
		aria-controls={id}
		aria-hidden="true"
		tabindex="-1"
		class="block w-full h-full bg-black-60 focus:outline-none"
	>
		<span class="sr-only">{$site.ui.close}</span>
	</a>
	<div
		class="_modal-content flex flex-col relative w-full max-w-sm mx-auto mt-[25vh] mb-[75vh] py-100 px-150 rounded-30 bg-white-pure"
	>
		<a href={closeUrl} class="self-end _focus-default" on:click={onClose}>
			<span class="sr-only">{$site.ui.close}</span>
			<IconClose />
		</a>
		<slot />
	</div>
</div>

<style lang="postcss">
	._modal {
		--duration: 100ms;
		transition: visibility 0s linear var(--duration), opacity var(--duration) linear;

		._modal-content {
			transition: transform 400ms var(--ease-out-expo);
			transform: translateY(30%);
		}
	}

	._modal[data-state='open'],
	._modal:target {
		transition-delay: 0s;
		@apply visible opacity-100 overflow-y-auto;
	}
	._modal[data-state='open'] ._modal-content,
	._modal:target ._modal-content {
		transform: none;
	}
</style>
