<script lang="ts">
	import { site } from '$lib/data/site';
	import CardBook from '$lib/components/CardBook.svelte';
	import type { Book } from 'src/global';

	const books = $site.books as Book[];
</script>

<section class="space-y-160 _p-security" id="parutions">
	<h2 class="text-90 font-bold text-center">Parutions</h2>
	<ul class="grid xs:grid-cols-4 gap-x-100 gap-y-160 max-w-xl mx-auto">
		{#each books as book}
			<li>
				<CardBook {book} />
			</li>
		{/each}
	</ul>
</section>
