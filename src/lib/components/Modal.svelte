<script lang="ts">
	export let id: string;
</script>

<div
	class="_modal invisible flex justify-center fixed top-0 left-0 w-full h-screen pt-280 overflow-y-auto"
	role="dialog"
	aria-modal="true"
	{id}
>
	<a href="#" aria-hidden="true" tabindex="-1" class="absolute inset-0 bg-black-30" />
	<div class="relative w-full max-w-xs mx-auto _p-security rounded-30 bg-white-pure">
		<slot />
	</div>
</div>

<style lang="postcss">
	._modal:target {
		visibility: visible;
	}
</style>
