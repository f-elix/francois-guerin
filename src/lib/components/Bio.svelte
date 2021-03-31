<script lang="ts">
	import { assets } from '$app/paths';
	import { site } from '$lib/data/site';
	import Section from '$lib/components/Section.svelte';
</script>

<Section title="Biographie" id="bio">
	<article class="flex mx-w-sm mx-auto">
		<picture class="sticky top-0">
			<img
				src="{assets}/img/{$site.bio.image}"
				alt="Portrait de François Guérin"
				title="François Guérin"
			/>
		</picture>
		<div class="flex flex-col max-w-[70ch] space-y-70">
			{#each $site.bio.text as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</article>
</Section>
