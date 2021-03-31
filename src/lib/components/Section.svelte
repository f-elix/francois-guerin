<script lang="ts">
	export let title: string;
	export let id: string;
</script>

<section class="space-y-160 _p-security" {id}>
	<h2 class="text-90 font-bold text-center">{title}</h2>
	<slot />
</section>
