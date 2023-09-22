<script>
	import CompletedHero from '$lib/components/completed-hero.svelte';
	import Sponsors from '$lib/components/sponsors.svelte';
	import { currentPage } from '../../../lib/stores';

	currentPage.set('confirmation');

	export let data;

	$: ({ language, participacion } = data);
</script>

<svelte:head>
	<title>Gracias por participar</title>
</svelte:head>
<CompletedHero {language} {participacion} />
<div class="container mx-auto my-32">
	<Sponsors {language} />
</div>
