<script lang="ts">
	import type { Book } from 'src/global';
	import { assets } from '$app/paths';
	import Modal from '$lib/components/Modal.svelte';

	export let book: Book;

	const id = book.title.replace(/ /, '-').toLowerCase();
</script>

<article class="flex flex-col items-center space-y-70">
	<picture class="w-260 h-290">
		<img src="{assets}/img/{book.image}.jpg" alt={book.alt} class="w-full h-full" />
	</picture>
	<h3>
		<a href="#{id}"><span class="font-bold">{book.title}</span> ({book.releaseYear})</a>
	</h3>
</article>
<Modal {id}>
	<h3>{book.title}</h3>
</Modal>
