<script lang="ts">
	import { site } from '$lib/data/site';
	import type { Link } from 'src/global';

	const { header, global } = $site;
	const links = header.links as Link[];
</script>

<header class="flex flex-col justify-center items-center h-screen">
	<h1 class="h-[1.3em] text-100 font-bold" data-typing>
		{#each global.siteTitle as char, i}
			<span class="_typed-char relative invisible" style="--i: {i + 1};"
				><span>{char}</span><span class="_carret absolute top-[-0.1em] right-[-0.325em]">|</span
				></span
			>
		{/each}
	</h1>
	<nav id="navigation">
		<ul class="flex items-center justify-center space-x-70">
			{#each links as link}
				<li>
					<a
						class="p-50 rounded-10 _focus-default pointer:hover:bg-main-reverse-40 pointer:hover:text-main-reverse transition-colors"
						href="#{link.url}">{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="postcss">
	._typed-char {
		--type-speed: 100ms;
		animation: type var(--type-speed) linear calc(var(--type-speed) * var(--i)) forwards;
	}

	._carret {
		animation: remove var(--type-speed) linear calc(var(--type-speed) * var(--i)) forwards;
	}

	@keyframes type {
		from {
			visibility: hidden;
		}
		to {
			visibility: visible;
		}
	}

	@keyframes remove {
		from {
			visibility: visible;
		}
		to {
			visibility: hidden;
		}
	}
</style>
