<script lang="ts">
	import type { Book } from 'src/global';
	import { site } from '$lib/data/site';
	import Section from '$lib/components/Section.svelte';
	import CardBook from '$lib/components/CardBook.svelte';

	const books = $site.books as Book[];
</script>

<Section title="Parutions" id="parutions">
	<ul class="grid xs:grid-cols-4 gap-x-100 gap-y-160 max-w-xl mx-auto">
		{#each books as book}
			<li>
				<CardBook {book} />
			</li>
		{/each}
	</ul>
</Section>
