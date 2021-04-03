<script lang="ts">
	export let title: string;
	export let id: string;
</script>

<section class="space-y-160 _px-security" {id}>
	<h2 class="_section-title text-90 font-bold text-center" data-scroll>
		<span class="relative"
			>{title}
			<span
				class="_underline absolute top-full right-0 w-4/5 h-40 rounded-full bg-main-reverse-80 transition-transform duration-[1400ms] ease-out-expo origin-top-left transform scale-x-0 -translate-x-full"
			/></span
		>
	</h2>
	<slot />
</section>

<style>
	._section-title {
		scroll-margin-top: theme('spacing.100');
	}

	:global(._section-title[data-scroll='in']) {
		._underline {
			transform: none;
		}
	}
</style>
