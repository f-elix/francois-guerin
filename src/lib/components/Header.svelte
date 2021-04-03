<script lang="ts">
	import { site } from '$lib/data/site';
	import type { Link } from 'src/global';
	import IconDownArrow from '$lib/components/IconDownArrow.svelte';

	const { header, global } = $site;
	const links = header.links as Link[];
	const title = global.siteTitle;

	const onLinkClick = (e: MouseEvent) => {
		const link = e.target as HTMLAnchorElement;
		const href = link.getAttribute('href');
		if (!href) {
			return;
		}
		const section = document.querySelector(href);
		if (!section) {
			return;
		}
		e.preventDefault();
		section.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<header class="flex flex-col justify-center items-center h-screen">
	<h1 class="h-[1.3em] text-100 font-bold" style="--title-length: {title.length};">
		{#each title as char, i}
			<span class="_typed-char inline-flex relative invisible" style="--i: {i + 1};">
				{#if char === ' '}
					&nbsp;
				{:else}
					{char}
				{/if}
				<span class="_carret absolute left-[0.3em]">|</span>
			</span>
		{/each}
	</h1>
	<nav id="navigation">
		<ul class="_nav-links flex items-center justify-center space-x-70">
			{#each links as link, i}
				<li class="_nav-item flex transition-opacity duration-300">
					<a
						class="_nav-link px-50 py-30 rounded-10 _focus-default pointer:hover:bg-main-reverse-10 font-bold transition-colors"
						style="--i: {i}"
						href="#{link.url}"
						on:click={onLinkClick}>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<a
		class="_arrow-link block mt-200 group focus:outline-none"
		tabindex="-1"
		href="#{links[0].url}"
		on:click={onLinkClick}
	>
		<IconDownArrow
			extClass={'transition-transform duration-500 ease-out transform pointer:group-hover:translate-y-1/4'}
		/>
	</a>
</header>

<style lang="postcss">
	._typed-char {
		--type-speed: 80ms;
		--duration: calc(var(--title-length) * var(--type-speed));
		animation: type var(--type-speed) steps(var(--title-length), jump-none)
			calc(var(--type-speed) * var(--i)) forwards;
	}

	._carret {
		animation: remove var(--type-speed) steps(var(--title-length), jump-none)
			calc(var(--type-speed) * var(--i)) forwards;
	}

	._nav-links:hover > ._nav-item:not(:hover) {
		opacity: 0.5;
	}

	._nav-link {
		animation: slide-up 800ms cubic-bezier(0.2, 0, 0.2, 1) calc(var(--i) * 150ms) forwards;
	}

	._arrow-link {
		animation: slide-up 800ms cubic-bezier(0.2, 0, 0.2, 1) forwards;
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

	@keyframes slide-up {
		from {
			opacity: 0;
			transform: translateY(100%);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
</style>
