<script lang="ts">
	import type { Book } from 'src/global';
	import { assets } from '$app/paths';
	import Modal from '$lib/components/Modal.svelte';

	export let book: Book;

	let modal;

	const id = book.title.replace(/ /g, '-').replace(/'/g, '').toLowerCase();
	const metas = [
		{
			label: 'Publié en',
			key: 'releaseYear'
		},
		{
			label: 'Pages',
			key: 'pages'
		},
		{
			label: 'ISBN',
			key: 'isbn'
		}
	];

	const onOpenModal = () => {
		modal.send({ type: 'OPEN' });
	};
</script>

<article class="flex flex-col items-center">
	<button
		on:click={onOpenModal}
		aria-controls={id}
		class="w-260 h-290 mb-70 focus:outline-none"
		tabindex="-1"
	>
		<picture>
			<img src="{assets}/img/{book.image}.jpg" alt={book.alt} class="w-full h-full" />
		</picture>
	</button>
	<h3>
		<button on:click={onOpenModal} class="rounded-10 p-40 _focus-default" aria-controls={id}
			><span class="font-bold">{book.title}</span> ({book.releaseYear})</button
		>
	</h3>
	<Modal {id} bind:service={modal}>
		<div class="max-w-[70ch] mx-auto space-y-100">
			<h3 class="text-center text-80">{book.title}</h3>
			{#each book.synopsis as text}
				{#if text.tag === 'p'}
					<p>{text.content}</p>
				{:else if text.tag === 'blockquote'}
					<blockquote>{text.content}</blockquote>
				{/if}
			{/each}
			<hr class="bg-black h-30 border-none" />
			<aside>
				<dl class="flex flex-col space-y-70">
					{#each metas as meta}
						<small>
							<dt class="font-bold">{meta.label}</dt>
							<dd>{book[meta.key]}</dd>
						</small>
					{/each}
				</dl>
			</aside>
		</div>
	</Modal>
</article>
