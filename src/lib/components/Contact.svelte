<script lang="ts">
	import { site } from '$lib/data/site';
	import { formService } from '$lib/machines/form';
	import Section from './Section.svelte';

	const onSubmit = (e) => {
		formService.send({ type: 'SUBMIT', form: e.target });
	};
</script>

<Section id="contact" title="Contact">
	<form
		class="_form flex flex-col space-y-100 max-w-360 mx-auto"
		action={$site.contact.formAction}
		method="post"
		on:submit|preventDefault={onSubmit}
		data-state={$formService.value}
	>
		<div class="flex flex-col space-y-100">
			<label>
				<span>Nom</span>
				<input type="text" name="Nom" />
			</label>
			<label>
				<span class="_required">Adresse courriel</span>
				<input type="email" name="Courriel" aria-required="true" required />
			</label>
			<label>
				<span class="_required">Message</span>
				<textarea name="Message" cols="30" rows="10" aria-required="true" required />
			</label>
			<button
				class="self-start py-70 px-100 rounded-10 bg-main-reverse-80 text-main-reverse _focus-default pointer:hover:bg-main-reverse-50 transform active:translate-y-[3px] transition-all"
				type="submit">Envoyer</button
			>
		</div>
		<div class="_grid-stack">
			<p class="_success text-green-700 bg-green-200" role="status">{$site.contact.success}</p>
			<p class="_error text-red-700 bg-red-200" role="alert">{$site.contact.error}</p>
		</div>
	</form>
</Section>

<style lang="postcss">
	._form {
		@apply transition-opacity;

		label {
			@apply flex flex-col space-y-70;

			._required {
				@apply relative;

				&::after {
					content: '*';
					vertical-align: super;
					@apply text-red-700 text-10;
				}
			}
		}

		input,
		textarea {
			@apply px-60 py-50 rounded-5 shadow focus:ring-4 ring-black-80 transition-shadow duration-100;
			@apply focus:outline-none;
		}

		._success,
		._error {
			--duration: 400ms;
			transition: visibility 0s linear var(--duration), opacity calc(var(--duration) / 2) linear,
				transform var(--duration) var(--ease-out-expo);
			@apply flex items-center justify-center;
			@apply p-80 rounded-10 text-center font-bold text-60 shadow;
			@apply invisible opacity-0;
			transform: translateY(50%);
		}

		&[data-state='submitting'] {
			@apply opacity-50 pointer-events-none;
		}

		&[data-state='success'] ._success {
			@apply visible opacity-100;
			transform: none;
			transition-delay: 0s;
		}

		&[data-state='error'] ._error {
			@apply visible opacity-100;
			transform: none;
			transition-delay: 0s;
		}
	}
</style>
