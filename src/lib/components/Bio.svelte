<script lang="ts">
	import { assets } from '$app/paths';
	import { site } from '$lib/data/site';
	import Section from '$lib/components/Section.svelte';
</script>

<Section title="Biographie" id="bio">
	<article
		class="flex flex-col xl:flex-row items-center xl:items-start space-y-160 xl:space-y-0 xl:space-x-100 max-w-md mx-auto"
	>
		<figure class="xl:sticky top-80 space-y-70">
			<picture>
				<img
					class=" max-w-320 rounded-10 ring-offset-main ring-black-80 ring-offset-4 ring-4 shadow-2xl"
					src="{assets}/img/{$site.bio.image}"
					alt="Portrait de François Guérin"
					title="François Guérin"
				/>
			</picture>
			<figcaption class="text-10 text-center">Photo Sophie Perreault</figcaption>
		</figure>
		<div class="flex flex-col space-y-70">
			{#each $site.bio.text as paragraph}
				<p class="max-w-[70ch]">{paragraph}</p>
			{/each}
		</div>
	</article>
</Section>
