<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('site.json');
		const data = await res.json();

		return {
			props: { data },
			context: { test: 'test' }
		};
	};
</script>

<script>
	import '../global.css';

	import { site } from '$lib/data/site';

	import ScrollOut from 'scroll-out';

	import SrNav from '$lib/components/SrNav.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		ScrollOut({
			threshold: 0.4
		});
	});

	site.set(data);
</script>

<SrNav />
<Header />
<main class="space-y-200" id="content">
	<slot />
</main>
<Footer />
