<script lang="ts">
	import { site } from '$lib/data/site';

	const { footer, global } = $site;
</script>

<footer
	class="flex flex-col justify-center items-center space-y-70 _px-security py-100 text-center"
>
	<a
		class="p-50 rounded-10 text-70 _focus-default underline _transition-underline underline-transparent pointer:hover:underline-current"
		href={footer.jclLink.url}
		target="_blank"
		rel="noopener noreferrer">{footer.jclLink.label}</a
	>
	<small
		>&#169; <a
			class="underline _focus-default"
			href="https://github.com/f-elix"
			target="_blank"
			rel="noopener noreferrer">Félix Guérin</a
		> 2021</small
	>
</footer>
