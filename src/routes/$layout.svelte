<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import { assets } from '$app/paths';

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

<svelte:head>
	<title>{$site.global.siteTitle}</title>
	<meta name="description" content={$site.global.siteDescription} />
	<meta property="og:title" content={$site.global.siteTitle} />
	<meta property="og:description" content={$site.global.siteDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{assets}/img/fg.jpg" />
	<meta property="og:url" content="https://francoisguerin.me/" />
	<link rel="canonical" href="https://francoisguerin.me/" />
	<link
		rel="preload"
		href="{assets}/fonts/anonymous-pro-v14-latin-regular.woff2"
		as="font"
		crossorigin="true"
	/>
	<link
		rel="preload"
		href="{assets}/fonts/anonymous-pro-v14-latin-700.woff2"
		as="font"
		crossorigin="true"
	/>
</svelte:head>

<SrNav />
<Header />
<main class="space-y-200 _px-security" id="content">
	<slot />
</main>
<Footer />
