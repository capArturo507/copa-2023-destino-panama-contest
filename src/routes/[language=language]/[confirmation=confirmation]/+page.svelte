<script lang="ts">
	import CompletedHero from '$lib/components/completed-hero.svelte';
	import Sponsors from '$lib/components/sponsors.svelte';
	import { currentPage } from '../../../lib/stores';

	currentPage.set('confirmation');

	export let data;

	$: ({ language, participacion } = data);

	const title: Record<App.SupportedLanguage, string> = {
		en: 'Thanks for Participating',
		es: 'Gracias por Participar',
		pt: 'Obrigado por participar'
	};
</script>

<svelte:head>
	<title>{title[language]}</title>
</svelte:head>
<CompletedHero {language} {participacion} />
<div class="container mx-auto my-32">
	<Sponsors {language} />
</div>
