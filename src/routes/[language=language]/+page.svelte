<script lang="ts">
	import HomeHero from '$lib/components/home-hero.svelte';
	import Sponsors from '$lib/components/sponsors.svelte';
	import WhatToInPanama from '$lib/components/what-to-in-panama.svelte';
	import Winners from '$lib/components/winners.svelte';
	import { currentPage } from '$lib/stores.js';

	currentPage.set('home');

	export let data;

	$: ({ language } = data);

	const title: Record<App.SupportedLanguage, string> = {
		en: 'Panama Destination Contest - Copa Airlines',
		es: 'Concurso destino Panamá - Copa Airlines',
		pt: 'Concurso destino Panamá - Copa Airlines'
	};
</script>

<svelte:head>
	<title>{title[language]}</title>
</svelte:head>
<HomeHero video="./promo-video-{language}.mp4" {language} />

<div
	class="container mx-auto grid auto-rows-min my-32 sm:my-48 md:my-64 lg:my-72 gap-32 sm:gap-48 md:gap-64 lg:gap-72 text-grey-600"
>
	<Winners {language} />
	<Sponsors {language} />
	<WhatToInPanama {language} />
</div>
