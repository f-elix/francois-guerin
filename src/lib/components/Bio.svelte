<script lang="ts">
	import { assets } from '$app/paths';
	import { site } from '$lib/data/site';
	import Section from '$lib/components/Section.svelte';
</script>

<Section title="Biographie" id="bio">
	<article
		class="flex flex-col items-center xl:items-stretch xl:flex-row space-y-160 xl:space-y-0 xl:space-x-100 max-w-md mx-auto"
	>
		<picture>
			<img
				class="xl:sticky top-80 max-w-320 rounded-10 ring-offset-main ring-black-80 ring-offset-4 ring-4 shadow-2xl"
				src="{assets}/img/{$site.bio.image}"
				alt="Portrait de François Guérin"
				title="François Guérin"
			/>
		</picture>
		<div class="flex flex-col space-y-70">
			{#each $site.bio.text as paragraph}
				<p class="max-w-[70ch]">{paragraph}</p>
			{/each}
		</div>
	</article>
</Section>
