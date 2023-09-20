<script>
	import CompletedHero from '$lib/components/completed-hero.svelte';
	import Sponsors from '$lib/components/sponsors.svelte';
</script>

<svelte:head>
	<title>Obrigado por participar</title>
</svelte:head>
<CompletedHero
	step="Paso 3 de 3"
	opening="Você respondeu corretamente"
	middle="preguntas, en"
	closing="Você já está participando!"
	sharetext="Comparte el concurso"
	corrects={8}
	timeinms={86400000}
/>
<div class="container mx-auto my-32">
	<Sponsors title="Patrocinadores" />
</div>
